# ncCAM

An ncSender plugin that turns a STEP part into G-code.

1. **Model**: open a `.step`/`.stp` file and pick the side that faces up (or click a face).
   ncCAM finds the pockets, holes, steps and outline.
2. **Stock & Zero**: material, stock size, where X/Y/Z zero is, holding tabs.
3. **Operations**: one row per operation, each with a tool picked from the Tool Library.
   Switch any off or pick another tool; choose Fast, Balanced or Smooth.
4. **Preview & Load**: the cut plays on a model of the stock as material is removed,
   with checks (fast moves into material, machine travel, tool length). Load it into
   ncSender or save it to the File Manager.

## What it cuts

2.5D parts cut from the top in one setup: flat floors and vertical walls. Sloped or
curved faces and undercuts are reported, not cut in 3D (yet).

- Flatten the top when the stock is taller than the part
- Pockets (with islands), steps, openings: offset clearing, ramp entry, climb milling
- Pocket corners too tight for the first end mill: a smaller one cleans them
- Holes: a drill of the same size, otherwise an end mill spirals down
- Cut-out around the outline, 0.3 mm into the spoilboard, with tabs
- Balanced and Smooth leave 0.2 mm on the walls, then a finishing pass

The G-code uses only G0/G1, G4, M3/M5, M6 and M30, so it runs on grblHAL, FluidNC
and classic Grbl. T numbers follow Settings → Tool Changer → Tool Numbering.

## Development

```
npm install
npm test            # core tests: plans and cuts the fixtures on a heightmap
npm run build       # src/ -> lib/nccam.js (+ the STEP reader's wasm)
node dev/serve.mjs  # http://localhost:8777: the dialog with a fake ncSender API
node dev/ui-run.mjs # headless walkthrough, screenshots in dist/shots
```

- `src/core`: the CAM core (no DOM): mesh, slicing, planning, toolpaths, G-code, heightmap sim
- `src/engine.js`: runs in a Web Worker: STEP reading (occt-import-js) and planning
- `src/ui`: the wizard and the three.js view
- `tests/fixtures`: STEP parts made by `freecadcmd dev/make-fixtures.py`

STEP reading: [occt-import-js](https://github.com/kovacsv/occt-import-js) (Open CASCADE, LGPL-2.1).
