## What's Changed

### ✨ New Features
- **3D surfaces.** Curved parts (masks, carvings, sculpted shapes) are roughed in layers with an end mill, then finished with a ball end mill that follows the surface, with level passes around steep walls. A smaller end mill clears holes, slots and corners the big one can't reach. It switches on by itself when a part is mostly curved, and "Cut curved faces in 3D" turns it on or off.
- **STL and 3MF files** open as well as STEP, including Bambu Studio projects. A Size card on the Model step changes X, Y and Z, together or each on its own, as the part sits; an STL that looks like it was drawn in inches offers to make it inches.
- **Chamfers.** Chamfers drawn in the model are found and cut with a V-bit of their angle. "Add Chamfer to top surfaces" chamfers every top edge of a flat face, outside, pockets and holes, or both. V-bit angles now come from the Tool Library.
- **Threads.** Threads modeled in holes (M4×0.7, 8-32...) are found and cut with a single-form thread mill, after the hole is cut to the thread's minor diameter.
- **Holes.** A drill a little smaller than a hole now drills it: as a pilot before an end mill cuts it to size, or on its own with a note saying how much under size. A through hole deeper than any small end mill reaches is drilled through as a pilot, then cut to size with an end mill as long as the part.
- Mesh STEP files (a scan or mesh saved as STEP) open in a moment instead of minutes.
- **Recent parts.** The last 10 parts you open are kept in the browser with their settings; pick one from "Recent parts" on the Model step. Opening the same file again picks up where you left it.
- **Faster on a small computer.** Planning threaded and chamfered parts is about 10× faster. A quiet seconds counter shows while ncCAM works, and on a Raspberry Pi or similar a tip suggests opening ncSender in a laptop or desktop browser, where ncCAM runs several times faster.
- **Smooth preview timeline.** Dragging or jumping on the timeline no longer freezes the page: the tool moves at once and the stock catches up. The safety check runs in the background.
- The flip note points to the Spoilboard Toolbox plugin for locating pins.
- On a small computer such as a Raspberry Pi, a slow plan shows a note: open ncSender from a laptop or desktop browser and ncCAM runs there, usually several times faster.

### 🐛 Bug Fixes
- Some mesh STEP files made the planner hang.
- Parts with many small round holes plan much faster (a threaded part: 75 s to 6 s on a Raspberry Pi 5).
- An update now takes effect without restarting ncSender.
- A rare offset error could put a wall pass inside the part.
- On a thin part, an added chamfer skipped the whole outside edge when its tip went below the tabs; now it lifts over just the tabs.
