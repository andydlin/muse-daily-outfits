# Muse Outfits — Prompt Library

Canonical prompt specifications for Gizmo's Wall dioramas. This folder contains **instructions only**, not image assets or gallery data.

## Which prompt to use

| Task | Workflow | Shared specifications |
| --- | --- | --- |
| New daily outfit or targeted redo | [daily-outfits/create-redo.md](daily-outfits/create-redo.md) | Jolly, cubby/lighting, plush materials |
| Recolor an approved daily outfit | [daily-outfits/recolor.md](daily-outfits/recolor.md) | Cubby/lighting; Bulbasaur visual reference |
| New MapleStory hero + boss | [maplestory/hero-pairing.md](maplestory/hero-pairing.md) | Jolly, cubby/lighting, plush materials; Wild Hunter texture |
| Recolor an approved MapleStory scene | [maplestory/recolor.md](maplestory/recolor.md) | Cubby/lighting; Buccaneer visual reference |

Shared:
- [shared/jolly-character.md](shared/jolly-character.md)
- [shared/cubby-lighting.md](shared/cubby-lighting.md)
- [shared/plush-materials.md](shared/plush-materials.md)

## Source of truth and usage

1. **GitHub files here are canonical**; ChatGPT Project / Library uploads are reference copies and do **not** sync automatically.
2. When assembling a prompt for an image model, **include the full relevant instructions**, not just references to file paths. Most image models cannot open an arbitrary linked .md file.
3. **Attach the actual approved reference images** with the request. Names like “Bulbasaur”, “Buccaneer”, “Wild Hunter”, “Jett”, or “Black Clover” do not substitute for pixels. Reference priorities vary by workflow; see each spec.
4. **Propose the scene/edits and obtain user approval before rendering or editing**. Do not auto-generate from a checklist control. Produce one image first, no side-by-side unless requested.
5. Source art and approved composition take precedence over stylistic reinterpretation in targeted corrections/recolors.
6. No labels, titles, numbering, branding, UI, or checklist inside images. “Inspired” is used in theme descriptions.
7. The existing root `AGENTS.md` governs the *website/gallery code* and remains unchanged. These files govern *art generation*.

## Visual-reference hierarchy

- **Daily scenes**: approved Muse Jolly identity references for the face; approved **Bulbasaur** for current daily cubby recolors; Sylveon Meadow Dance for the slim ceiling LED geometry where needed.
- **MapleStory scenes**: approved **Wild Hunter vs Giant Blackheart** for material finish; **Buccaneer vs Lord Pirate** for newer color palette; original Black Clover for legacy geometry/framing when explicitly applicable.
- Hex targets are **visual guides**, not flat fills. Where a reference image is provided, visual matching wins over mechanically applying hex values.
- **Do not blend** Daily Outfit and MapleStory recolor reference palettes unless explicitly requested.

## Versioning and history

This is the consolidated working specification (November 9, 2026), assembled from saved Create/Redo V1/V2, Master Recolor V1, Approved Color Addendum V2, and MapleStory Hero Pairing V4 (Wild Hunter texture lock). The older files remain archived in the user's ChatGPT Library; they have not been erased or overwritten.

When changing the standard, update the relevant shared file and the affected workflow, add a dated note below, and verify the other workflows do not contradict it.

### Change log
- 2026-11-09: Initial modular library; Jolly face lock, thin flush LED, Bulbasaur daily recolor, Buccaneer MapleStory color, Wild Hunter material lock, 75–85% MapleStory hero/action silhouette.
