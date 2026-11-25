## What's Changed

### ✨ New Features
- **Feeds shared with QuickCut.** Speeds and feeds now come from [ncsender-feeds](https://github.com/tmuka/ncsender-feeds), the same formula QuickCut uses, with [how it works](https://github.com/tmuka/ncsender-feeds/blob/main/docs/HOW-IT-WORKS.md) written out step by step.
  - **Plastic is now HDPE, Acrylic and Polycarbonate**, each with its own chip load. A thin chip melts plastic.
  - **Aluminum** takes a slightly bigger chip.
  - **Big bits slow the spindle** to keep their chip instead of rubbing, down to 12000 RPM.
  - **The plunge stays within your Z axis's max rate** (`$112`).
  - **No pass goes deeper than the bit's flutes**, when the Tool Library gives their length.
- **Tapered Ball Nose bits.** The ball at the tip finishes the surface, and the cone is kept off steep walls. A note says where it can't reach the foot of a wall.
- **Bull Nose / Bowl bits** for 3D finishing, picked by hand in Operations.
- **Pens and drag knives** run without a spindle start, and never go lower than their Max plunge.
- **`$SAFEZ` retracts** on ncSender 2.0.228 and Pro 2.0.326 or later, so the retract follows your Safe Z setting when the program runs.
- **"Still working" on the part step:** a spinner and the seconds so far while a large part is analyzed.

### 🐛 Fixes
- **A Spindle max no router has is flagged.** If `$30` holds a laser's 0–1000 range, every feed is slowed to match and a part can show hours. ncCAM now says why, on every step.
