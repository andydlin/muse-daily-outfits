# Gizmo’s Outfit Gallery

A static gallery served directly from the repository root by GitHub Pages. No build step or third-party runtime dependencies.

- `index.html`: outfit metadata, canvas, and photo viewer.
- `images/`: original-resolution WebP photos for the viewer and downloads.
- `images/thumb/`: card thumbnails.
- `scenes/`: compressed short MP4 clips, four scenes per outfit.
- `assets/`: legacy archive; retained intact.

Cards mount near the visible area. Up to four visible videos play at a time; zoomed-out overviews use photos. Opening the viewer or hiding the tab stops playback. Photos and scene files remain hosted with the site.

## Daily updates and checks

Follow `AGENTS.md`. Add photos, matching thumbnails, and scene clips alongside each new outfit record. Preserve existing media bytes and metadata.

Run `node tools/check-gallery.cjs` and extract the inline script for `node --check`. The check compares records with HEAD, so run it before committing an optimization; adding an outfit intentionally changes that baseline. Preview Grid, Detailed, pan/zoom, and the viewer in a browser as well.

## Storage

Keep original master media backed up separately. At the present encoding sizes, a typical outfit adds roughly 2 MB including four clips. Dedicated object storage can be added later; no media migration or external account is required for this version.
