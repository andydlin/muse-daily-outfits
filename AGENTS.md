# Daily gallery updates (Muse and other editors)

The approved gallery is the self-contained root `index.html`. GitHub Pages serves it directly; there is no build step. Preserve the approved design when adding daily outfits.

## Add one outfit

1. Prepend one record to `var OUTFITS = [...]` inside `index.html`, newest first. Preserve every existing record and all existing image bytes.
2. Use the existing schema: `file`, `name`, `dateLabel`, `category`, `theme`, `description`, `alt`, `front`, and `back`. Each view has `file`, `name`, and `alt`. Keep `dateLabel` in the format `Wed, Oct 28, 2026`, and filenames prefixed with `YYYY-MM-DD`.
3. Inline full-resolution WebP images as `data:image/webp;base64,...`. Keep the front and back views paired correctly. Do not add remote image/font/script dependencies.
4. Optional accessory variants use the existing `hairOff.front` and `hairOff.back` structure, including helmet variants. A toggle must swap both views together. Update the `acc(i)` label helper if a new accessory needs a different label.
5. Counts, outfit numbering, navigation bounds, and canvas dimensions derive from `OUTFITS.length`; do not hardcode or manually change them.

## Preserve the interaction and design

- Toggle labels are **Grid** and **Detailed**; **Grid** is the initial default.
- Both modes use the same expanding horizontal rectangular canvas. Do not revert to a scrolling list or a narrow mobile grid. Mobile initially shows about three columns; pan exposes the rest of the wider board.
- Keep mouse/touch dragging, trackpad panning, pinch/modified-wheel zoom, zoom buttons, Fit all, and reset.
- Photo taps open the larger viewer. Preserve previous/next outfit navigation, swipe navigation, front/back flips, full-screen photo view, original-resolution downloads, accessory toggles, keyboard navigation, and dialog focus handling.
- Keep compact cards and the warm dotted canvas. No logo, hero, featured outfit, or 3D turntable.
- `assets/` contains legacy images; leave it intact. It is not the active source for this inlined gallery.

Before committing, check that `OUTFITS` parses as JSON, dates remain newest first, every record has front/back images, all pre-existing records are unchanged, and the embedded JavaScript passes `node --check` after extraction. Preview Grid and Detailed plus the outfit viewer. Update this guidance only when the owner requests a behavior change.
