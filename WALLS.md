# Wall pages

`scenes-wall.html` keeps its own title and ordered image list. All wall versions
share `wall.css` and `wall.js`; no build step or external dependencies are needed.

To create another version, copy the HTML to a new filename in the repository root,
then change the title, heading and image list. Keep the shared stylesheet and script
references. Store the new images in a separate directory so the original stays intact.

To change only that page's background, add this after the stylesheet link:

```html
<style>:root { --wall-background: #e7d9c2; }</style>
```

Replace the example color with the approved color. The header gradient follows the
same setting. Background color does not alter backgrounds embedded in the images.

Keep five columns and square images; counts and row dimensions are automatic.
Zoom stops at the smallest image's native resolution (one source pixel per CSS pixel).
Tiles have no click action. Drag, trackpad pan, pinch, modified-wheel zoom, buttons,
and keyboard controls share the same behavior across wall versions.

Run `node tools/check-wall.cjs` for the original, or pass one or more page filenames
to check other versions. Then preview desktop and mobile pan/zoom in a browser.
