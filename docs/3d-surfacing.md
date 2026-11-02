# 3D surfacing: design

Status: 3D roughing and parallel finishing are in (see "Order of work").
Before them ncCAM was 2.5D only: it cuts in height bands that start and end
only at flat floors, and treats every wall as vertical. Sloped and curved faces
are reported ("aren't cut in 3D yet") and left square. A sculpted part such as a
mask comes out as a few terraces.

This plan adds 3D roughing and 3D finishing for parts cut from the top, one side
per setup, keeping the flow the same: open, pick the side, stock & zero,
operations, preview.

## What is already there

- **Mesh STEP files read fast** (`src/core/step.js`): a mesh saved as STEP
  (FACETED_BREP) reads in JS: a 20 000-triangle mask in 0.2 s instead of
  OCCT's ~100 s. Sculpted parts usually arrive this way.
- **Ball end mills**: the Tool Library maps them to `kind: 'ball'`
  (`tools.js`), and the simulator already cuts with a ball tip (`sim.js`).
- **A height grid of the part's top**: `columns()` in `mesh.js` finds the top Z
  of the part for each spot on an XY grid.
- **Heightmap simulation and checks**: the preview cuts any G0/G1 program on a
  grid, so 3D paths are previewed and checked (rapids into material, travel,
  part heights) with no change.
- **Undercut and side analysis**: `analyze()` and `sides()` already say how much
  of the part a cut from the top misses, and which side is best up.

## When it applies

`analyze()` already reports `sloped` (upward-facing area that is neither flat nor
vertical). 3D operations are added when the sloped area is a real share of the
part, about 5% of the area seen from the top. Below that (a chamfer or a small
fillet) the plan stays 2.5D as now. The user can turn 3D operations off in
Operations like any other row.

## 1. 3D roughing (z-level clearing)

The same band clearing as now, with extra levels:

- Levels: the part's top, its flat floors, the bottom (as now), **plus** evenly
  spaced levels between them, at most one step-down apart (from the roughing
  tool's feeds and speeds for the material).
- At each level, what to clear is the stock minus the part's section **plus
  everything above it seen from the top** (the `section()` + overhang logic in
  `plan.js` already does this), grown by the allowance left for finishing
  (0.3–0.5 mm; Fast: 0, no finishing pass).
- Each level is cut with the existing pocket and step paths (offset clearing,
  ramp entry, climb), with the largest flat end mill that fits.
- Result: terraces that stay just outside the surface, so the finishing pass
  removes an even, thin layer.

Watch: the number of sections grows (a 220 mm tall part at 3 mm step-down is
~75 slices). `slice()` is linear in triangles, so it stays fast; clipper unions
on overhangs are the cost to measure (see the `unionMany` fix).

## 2. 3D finishing (parallel passes)

The main new piece.

- **Tool**: the largest ball end mill in the library that fits the tightest
  concave curve worth reaching; flat end mill when there's no ball (a worse
  finish, and a note says so).
- **Drop-cutter on a grid**: for each XY point along a pass, the tool's tip Z is
  the lowest it can go without cutting into the part. Computed on the part's
  height grid: for a ball of radius r, tip(x, y) = max over grid cells within r
  of (h(cell) − r + sqrt(r² − d²)). Grid cell about r/10 (0.3 mm for a 6 mm
  ball). Exact triangle drop-cutter can replace it later if the grid version
  leaves steps on steep walls.
- **Passes**: back and forth along X (or along the part's longer side), at a
  stepover from the target ridge height between passes:
  stepover = 2·sqrt(2·r·h − h²). Balanced: h = 0.05 mm, Smooth: h = 0.02 mm.
- **Points**: drop points where the line stays within 0.01 mm (straight
  enough), so files stay a sane size.
- **Bounds**: the part's footprint plus the tool radius; outside the part the
  tool runs at the cut-out depth, never below the bottom.
- **Feeds**: the existing feeds table for the ball tool; slower plunge for
  steep downhill moves.

## 3. Later

- **Contour (waterline) finishing for steep walls**: parallel passes leave wide
  ridges where the surface is steep. A second pass along height levels, only
  where the slope is over ~50°, fixes this.
- **Rest finishing with a smaller ball** in tight concave spots.
- **Pass direction choice** (X, Y, 45°) and a cross pass for Smooth.

## 4. UI

- Operations: "3D rough" and "3D finish" rows, each with a tool picker like the
  others. The ball tool is picked automatically.
- Surface finish follows the existing Fast / Balanced / Smooth.
- Preview: unchanged (heightmap). Run time from the existing timing model;
  expect long programs (hundreds of thousands of lines), so the G-code line
  count is shown as now.
- The "sloped faces aren't cut in 3D" warning goes away when 3D operations are
  on.

## 5. Two-sided parts and flipping

A mask, or anything with features on both faces, needs two setups: cut the top,
turn the part over, cut the other side. ncCAM already offers this ("cut this
side, then turn the part over and make a program for that side") and has a
"turn over" control. What it doesn't do is help the part land in the same place
after the flip.

**The Spoilboard Toolbox plugin can help with pins for part flipping**:
locating pins in the spoilboard and matching holes in the stock, so the flipped
stock sits exactly where the first side's program expects it. Plan for ncCAM:

- In the flip warning (Preview & Load), point to Spoilboard Toolbox for setting
  up the pins (done).
- Stock & Zero: let the user leave room for pin holes in the stock margin
  (outside the part and the tabs), and keep the second side's zero mirrored
  about the pin axis so both programs share one origin.
- Later: a "pin holes" operation in ncCAM's first-side program, matched to the
  pin positions Spoilboard Toolbox uses, if the two plugins can share them.

For 3D, tabs on a curved outline need care: tab tops sit at the part's surface
height at that point, not at a fixed Z, and should go where the surface is low
and steady.

## Order of work

1. Mesh STEP reader (done) and the `unionMany` fix (done).
2. 3D roughing (done): `rough3d`, layers at most min(step-down, 2 mm) apart,
   landing on flat floors of 25 mm² or more; 0.3 mm left. A spot that first
   opens lower down (an unclosed mesh) is cut from the top.
3. 3D finishing (done): `finish3d`, drop cutter on a 0.2 mm grid, each node
   counted half a cell's diagonal nearer so steep walls aren't gouged
   between nodes. Ridges: Fast 0.1, Balanced 0.05, Smooth 0.02 mm.
4. UI (done): the "Cut curved faces in 3D" switch (job.surface3d; automatic
   above 20% sloped surface), rows, colours, ball tool drawing, the
   Spoilboard Toolbox note in the flip check.
5. Done since: waterlines on walls steeper than 50° (Balanced, Smooth),
   rest roughing (`rest3d`) with a smaller end mill for holes, slots and
   corners the roughing end mill can't enter, laps to the wall where a
   layer's wall is vertical, rapids that come down only onto what earlier
   layers cleared, and 3D parts offered lying down (height ranks after reach).
6. Next: faster travel between pockets (every move goes up to the clearance
   plane: about a fifth of the mask's run time), and scaling (below).

Measured on the 20 000-triangle mask, face up, on a Mac: plan 0.35 s,
toolpaths 1.9 s (6.5 s face down: to look at), 137 min run time, no gouges
or rapids into material in the simulation.

## 6. Mesh files and scaling (planned)

Meshes often come without a real size: an STL has no unit, a scan or a
model from a printing site is whatever size it was made at, and a carving
is often wanted bigger or smaller than the model.

- **Open STL and 3MF** as well as STEP: STL (binary and ASCII) is triangles
  with no unit, read as mm; 3MF is a zip of XML with a unit (Bambu Studio
  writes the mesh in a separate `3D/Objects/*.model`, with the build item's
  transform). Both become the same mesh `meshFromFacetedStep` returns.
- **Scale on the Model step**, before choosing the side up: X, Y and Z, each
  as a size (mm or in, as ncSender is set) or a percentage. Locked together
  by default (one changes all three, keeping the shape); unlocked, each axis
  on its own (a relief made shallower, a sign made wider). Quick picks: 25,
  50, 200 %, and "fit the stock" once a stock size is set.
- An STL that looks like inches (the whole part under about 10 units across)
  offers ×25.4 once, rather than guessing.
- Scaling is a 3x3 diagonal on the mesh, applied in the engine (`transformMesh`
  already takes a 3x3). It goes before turning, so the axes are the file's;
  the sizes shown follow the part as turned. It is saved with the job and
  the file, like the side up.
- Scaling one axis changes slopes, so whether the part is 3D, its flat
  floors and its sides are worked out again after scaling.
- Tests: a cube scaled 2× evenly and 1×1×0.5 keeps its volume ratios; a
  dome flattened in Z gets fewer layers; an inch STL offers ×25.4.

## Tests to add

- A hemisphere fixture (faceted STEP): roughing leaves at most the allowance;
  finishing leaves ridges no higher than the target; no gouges anywhere
  (the `check()` helper in `core.test.js` already compares the cut with the
  part's top).
- The mask from both sides: plans in seconds, and the two programs share one
  origin after the flip.
