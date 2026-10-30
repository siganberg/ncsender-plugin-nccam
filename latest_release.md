## What's Changed

### ✨ New Features
- Sizes, fields, steppers and feed rates now show in inches when ncSender is set to imperial units. The G-code you get is still in millimeters (G21).

### 🐛 Bug Fixes
- A tool that isn't in any slot now gets a tool number past the end of the magazine. Before, it used its Tool ID, which could match a slot that holds a different tool.
- The Slow, Normal and Fast speed buttons now respond to every click while the preview is playing.
- Saving to the File Manager now picks a free file name reliably instead of sometimes failing with an error.
