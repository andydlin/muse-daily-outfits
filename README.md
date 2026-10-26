# Barry's Outfit Gallery — GitHub Pages export

Prepared 2026-10-22 from the live Muse-hosted Outfit Gallery (slug: outfit-gallery).

## What's in here

- `index.html` — the complete gallery page (84 KB, self-contained except for the images below and Google Fonts)
- `assets/` — 89 WebP images, 25 MB total: for each outfit, the main photo plus turntable views (front, three-quarter, side, back, waving, sitting); the Oct 20 Dragon Ball look also has with-hair / without-hair view sets
- `icon.webp` — gallery icon
- `.nojekyll` — tells GitHub Pages to serve the files exactly as-is, with no Jekyll processing

Covers 10 looks, Oct 13–22, 2026: School Uniform, Ninja, Zelda (Oct 15), Demon Slayer, Zelda (Oct 17), Naruto, Pokemon Trainer, Dragon Ball, Eevee, Attack on Titan.

Deliberately left out: the Muse artifact's `audits/` folder (~159 MB of build screenshots/reports), `space.json`, and `AGENTS.md` — none of those are part of the website.

## Publish it on GitHub Pages

1. Create a new repository on github.com (pick the name, e.g. `outfit-gallery`).
2. Upload / push everything in this folder to the repo's `main` branch, keeping `index.html` at the root and `assets/` as a folder.
3. In the repo: Settings → Pages → Build and deployment → Source: "Deploy from a branch", Branch: `main` / `(root)`.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repo-name>/`.

Size check: the whole site is ~25 MB. GitHub Pages allows up to 1 GB for a published site and GitHub blocks individual files over 100 MB — every image here is under 0.5 MB, so there's years of daily outfits of headroom at ~2.5 MB per new look.

## Public vs private — the one real trade-off

- **Public repo:** GitHub Pages is free, and the gallery is viewable by anyone with the link. Anyone can also download the images.
- **Private repo:** GitHub Pages from a private repo needs GitHub Pro / Team / Enterprise (per GitHub's Pages limits doc). On a free account, a private repo won't publish a Pages site.

## Keeping it updated after the move

The daily 8:20am outfit job currently updates the Muse-hosted gallery. If GitHub becomes the home, say whether you want:

- **Mirror:** daily job keeps working as now, and each new look is also committed to the GitHub repo (needs a GitHub login/token connected here once), or
- **Replace:** GitHub is the only gallery, and the daily job pushes there instead.

Either way, a one-time GitHub sign-in on this machine is required before any push can happen — it is not currently logged in (`gh auth status`: not logged into any GitHub host).
