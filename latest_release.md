## What's Changed

### ⚡ Faster
- **Detailed 3D parts plan again in seconds.** After the first plan, ncCAM keeps the slow 3D work with the part, so picking another finishing tool, moving zero, or changing the stock or an option replans in a few seconds instead of over a minute. A 620,000-triangle STL: the first plan goes from 76 s to 48 s on a MacBook Air, then about 3 s per change. The toolpaths are the same as before.
- While a long first plan runs, a note says a detailed part takes a while the first time.

### 🐛 Bug Fixes
- A tool picked in Operations stays shown while the new plan runs. Before, the dropdown snapped back to the old tool until the plan finished, so on a big part it looked like it ignored the pick.
