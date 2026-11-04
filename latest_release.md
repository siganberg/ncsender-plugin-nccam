## What's Changed

### ✨ New Features
- **Size fields take any unit.** Type a size in mm or inches, whatever your machine uses: `1/4"`, `6mm`, `1-1/2 in`, `1,5mm`, or a sum like `12mm+1/4"`. It becomes your machine's units when you leave the field or press Enter. Up and Down step the value (Shift 10, Alt 0.1). The same as QuickCut's fields, from the shared [ncsender-unit-input](https://github.com/tmuka/ncsender-unit-input) library.
- **Save to File Manager is a switch**, as in QuickCut, and is remembered. While it's on, Load into ncSender also saves the program to File Manager › ncCAM.

### 🐛 Bug Fixes
- Keyhole, roundover, cove and other shaped router bits filed as flat end mills in the Tool Library are no longer picked for pockets and cut-outs.
- A V-bit picked by hand that is too small for the chamfer width is no longer used (its body would cut a step past the cone); another is used, with a note.
