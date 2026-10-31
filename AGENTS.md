# Daily gallery updates (Muse and other editors)

The approved gallery is the self-contained root `index.html`. GitHub Pages serves it directly; there is no build step. Preserve the approved design when adding daily outfits.

## Add one outfit

1. Prepend one record to `var OUTFITS = [...]` inside `index.html`, newest first. Preserve every existing record and all existing image bytes.
2. Use the existing schema: `file`, `name`, `dateLabel`, `category`, `theme`, `description`, `alt`, `front`, and `back`. Each view has `file`, `name`, and `alt`. Keep `dateLabel` in the format `Wed, Oct 28, 2026`, and filenames prefixed with `YYYY-MM-DD`.
3. Inline full-resolution WebP images as `data:image/webp;base64,...`. Keep the front and back views paired correctly. Do not add remote image/font/script dependencies.
4. Optional accessory variants use the existing `hairOff.front` and `hairOff.back` structure, including helmet variants. A toggle must swap both views together. Update the `acc(i)` label helper if a new accessory needs a different label.
5. Counts, outfit numbering, navigation bounds, and canvas dimensions derive from `OUTFITS.length`; do not hardcode or manually change them.

## Preserve the interaction and design

- The view toggle is icon-only (a grid icon and a detailed icon, with aria-labels **Grid** and **Detailed**); **Grid** is the initial default.
- Both modes use the same expanding horizontal rectangular canvas. Do not revert to a scrolling list or a narrow mobile grid. Mobile initially shows about three columns; pan exposes the rest of the wider board.
- Keep mouse/touch dragging, trackpad panning, pinch/modified-wheel zoom, zoom buttons, Fit all, and reset.
- Photo taps open the larger viewer. Preserve previous/next outfit navigation, swipe navigation, front/back flips, full-screen photo view, original-resolution downloads, accessory toggles, keyboard navigation, and dialog focus handling.
- Keep compact cards and the warm dotted canvas. No logo, hero, featured outfit, or 3D turntable.
- `assets/` contains legacy images; leave it intact. It is not the active source for this inlined gallery.

## Scenes on cards (owner-requested, Oct 30, 2026)

- Each card plays one random scene video on load, chosen from waking, idle, working, making-something.
- Scene files live under `scenes/<slug>/` in this repo (same Pages host, not a third-party dependency). `<slug>` derives from the outfit's front filename minus `-front.webp`; no per-record scene field is needed.
- Videos are muted and looping, and play only while their card is near the viewport and showing its front view. Flipping to the back pauses the video and shows the back photo; the viewer still shows photos only.
- If a scene file is missing or fails, the card keeps its photo. New outfits get this automatically once their scenes are uploaded.

Before committing, check that `OUTFITS` parses as JSON, dates remain newest first, every record has front/back images, all pre-existing records are unchanged, and the embedded JavaScript passes `node --check` after extraction. Preview Grid and Detailed plus the outfit viewer. Update this guidance only when the owner requests a behavior change.
