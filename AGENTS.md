# Daily gallery updates (Muse and other editors)

The gallery is the root `index.html` plus its image and scene files. GitHub Pages serves it directly; there is no build step. Preserve the approved design when adding daily outfits.

## File layout (since the Oct 30, 2026 split)

- `index.html` — the page. It holds `var OUTFITS` and all code, but **no image data**. It is small (tens of KB).
- `images/<filename>.webp` — one full-resolution WebP per outfit view (front, back, plus accessory-variant views when they exist).
- `images/thumb/<filename>.webp` — a 460px-wide WebP thumbnail for every view above. Cards show thumbnails; the viewer and downloads use the full-resolution files. If a thumbnail is ever missing, the card falls back to its full-resolution file.
- `scenes/<slug>/` — one 540×540 grid encode per scene clip (waking, idle, working, making-something). See "Scenes on cards" below.

Do NOT reintroduce inlined `data:image/...` images or a top-level `file` field on records — the Oct 30, 2026 split removed them (they duplicated the front photo and made the page ~23 MB). Records carry paths, not image data.

## Add one outfit

1. Prepend one record to `var OUTFITS = [...]` inside `index.html`, newest first. Preserve every existing record exactly.
2. Use the existing schema: `name`, `dateLabel`, `category`, `theme`, `description`, `alt`, `front`, and `back`. Each view has `file`, `name`, and `alt`, where `file` is the path `images/<filename>.webp` (NOT a data URI). Keep `dateLabel` in the format `Wed, Oct 28, 2026`, and filenames prefixed with `YYYY-MM-DD`.
3. Add the new view files under `images/` and their 460px-wide thumbnails under `images/thumb/` (same filenames), and push them in the SAME commit as the edited `index.html`, so no record ever points at a file that is not in the repo. Keep the front and back views paired correctly. Do not add remote image/font/script dependencies.
4. Optional accessory variants use the existing `hairOff.front` and `hairOff.back` structure, including helmet variants. A toggle must swap both views together. Update the `acc(i)` label helper if a new accessory needs a different label.
5. Counts, outfit numbering, navigation bounds, and canvas dimensions derive from `OUTFITS.length`; do not hardcode or manually change them.

## Preserve the interaction and design

- The view toggle is icon-only (a grid icon and a detailed icon, with aria-labels **Grid** and **Detailed**); **Grid** is the initial default.
- Both modes use the same expanding horizontal rectangular canvas. Do not revert to a scrolling list or a narrow mobile grid. Mobile initially shows about three columns; pan exposes the rest of the wider board.
- Keep mouse/touch dragging, trackpad panning, pinch/modified-wheel zoom, zoom buttons, Fit all, and reset.
- Photo taps open the larger viewer. Preserve previous/next outfit navigation, swipe navigation, front/back flips, full-screen photo view, original-resolution downloads, accessory toggles, keyboard navigation, and dialog focus handling.
- Keep compact cards and the warm dotted canvas. No logo, hero, featured outfit, or 3D turntable.
- `assets/` contains legacy images; leave it intact. It is not the active source for this gallery.

## Scenes on cards (owner-requested, Oct 30, 2026)

- Each card plays one random scene video on load, chosen from waking, idle, working, making-something.
- Scene files live under `scenes/<slug>/` in this repo (same Pages host, not a third-party dependency). `<slug>` derives from the outfit's front filename minus `-front.webp`; no per-record scene field is needed.
- Scene files in this repo are **540×540 grid encodes** (h264, 24fps, 8s). Cards are ~230px wide, so 720p sources are overkill. When uploading newly captured 720×720 clips, re-encode them first (e.g. `ffmpeg -i in.mp4 -vf scale=540:540 -c:v libx264 -crf 24 -preset medium -pix_fmt yuv420p -r 24 -an out.mp4`) and push the encodes; the 720p originals stay in the local archive only.
- Videos are muted and looping. Below 1024px viewport width, at most four visible cards play at once. On larger screens, allow up to eight cards within the viewport plus a 160px surrounding margin, only while showing the default front view at a useful size (at least 140 screen pixels wide). Clips outside the playback budget or playback area release their media source. Pause all clips when the tab is hidden or the outfit viewer is open. Flipping to the back pauses the video and shows the back photo; the viewer still shows photos only.
- If a scene file is missing or fails, the card keeps its photo. New outfits get this automatically once their scenes are uploaded.

Before committing, check that `OUTFITS` parses as JSON, dates remain newest first, every record has front/back file paths that resolve to files included in the push, every view has a thumbnail in the push, all pre-existing records are unchanged, and the embedded JavaScript passes `node --check` after extraction. Preview Grid and Detailed plus the outfit viewer. Update this guidance only when the owner requests a behavior change.

## Canvas performance

- Cards mount only within the visible canvas and a surrounding buffer; keep outfit state separate from card DOM. Use the `cards` map, never `world.children[index]`.
- Full-board dimensions derive from outfit count and measured card height. Fit all may mount the complete collection, but small overview cards stay static.
- Batch pan/zoom painting through requestAnimationFrame. Preserve the reduced-motion preference and accessory/photo behavior.
- Run `node tools/check-gallery.cjs` for data/asset checks and simulated 18-, 365-, and 1,000-outfit runtime checks. These checks do not replace browser preview.
