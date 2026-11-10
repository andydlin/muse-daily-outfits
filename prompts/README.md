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

## Approved Project image assignments

All eight references are selected and approved as assignments; none are unchecked. Preserve these **exact filenames**, including the spelling `Secondy`. These are ChatGPT Project image names, not repository asset paths; attach the actual approved images when using them.

| Role | Exact Project filename | Priority and scope |
| --- | --- | --- |
| Primary Jolly face | `MASTER_Jolly_Face_Jett.png` | Default daily Jolly face/identity anchor. |
| Secondary Jolly face | `MASTER_Jolly_Face_Secondy_Goku.png` | Supporting daily face reference; primary wins on conflicts. |
| Primary MapleStory face | `MASTER_Maple_Face_Ice_Lightning_Mage.png` | Default MapleStory face anchor within the shared Jolly identity. |
| Secondary MapleStory face | `MASTER_Maple_Face_Secondy_Buccaneer.png` | Supporting MapleStory face reference; this face role does not redefine the separate Buccaneer palette role. |
| Primary cubby | `MASTER_Cubby_Bulbasaur.png` | Default daily cubby geometry, palette, LED, and shadow anchor. |
| Secondary cubby | `MASTER_Cubby_Secondary_Link.png` | Supporting cubby reference; does not override Bulbasaur or the workflow-specific MapleStory palette. |
| Primary texture — proposed/conditional | `MASTER_Texture_Mechanic.png` | Selected texture candidate; use only when explicitly approved for the current material pass. Does not establish a new default or supersede Wild Hunter V4. |
| Secondary texture | `MASTER_Texture_Secondary_Sylveon.png` | Supporting material reference within the active texture standard; does not independently authorize a material change. |

## Visual-reference hierarchy

- Choose references **by role and workflow**, not by one global ranking. Face references control identity; cubby references control architecture/lighting within the applicable palette; texture references control material finish. They do not supply costume, pose, boss, or scene content.
- Within a role, primary takes precedence and secondary supplies compatible supporting detail. Do not average conflicting faces, palettes, or finishes.
- **Daily scenes:** Jett primary / Goku secondary face; Bulbasaur primary / Link secondary cubby. Apply the shared handmade material standard; Mechanic requires explicit approval for its conditional texture use, with Sylveon supporting only the active standard.
- **MapleStory scenes:** Ice Lightning Mage primary / Buccaneer secondary face. **Wild Hunter vs Giant Blackheart remains the established V4 material/texture authority**; final approved **Buccaneer vs Lord Pirate** remains the newer cubby color/shadow authority. Bulbasaur/Link must not overwrite that palette. Original Black Clover remains a legacy geometry/framing reference only where explicitly applicable.
- Mechanic's selected primary-texture assignment is **proposed/conditional**, not approval to replace Wild Hunter V4. A replacement requires explicit user approval to revise that standard, followed by updates to the shared material spec and affected workflows. Until then, Wild Hunter wins any MapleStory texture conflict; Sylveon remains supporting.
- Approved Sylveon — Meadow Dance remains a slim LED fixture-shape reference where needed; this is separate from Sylveon's secondary texture role.
- Hex targets are visual guides, not flat fills. Match the actual approved reference pixels. Do not blend Daily Outfit and MapleStory recolor palettes unless explicitly requested.
- In targeted edits/recolors, the approved source and requested edit scope take precedence over masters for all untouched content. Attaching a master never authorizes unrelated changes. If a required reference is unavailable, request it rather than inventing its appearance.

## Versioning and history

This is the consolidated working specification (November 9, 2026), assembled from saved Create/Redo V1/V2, Master Recolor V1, Approved Color Addendum V2, and MapleStory Hero Pairing V4 (Wild Hunter texture lock). The older files remain archived in the user's ChatGPT Library; they have not been erased or overwritten.

When changing the standard, update the relevant shared file and the affected workflow, add a dated note below, and verify the other workflows do not contradict it.

### Change log
- 2026-11-09: Initial modular library; Jolly face lock, thin flush LED, Bulbasaur daily recolor, Buccaneer MapleStory color, Wild Hunter material lock, 75–85% MapleStory hero/action silhouette.

- 2026-11-09: Recorded all eight selected Project reference assignments with exact filenames and role-specific priority. Mechanic remains proposed/conditional; Wild Hunter V4, workflow palettes, and approved-source edit scope remain in force.
