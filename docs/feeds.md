# Feeds, speeds and pass depth (planned, not started)

Planned 2026-11-08. Bring in what QuickCut has learned since it copied ncCAM's formula, and make pass
depth depend on the tool and the cut, not only on the bit's width.

## Where it stands

`feeds()` in `src/core/tools.js`, per op:

- **Feed** = RPM × flutes × chip. The chip per tooth grows with the bit up to the material's cap,
  then gets scaled by the finish (Fast / Balanced / Smooth).
- **Pass depth** = bit diameter × the material's share × the finish. For example, MDF takes 0.5 × D,
  so 3.2 mm with a 1/4" bit.
- **Stepover** = bit diameter × the material's share, at most 90 %.
- **Plunge** = 30 % of the feed, at least 60.

The depth doesn't change with:

- the flute length (`fluteLength` is read, but only to rule tools out);
- whether the cut is a full-width slot or a side cut;
- the tool type (flat or ball);
- the machine's Z rate.

A made-up tool shows the problem. The user's "fake 4\" ball end mill" gets a 50 mm pass depth in MDF.
3D roughing layers use the smaller of the rough and ball depths, so they come out right, but anything
else that uses the ball's depth doesn't.

## What QuickCut has that ncCAM doesn't

From `ncsender-plugin-quickcut/lib/starting-feeds.cjs` (its twin is inline in `config.html`):

- **Plastics split three ways:** HDPE, acrylic and polycarbonate each get their own chip and
  `keepChip` (a thinner chip melts or rubs, so Conservative doesn't slow their feed). ncCAM has one
  `plastic`.
- **Aluminum:** chip 0.0045 and maxChip 0.06, where ncCAM has 0.003 and 0.05.
- **Style menu:** Conservative (chip and cut × 0.75) or Aggressive (chip × 1.25, cut × 1.2), with
  stepover at most 90 %. These map onto ncCAM's Fast / Balanced / Smooth, so decide whether to keep
  one menu or both: style for how hard the machine pushes, finish for the surface.
- **Plunge within the Z axis's max rate** (`$112`, `limits.maxPlunge`). ncCAM caps only the XY feed.

## Pass depth: what to change

1. **Cap the depth at the cutting length:** at most `fluteLength` when the Tool Library has it, and a
   sane ceiling (about 1 × D, and an absolute mm cap) when it doesn't. A made-up or huge tool can't
   plan absurd passes.
2. **Slot or side cut:**
   - A full-width slot (the first ring of a pocket, a cut-out's slot) stays near the material's share.
   - A side cut at a light stepover (wall laps, finishing passes, rest roughing) can go deeper, up to
     the flute length.
   - QuickCut's edge jointing and profile cuts are a guide.
   - This saves depth levels on tall walls, the biggest run-time cost after rapids (see
     `3d-surfacing.md` section 8).
3. **By tool type:** a ball end mill's depth and stepover in roughing should come from its effective
   cutting width at that depth, not its full diameter. V-bits and thread mills already have their own
   rules.
4. **Chip thinning:** with a stepover under half the bit, the chip is thinner than the feed per tooth.
   The feed can rise to keep the chip, which matters for 3D finishing and wall laps.

## Tool-specific values

- **Flutes:** the Tool Library's `metadata.flutes`, else from the name or notes (the shared
  `flutesFromText` rule in WORKING.md: O/0/zero/single flute is 1, "2 flute", "3FL", "double"),
  else 2. Check that ncCAM follows the same order.
- **Saved feeds:** if the Tool Library ever stores feeds per tool (ncSender Discussion #97, or the
  importer's metadata), use them over the formula, with a note.

## How

- Do it through the **feeds library** (WORKING.md, decided 2026-11-04). The materials table and
  `startingFeeds` become one package shared by QuickCut, Gears, Spoilboard Toolbox, CNC Tutor, ncCAM
  and ncCut2D. ncCAM takes it when it releases. Don't fork another copy here.
- Tests:
  - every op's depth is no more than the flute length;
  - a made-up 100 mm tool doesn't make passes deeper than the cap;
  - the run time of the mask and the vhex part, before and after (they should be shorter with the
    same or lighter loads per tooth).
