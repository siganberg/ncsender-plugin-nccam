## What's Changed

### ✨ New Features
- **Drill pilot holes when it's faster.** For round holes an end mill would spiral, ncCAM now times a second way: a drill from your Tool Library takes the middle, then an end mill drops into the pilot and bores the hole to size. It's used only when it's at least 10 % faster, counting 30 s for each extra tool change, and the drill step says how much time it saves. Turn it off with **Drill pilot holes when it's faster** in Operations.

### 🐛 Fixes
- **A laser module is never picked to cut.** A laser filed in the Tool Library as a flat end mill, or with "laser" in its name, looked long enough for any hole.
