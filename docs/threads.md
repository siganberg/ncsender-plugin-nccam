# Thread milling: design

Status: planned, nothing built yet.

Two ways a threaded hole reaches ncCAM:

1. **Modeled threads**: the helix is in the geometry (some CAD exports,
   most printed-part models). The hole's wall isn't a cylinder.
2. **Cosmetic threads** (the usual CAD default): the file has only a plain
   hole at the tap-drill size; the thread is a note in the CAD, not in the
   STEP. ncCAM sees a hole of, say, 3.3 mm and can only guess it is M4.

Both end in the same operation: a thread mill on a helix inside a hole that
ncCAM has already drilled or spiralled to the minor diameter.

## The user's tool

The Tool Library has `type: "thread-mill"`, e.g. "single form thread mill 60
deg m4", diameter 4, SKU `NFC-D3.15×P0.5-0.8`, flute length 1. The fields
ncCAM needs aren't there yet:

- **Cutting diameter** (3.15 here, from the SKU), not the shank's 4.
- **Pitch range** it can cut (0.5–0.8 mm), and the form (60°, single form).
- **Reach**: how deep it can go (neck length), since `flute_length` is the
  1 mm tooth.

Plan: read them from `metadata` keys (`cut_diameter`, `pitch_min`,
`pitch_max`, `reach`), as the Fusion 360 importer fills other fields, else
parse names and SKUs like this one (`D3.15×P0.5-0.8`), else ask on the
Operations row (a small "thread mill details" form, saved in ncCAM's own
storage per tool id). Same question as Discussion #97: whether ncSender's
Tool Library should store these.

## 1. Detecting modeled threads

For each hole ncCAM finds (a through or blind opening whose outline is
round-ish), take sections every pitch/8 over its depth:

- each section is one loop; its distance from the hole's axis by angle,
  r(θ), swings between the minor and major radius once per turn;
- the angle of the largest r moves steadily with height: one turn per pitch;
  the direction says right- or left-hand;
- fit: minor/major diameter, pitch, hand, start and end heights. Snap to a
  standard (metric coarse/fine M2–M12, UNC/UNF #2–1/2") when within
  tolerance, and name it ("M4×0.7").

Rejected (stays a pocket or hole as now): r(θ) not periodic, phase not
linear in z, or more than one swing per turn (a knurl or a polygon).

External threads (a threaded boss) are the same test on an island's outline.
Later: they need the cut-out and any stock around the boss cleared first.

Today such a hole fails the round test (`asCircle`) and is cleared as a
pocket at its largest outline, which cuts the thread away. Until threads are
milled, a found thread should be cut as a plain hole at the minor diameter
(the thread left to a tap), with a note.

## 2. Cosmetic threads (an option)

A hole at a standard tap-drill size (3.3 → M4×0.7, 6.8 → M8×1.25, #29
0.136" → 8-32, #7 0.201" → 1/4-20...) gets an offer on the Operations step:
"Thread these 4 Ø3.3 holes as M4×0.7", off by default, with the standard
picked from a short list (coarse first). The hole op stays as it is; the
thread op follows it.

## 3. The toolpath

- **Order:** after the hole is cut to the minor diameter (drill or spiral),
  before the cut-out.
- **Helix:** centre radius R = (major − cut diameter) / 2. Internal right-hand
  thread, climb milling: start at the bottom, counter-clockwise, rising one
  pitch per turn to the top of the thread. A blind hole starts a pitch or so
  above the bottom (the tool's tip and the drill point).
- **Entry and exit:** an arc in from the hole's centre to R over a quarter
  turn (rising an eighth of a pitch), and the same out, so the tool never
  plunges into the wall.
- **Radial passes:** the thread depth (0.61 × pitch for 60° metric) in 2–3
  passes (Fast 2, Smooth 3 plus a spring pass), smaller R first.
- **Moves:** G1 segments (0.01 mm chord). ncCAM's G-code writer, simulator
  and viewer all work in straight moves; G2/G3 helices would mean teaching
  all three about arcs. Later, perhaps.
- **Feeds:** per tooth at the cutting edge, corrected for the inside arc
  (feed at the tool centre = edge feed × (D − d) / D); slow for wood and
  plastic threads, which are weak in any case: a note for MDF and softwood
  that threads won't hold.
- **Checks:** the cutting diameter fits the minor diameter with clearance;
  the pitch is within the tool's range; the reach covers the depth; the form
  angle matches (60° for metric and unified).

## 4. UI

- "Found in this part": "2 M4×0.7 threads, 8 mm deep".
- Operations: "Mill the threads" row with a thread-mill picker; the tool
  details form when the library lacks them.
- Preview: the helix in the op's colour; the simulator cuts the thread (a
  single-form tool is a disc on a shank: a new stamp shape in `sim.js`).

## 5. Tests

- A synthetic M8×1.25 threaded hole (a helical mesh made in the test):
  detected as M8×1.25 right-hand, depth within a pitch.
- A plain Ø3.3 hole is not a modeled thread; with the option, M4×0.7.
- The helix: radius, pitch per turn, climb direction, entry and exit arcs,
  never deeper than the hole; the simulated thread matches the model's
  within 0.05 mm.

## Order of work

1. Modeled threads found and cut as plain holes at the minor diameter, with
   a note (no thread mill yet). Safe on its own.
2. Thread mill details (fields, SKU parsing, the form).
3. The helix toolpath and the simulator's disc tool.
4. Cosmetic-thread option.
5. External threads.
