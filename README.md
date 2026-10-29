# Barry’s Outfit Gallery

A daily mascot outfit archive, served directly by GitHub Pages from the root `index.html`.

The gallery is one self-contained HTML file: styling, JavaScript, and full-resolution outfit images are inlined. No install or build step is needed. Open `index.html` in a browser or serve the repository with a static server.

## Experience

- Grid is the default; Detailed adds dates, theme names, compact descriptions, and card controls.
- Outfits sit on a pannable, zoomable canvas that grows as a horizontal rectangle as the archive expands.
- Tap a photo for the larger viewer, with previous/next outfits, front/back flipping, accessory variants, full-screen photos, and original-resolution downloads.
- Mouse, trackpad, touch, and keyboard controls are supported. Fit all and reset restore orientation.

## Daily additions by Muse

See [AGENTS.md](AGENTS.md) for the update contract. Prepend the new outfit to `var OUTFITS` in `index.html`, retaining every previous entry and image. Counts, numbering, and layout update automatically. Do not overwrite the approved page with an older Muse export.

This documentation does not configure or modify Muse’s scheduled job. Its update instructions should point at this repository and tell it to follow `AGENTS.md` on each run.

## Files and publishing

- `index.html`: active, self-contained gallery.
- `AGENTS.md`: daily update and design preservation instructions.
- `assets/` and `icon.webp`: retained legacy export assets.
- `.nojekyll`: serves the static files without Jekyll processing.

The existing GitHub Pages configuration can continue serving `main` from the repository root. Merge the redesign pull request to apply it to the published page.
