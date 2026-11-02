# Chamfers: design

Status: planned, nothing built yet.

Two features with one toolpath:

1. **Cut the chamfers the model has.** Today a chamfer on a 2.5D part is
   reported ("Sloped or curved faces aren't cut in 3D yet") and left square.
2. **Add a chamfer to edges the model leaves sharp**: a job option, for
   parts drawn without them (or STL/3MF with no faces to find).

Both cut with a V-bit (or a tool of type `chamfer`) running along the edge,
after the end mills, which already leave the edge square.

## What is already there

- The 2.5D plan leaves a chamfered edge square, so the stock a V-bit must
  remove is exactly the triangle between the square edge and the chamfer.
- `toolKind` maps `v-bit…` to `vbit` and `chamfer…` to `chamfer`; the
  simulator and viewer draw cones (`sim.js`, `viewer.js`).
- `analyze()` already counts upward sloped area; STEP files read through
  OCCT keep B-rep faces (`mesh.faces`: a triangle range per face).
- Tests: `tests/fixtures/chamfered.step` (a plate with a 2 mm chamfer on its
  top edge, `dev/make-fixtures.py`).

**To fix first:** `normalizeTools` drops the V angle, so every V-bit cuts as
60° in the simulator. ncSender's Tool Library keeps it in
`dimensions.taper_angle`. The Fusion 360 importer writes the half angle
(30 for a 60° bit, 45 for a 90° bit); Discussion #97 asks whether that is
the convention. Read `taper_angle` as the half angle, else take the angle
from the name ("60 degree", "90 Deg", "60°"), else 90°.

## 1. Detecting chamfers in the model

A chamfer is a flat face (one B-rep face, or coplanar mesh triangles that
touch) that:

- slopes up (normal between about 15° and 75° from vertical),
- is a narrow band (its width across the edge at most ~10 mm and small
  against its length),
- meets a flat face above (the part's top or a floor) and a vertical wall
  below.

From each one: the edge line (where the wall meets the chamfer), its
height `h` and width `w`, and its angle from vertical (`atan(w / h)`).
The edge line can be an outside outline, a pocket rim or a hole rim.

For mesh files without B-rep faces, group triangles by plane (normal within
1°, sharing edges). A fillet, which is curved, has no single plane and stays
as now (3D or left square).

Where the side shows chamfers that face down (on the bottom edge), they
stay square as now. The second setup after flipping can cut them from that
side.

## 2. Adding chamfers to all edges

A job option on the Operations step: **Chamfer edges: off / size**, with a
size (the width on the top face, 1 mm by default) and which edges:

- **Outside**: the part's outline.
- **Pockets and holes**: rims of openings and pockets.
- Both (default when on).

Edges are found from the sections the plan already makes. At each flat
height `z` (the top and every floor), a top edge is where the material just
below `z` ends with nothing above it. These are the outlines of
`section(z − ε)` that aren't covered by `section(z + ε)`, sampled along the
loop the way `verticalWalls` already does it.

Skipped, with a note: edges on curved (3D) parts; walls shorter than the
chamfer's depth; openings narrower than twice the width, where the bit
would cut the far side.

## 3. The toolpath

For a V-bit with half angle `θ` and a chamfer of width `w` and height `h`:

- When `θ` matches the chamfer (`tan θ = w / h`, within about 2°), the
  cone fits it. The tip runs on the wall line at the chamfer's bottom
  height, so the cone touches both edges of the chamfer.
- The tip is a weak cutter, so it runs a little further out and lower:
  0.3 mm outward and `0.3 / tan θ` down. The cone stays on the same line.
- One pass, or more than one when `h` is more than the bit's step-down for
  the material.
- When no V-bit matches a modeled chamfer's angle, a warning names the angle
  and the chamfer stays square. Any bit cuts an added chamfer; its angle sets
  the chamfer's angle.
- **Corners:**
  - Outside corners come out rounded (the cone turns about the corner), not
    the sharp mitre CAD draws. A note says so.
  - Inside corners follow the end mill's radius.
  - Sharp inside corners (lifting the V-bit into the corner) come later.
- **Round holes:** a hole no wider than the V-bit is chamfered with a single
  plunge at its centre, like a countersink.
- **Order:**
  - after pockets and holes, before the cut-out, so the part is still held
    by the stock;
  - the outside chamfer runs in the cut-out's slot when that is already cut
    to depth; otherwise after the cut-out's first passes.
  - Tabs aren't touched, as long as the chamfer stays above them.
- **Feeds:** from the bit's diameter at the cutting depth
  (`2 · depth · tan θ`), not its full diameter.

## 4. UI

- **Operations:**
  - "Cut the chamfers" (found in the model): count and size, e.g. "4 edges ·
    2 mm × 45°".
  - "Chamfer the edges" (the option): a size field and the edge choice.
  - Each with a V-bit picker that lists the bits whose angle fits.
- **Preview:** a colour for chamfer ops; the cone is already drawn.
- **Warnings:**
  - no V-bit in the library;
  - no V-bit of the chamfer's angle;
  - chamfer deeper than the bit's flute length;
  - edges skipped (too narrow, curved part).
- The "sloped faces aren't cut" warning no longer counts faces found as
  chamfers.

## 5. Tests

- `chamfered.step` with a 90° V-bit: one chamfer op; the simulated cut
  matches the part's top within 0.05 mm along the chamfer; no gouges.
- The same with only a 60° V-bit: a warning, the edge stays square.
- `plate.step` with "chamfer edges 1 mm": outside and hole rims get a pass;
  the simulated corner is 1 mm wide; a hole narrower than 2 mm is skipped.
- A countersink plunge for a small round hole.
- `taper_angle` 30 and 45 read as 60° and 90°; a name with "90 Deg"
  without a `taper_angle` reads as 90°.

## Order of work

1. V angle from the Tool Library (and the simulator using it).
2. "Chamfer the edges" option with outside edges, then pocket and hole rims.
3. Detecting chamfers in STEP files (B-rep faces), then in mesh files.
4. Countersink plunges, then sharp inside corners.
