# Gizmo’s Wall — Experimental MapleStory Floating Islands

## Draft 0.10 · November 13, 2026

Revision 0.10 makes character-scale review an independent required gate after island framing and before artwork approval/background finishing. It records the accepted Corsair hero-only correction, expands the reusable generation prompt and acceptance checklist, and preserves the four island-master and five supplemental environment-reference roles. All changes remain scoped to this experimental floating-island system; shared Jolly, MapleStory face, material and cubby master priorities are unchanged.

This working guide applies to experiments in this chat. Permanent adoption and GitHub specification changes require the user’s explicit approval. Experimental renders retain their assigned reference roles. Approved project masters retain their priority.

## Visual goal

Photorealistic handmade plush miniature battles staged on floating islands inspired by actual MapleStory maps. Use a side-scrolling gameplay composition with dimensional three-quarter characters, both eyes readable where the pose allows, and a shallow view of the floor. Characters, bosses, terrain and effects should feel photographed together as one physical miniature.

## Sources and precedence

Consult the current canonical prompt library before image generation, editing or recoloring.

https://github.com/andydlin/muse-daily-outfits/tree/main/prompts

Relevant files are `shared/jolly-character.md`, `shared/cubby-lighting.md`, `shared/plush-materials.md` and `maplestory/hero-pairing.md`. Consult `maplestory/recolor.md` for recoloring.

The approved experiment replaces the physical cubby presentation with a floating island and open warm cream background. Its measured island framing and smaller hero scale govern these studies. Other identity, face, material and lighting principles continue to apply where compatible with this presentation.

| Purpose | Reference priority |
| --- | --- |
| Overall identity | Jolly foundation, Jett primary and Goku secondary |
| MapleStory facial refinement | Ice/Lightning Mage primary, Buccaneer secondary |
| Material language | Wild Hunter primary, Mechanic secondary, Sylveon tertiary |
| Established cubby foundation | Bulbasaur primary, Link secondary, consulted for applicable shared standards |
| Experimental composition and apparent scale | Supplied floating Ice/Lightning vs Pink Bean original, with latest approved Fighter vs Balrog original as cross-check |
| Experimental camera and foreground staging | Simplified snowy mage scene, checked against original Ice/Lightning |
| Environment-transfer examples | Accepted volcanic altar and nature root-gate studies |
| Experimental website delivery | Opaque PNG with masked exterior matching to #F3E6DD; same page color. Transparency optional by approval |
| Character, boss and map designs | Specific supplied or verified encounter references |

The floating Ice/Lightning scene and `MASTER_Maple_Face_Ice_Lightning_Mage.png` serve distinct roles. Use the floating scene for layout and the named face master for identity.

## Working layout targets

Coordinates start at the top-left. Normalize all values for output resolutions other than 1,254 × 1,254.

| Property | Working target | At 1,254 px | Basis |
| --- | --- | --- | --- |
| Canvas | Square | 1,254 × 1,254 | Approved originals |
| Platform width | 76% | About 953 px | Rounded from approved originals |
| Horizontal center | 50% | x627 | Centered presentation |
| Side clearance | About 12% each | About 150 px each | Derived from width |
| Ground contact line | 64% down | y803 | Rounded from hero boot contacts |
| Connected island bottom | About 81% down as a baseline; may vary with underside design | y1016 baseline | Verify ground placement separately; accepted Black Mage bottom is 78.5% |
| Bottom clearance | About 19% baseline; flexible with underside thickness | About 238 px baseline | Not an independent fixed-position requirement |
| Rear-scenery ceiling | Usually 27–30% down as a starting guide; map-dependent | y339–376 baseline | Accepted Black Mage scenery reaches about 24%; preserve margins and readability |
| Visible hero face width | About 6.8% | 85 px | Provisional cheek-to-cheek anchor |
| Website background | Exact solid exterior and page color | #F3E6DD / RGB 243, 230, 221 | Opaque PNG with separately approved masked background finishing |

These are experimental working targets. Exact acceptance tolerances remain unresolved. Report measured drift for review before inventing hard rejection thresholds.

The scenery ceiling is a planning guide for rear environmental architecture and connected foliage, not a universal hard cap. Map-specific architecture and scenery may vary substantially while the island footprint, hero apparent scale and foreground combat lane remain consistent. It is not automatically a shared cap for bosses, hero accessories or effects. Record environment bounds, hero bounds, boss bounds and effect bounds separately. A distinctive boss feature may extend above the scenery ceiling when explicitly approved; keep full visibility and adequate outer clearance without enlarging the island or hero to accommodate it.

The ground line is a subject-placement reference. The front platform edge, floor rear boundary and steps can occur at other heights. Jumping heroes and hovering bosses retain the same implied ground reference.

The roughly 213 px interval from ground line to island bottom is an image-space placement guide, not a mandatory underside thickness. A shallower taper may end higher without indicating a vertical-position error; check grounded sole contact and platform lip separately before moving the whole island. Front-edge shape and projected surfaces affect its interpretation; allow tapered, map-specific undersides.

Earlier targets of 75% width, 65% ground line, 22% island thickness and 15% bottom clearance preceded the latest original-image review. The table above records the subsequent proposed working values. It remains a draft pending guide review.

## Evidence from the approved originals

Both originals are 1,254 × 1,254. Geometry values below are manual visual boundary readings, usually uncertain by roughly 5–10 px. Faces have additional ambiguity from hair and rotation. Floor readings depend on snow, rubble and occlusion.

| Reading | Ice/Lightning | Fighter |
| --- | --- | --- |
| Platform width | About 958 px | About 966 px |
| Hero boot-contact line | About y800 | About y800 |
| Lowest connected island point | About y1017 | About y1014 |
| Highest scenery | About y365 | About y338 |
| Visible cheek-to-cheek face width | About 80–85 px | About 85–90 px |
| Visible front floor strip | About 25–40 px | About 35–50 px |

These early floor-strip readings describe local visible surfaces. The later boot-to-front-lip clearance estimates below use a different landmark definition. Neither establishes complete walkable floor depth or camera elevation.

Background samples used median RGB values from clear patches. The supplied JPEGs contain subtle variation. Original Ice/Lightning was sampled as #FDE1D3; the user subsequently selected #F3E6DD (RGB 243, 230, 221) as the new exterior and website page color. This is a deliberate palette change, not a new sample from the original. Original staging renders retain their source backgrounds; website delivery uses the separate masked background-finishing workflow below.

## Hero construction and scale

Use the visible cream facial inset, excluding hair, hat, head ornaments and anatomical ears, as the cheek-to-cheek landmark. View angle changes apparent width, so compare similar three-quarter head orientations and cross-check body proportions.

Scale the hero’s head, body, costume, cape and physical equipment coherently. Preserve class-specific weapon proportions and construction. Accommodate weapon reach through staging, grip, pose and encounter spacing.

Hairstyles, hats, bows, long robes and capes may change the total silhouette. Jumping, crouching and lunging may change crown-to-foot height. Maintain recognizable compact plush proportions through these variations.

Faces use fine short velvety cream nap, a subtly fluffier framing border, rounded dark embroidered/button-like eyes with restrained catchlights, rosy cheeks and expressive brows and mouth. Preserve approved class-specific exceptions from the current canonical specifications.

### Required character-scale review — independent from island framing

**Always evaluate; adjust only when needed.** Matching island width, camera or facial inset width does not establish that the hero has comparable apparent scale or overall visual weight. A scene can pass island framing and still fail character-scale review.

1. Compare the actual output side by side with the approved original Ice/Lightning layout and Fighter example at **equal full-canvas display size**, preserving aspect ratio and all margins. Do not crop subjects or independently zoom the scenes to make them look aligned.
2. Evaluate visible cream facial inset width, head/body proportions, torso and limb scale, and the hero's overall silhouette/visual weight. Compare similar head orientations where possible. Report measurements separately from visual judgments and uncertain landmarks.
3. Inspect hats, feathers, bows, hair, capes and physical weapons as a separate silhouette contribution. Retain recognizable costume and equipment proportions; these may extend beyond the body, but must not make the hero unintentionally dominate. Do not impose identical total hero height across different poses/costumes or shrink every elaborate costume automatically.
4. Check the boss and summons independently: boss-to-hero relationship, silhouette clearance, firing space, secondary hierarchy and encounter-specific proportions. A summon may be intentionally smaller than its in-game size to fit the approved composition.
5. Record this gate as pass, repair or uncertain. Numeric targets support visual comparison; neither a close face-width estimate nor matched island width alone is sufficient to mark it pass.
6. If the island is aligned but the hero is oversized, propose a **hero-only coherent scale change** for approval. Scale the hero's head, body, hair, costume and physical equipment together; anchor grounded feet on the existing combat lane. Preserve island footprint/camera, boss and summons unless explicitly authorized otherwise. Reconstruct newly exposed scenery and adjust immediate contact shadows/attack connections only as necessary.
7. After any local scale edit, recheck actual hero size, anatomy/grips, foot contact and integration, as well as island framing, boss and summon preservation. Generative changes are not guaranteed exact transforms or pixel preservation. State the requested percentage separately from the measured/visually accepted result.

The approximately 6.8% facial-inset width remains a provisional planning anchor, not a universal pass/fail threshold and not a substitute for this gate. No new universal numeric tolerance or total-height rule is established by the Corsair example.

### Corsair versus Pianus — accepted scale-correction learning

[Accepted smaller Corsair scene](https://chatgpt.com/library?file_id=libfile_90167c1e7fd08191924dd962422edef9&account_id=personal)

**Role:** supplemental experimental example of elaborate pirate costume, grounded dual-pistol combat, a large full-body fish boss, a translucent Broadside ghost ship and solid Siege Bomber. It does not replace the Ice/Lightning layout authority or any face/material master. Exact #F3E6DD background finishing remains pending for this source; do not use its current background as the color standard.

- The fresh render included the actual island layout master plus Corsair design, full-body Pianus collectible, Aqua Road map and Wild Hunter material reference. Framing still drifted; attaching a layout reference helps specify intent but does not guarantee compliance.
- The user preferred the cubby Pianus design over the collectible interpretation. Corrected to a visible stern pale eye beneath a heavy orange brow, fleshy tan downturned lips, taller orange body, yellow underside, irregular pale forehead markings and orange-yellow fins, while retaining full body and tail. The collectible was useful for completing anatomy, not as the final facial-design authority.
- Summons were deliberately reduced to suit the miniature composition. The golden ship is translucent and was moved to Corsair's left; Siege Bomber is solid matte mechanical equipment on the floor. Neither is part of the hero's physical equipment when performing a hero-only scale correction.
- A user-approved **non-generative uniform resize** produced a 1104 × 1104 resampled scene from the 1254-square source, placed at x75/y15 on a 1254-square canvas. Actual scale was about 88.04%; the selected source ground anchor y894 mapped to y802. Background extension/blending was confined to exterior canvas margins. This preserves composition and designs through resampling, not original per-pixel equality.
- At that global-framing stage, contrast measurements found a platform width of 966 px / 77.03%, x143–1108, and lowest connected island point y997 / 79.51%. Fighter comparison was 964 px / 76.87%, x141–1104 and bottom y1022 / 81.50%. These measurements belong to the **pre-hero-correction** stage.
- Despite matched platform width, the user correctly observed that Corsair still looked substantially larger. The earlier face-width estimate and island measurements had missed the visual weight of her large feathered hat, flowing hair and costume. **Do not repeat the claim that aligned islands establish aligned heroes.**
- The user approved a separate roughly 12–15% hero reduction; the generative edit requested about 13%, anchored at the feet, preserving boss, summons and island in scope. The user visually accepted the smaller Corsair. This is not a verified exact 13% transform, and final face/hero bounds and post-edit island geometry have not yet been independently remeasured into a final acceptance table.
- Next steps for the artwork remain a focused side-by-side character-scale review, recheck of framing/integration, then separately approved exact exterior-background finishing. Acceptance of the correction is not permission for further unapproved image edits.

## Camera and floor

Use original Ice/Lightning and the accepted simplified snowy mage scene as visual camera anchors, with Fighter as a cross-check.

**Foreground staging principle:** place the main combat lane near the front lip. Keep a narrow strip of paving ahead of grounded toes. Extend most environmental depth behind the subjects, where stairs, architecture, roots and landmarks establish the map. Maintain plausible foot contact, shadow and terrain overlap. Keep vertical architecture visually upright and perspective restrained.

Use the actual accepted scene as the edit base when transferring an environment. Preserve the mage as the scale reference during tests. Subtract distracting subjects and effects first, then change the terrain and rear scenery. The neutral teal-figure studies repeatedly drifted in character size and ground placement and are retired as calibration candidates.

Camera elevation, lens or projection parameters and exact floor depth remain provisional. A generated image alone does not identify unique camera settings. The simplified ellipses in the composition studies are schematic floor boundaries.

## Materials and lighting

Follow the current Wild Hunter material hierarchy across the entire scene. Use dimensional sculpted textile hair, fine woven clothes, seams and restrained stitching. Keep the cream face and exposed body short-pile and finely textured. Use cohesive handmade miniature finishes on terrain, stone, plants and bosses.

Armor, swords, horns and mechanical parts retain structured hard surfaces and appropriate matte miniature finishes. Ice, glass and magic may retain translucency and luminous highlights.

Use soft diffuse shared illumination. Let localized spells illuminate nearby paving, armor and characters. Boot and object contact shadows sit on island surfaces. The open background beneath the floating island stays clear of a floor-like cast shadow.

## Physical integration

Render terrain and subjects together with coherent perspective, softness, occlusion and lighting. Grounded feet meet paving with tight contact shadows. Suitable rubble, snow or plants can overlap boot edges naturally.

Hovering subjects show readable air clearance. Effects may occupy that clearance while preserving the floating silhouette. A localized hover shadow and magical illumination may sit on the island beneath them; no floor-like shadow belongs below the island itself. Preserve readable folds and surface texture in dark robes through restrained charcoal highlights and localized light, without turning black fabric gray. Keep weapon grips, hand anatomy and physical weapon components legible.

## Map adaptation and island variation

Choose an actual map and encounter phase as appropriate to the scene. Use screenshots when available, or research characteristic landmarks, architecture, terrain, palette and atmosphere. The user accepted an artistic map-inspired interpretation without a directly attached map image. A map screenshot is optional unless a specific fidelity requirement makes it necessary. Explain when details are interpreted.

Translate recognizable map features into the miniature material language. Preserve a readable combat lane and space for both subjects. Island silhouettes, underside materials, rock formations, roots and architectural remnants may vary with the map while following the shared framing and apparent scale.

Scenery density may vary. Open arenas can remain open. Nature, waterfalls, lava, leaves and debris may extend beyond the solid platform silhouette while retaining outer clearance. Measure the solid island and these extensions separately.

Use the celestial scene as an experimental staging example. Its fictional architecture has not been selected as a reusable map standard.


## Accepted environment transfers

The original Ice/Lightning scene, simplified snow scene, volcanic altar and nature root gate were accepted as sufficiently consistent for this chat’s experimental system. These examples support varying terrain, architecture, vegetation and underside materials while preserving apparent hero scale and foreground staging.

| Reference | Assigned role |
| --- | --- |
| [Original Ice/Lightning](https://chatgpt.com/library?file_id=libfile_269160aaee448191bd3d02ecc0ef97fa&account_id=personal) | Preferred apparent scale and original framing |
| [Simplified snow](https://chatgpt.com/library?file_id=libfile_07b0434181b08191b36056780b515348&account_id=personal) | Working camera and foreground combat-lane reference |
| [Volcanic altar](https://chatgpt.com/library?file_id=libfile_1e02d998aa14819180492f181e64c619&account_id=personal) | Accepted volcanic terrain and architecture transfer |
| [Nature root gate](https://chatgpt.com/library?file_id=libfile_f860d82a28088191a4476a3909fe5ce2&account_id=personal) | Accepted organic terrain, foliage and root-bound underside transfer |

These are experimental reference roles. Overall project master priorities remain those specified above. The volcanic and nature designs are artistic map-inspired interpretations.

### Full-resolution comparison

All inputs measured 1,254 × 1,254. Original, simplified snow and volcanic measurements used supplied JPEGs; nature used the generated PNG. Coordinates are inclusive where bounds are listed.

| Measurement | Original ice | Simplified snow | Volcanic | Nature |
| --- | --- | --- | --- | --- |
| Platform-region width | About 964 px | About 963 px | About 972 px | About 972 px |
| Canvas width percentage | 76.9% | 76.8% | 77.5% | 77.5% |
| Left boundary | x146 | x147 | x140 | x138 |
| Right boundary | x1109 | x1109 | x1111 | x1109 |
| Horizontal center | x627.5 | x628 | x625.5 | x623.5 |
| Highest scenery detected | y363 | y364 | y372 | y350 |
| Lowest island point | y1016 | y1016 | y1016 | y1019 |
| Clear rows beneath island | 237 px | 237 px | 237 px | 234 px |
| Facial comparison patch width | 84 px | 84 px | 84 px | 85 px |
| Approximate sole-contact line | y800 | y800 | y802 | y801 |
| Estimated boot-to-front-lip clearance | 10–25 px | 10–25 px | 15–30 px | 15–35 px |
| Top-region background median | #FDE1D3 | #FDE2D6 | #FDDDD0 | #FDDED0 |

Method and limits

- Platform-region bounds use an RGB contrast mask, measuring Euclidean distance from the median top-region background color. Thresholds of 45 and 65 were checked. The reported wider-bound values use 45.
- Platform bounds were taken within rows 775–849. They include irregular snow, moss and foliage edges. They are distinct from the early manual solid-platform estimates.
- Most boundaries shifted by roughly 1–2 px with threshold choice. Pale snow shifted the detected scenery top more substantially, so its y363 reading has greater uncertainty.
- Facial and boot patches were matched with normalized grayscale correlation over a small range of scales and translations. The 84 px face patch was manually selected from the original cheeks. It provides relative matching evidence and does not independently segment anatomical face boundaries.
- Simplified snow’s facial patch matched the original at essentially the same position and scale. Volcanic matched about 1 px down. Nature matched about 2 px left with an 85 px patch.
- Boot-patch matching suggested about 2 px downward movement in volcanic, and about 2 px left plus 1 px down in nature. Volcanic boot correlation was weaker because lighting and terrain changed.
- Sole-contact and front-lip clearance readings are manual estimates. Snow and moss obscure exact lip boundaries.
- Background medians depend on source encoding and sampled region. A prior volcanic PNG sample differed by one red-channel value from the supplied JPEG.
- These accepted differences establish successful examples. They do not create universal numerical acceptance tolerances.

### Approved website delivery — exact-color opaque PNG

**Default:** finish approved artwork as an **opaque PNG** whose clear exterior background is exactly **#F3E6DD (RGB 243, 230, 221)**. Set the website page background to the same color. Keep the original approved render separately.

This decision supersedes Draft 0.3's transparent-PNG default. The user liked the transparent previews but chose the more conservative solid-background workflow to reduce unintended changes to artwork. It applies only to this experimental floating-island series; shared Jolly, MapleStory and cubby master priorities remain unchanged.

#### Default finishing sequence

1. Create and approve the artwork, including lighting and effects, before background finishing. Preserve its original source file.
2. Propose the exterior-only finishing pass and obtain explicit approval. Process one image at a time.
3. Use a controlled pixel mask to replace clear exterior background with **#F3E6DD**. Do not regenerate the scene merely to obtain the background color, and do not depend on repeated generative color-matching attempts.
4. Include genuine background openings, such as open arches and exterior gaps between branches. Protect actual rear foliage, architecture, characters, skin, equipment and other similarly colored artwork. Background classification needs image-specific review.
5. Before applying a color mask, inspect an overlay against the actual artwork. Background-like colors may also occur in cream faces, white hats, robes, blonde hair, feathered equipment, book pages and pale effects. Protect these surfaces explicitly; one global color-distance threshold is insufficient. Distinguish true enclosed background openings from pale interior objects. Use only the minimal edge blending needed to avoid halos. Preserve snow, icicles, fine foliage, vines, translucent ice and soft spell glows. Retain gradual effect-to-background transitions rather than flattening luminous or translucent artwork to solid background color.
6. Preserve the canvas dimensions, margins, island footprint, position, hero scale, ground placement and camera. Change only the approved background mask and narrow blending fringe. Keep pixels outside that edit region unchanged.
7. Export as lossless **opaque PNG**. Preserve the original and finished copy separately. Do not introduce JPEG compression in the final delivery.

#### Required checks

- Verify all pixels designated as clear exterior background are exactly RGB **243, 230, 221**. Blended silhouette pixels and intentional translucent/glowing effects are not classified as clear background.
- Compare source and output to confirm unchanged dimensions and zero changed pixels outside the authorized mask and blending fringe. Do not claim complete pixel preservation when a fringe was adjusted.
- Inspect fine leaves, hanging vines, pale snow, thin icicles, enclosed openings and effect boundaries at full size. Look for missing detail, peach/white halos, hard cutout edges or rectangular remnants from protected regions.
- View the finished image on the actual **#F3E6DD** webpage at intended display size. Check that the outer image rectangle disappears into the page.
- If an edge or effect cannot be separated reliably, report it and propose a targeted repair for approval. Do not expand the mask or regenerate the scene silently.

Masked exterior matching to the previous #FDE1D3 target was successfully reviewed on volcanic, nature and snow examples in this chat. The newly selected #F3E6DD target requires a new finishing pass on existing opaque assets; their backgrounds are not automatically updated by this guide. This supports the default method; it does not establish that one color threshold or mask works for all scenes. Complex glows and translucent effects still need individual checks.

#### Optional transparency and lessons from testing

Transparent PNGs remain available for specifically approved overlap, flexible page backgrounds or other needs. They are **not** the default website export. Obtain approval before switching a scene to transparency.

The PNG format is lossless; risk comes from extraction or regeneration, not the file format. Distinguish these methods:

| Method | Preservation considerations |
| --- | --- |
| Masked solid-background replacement | Interior pixels can remain unchanged; errors are concentrated in background classification and the edge fringe |
| Non-generative alpha extraction | Can preserve interior RGB, but fine edges, translucent ice and glows require careful alpha and matte handling |
| Generative transparency edit | Can change texture, lighting, shapes, proportions and framing as well as the background; visual acceptance does not establish pixel preservation |

The tree and snow transparent previews looked good on the previous #FDE1D3 peach page. The tree extraction shifted fine texture and lighting. The later combined Ice/Lightning effects-and-transparency pass showed framing drift. Treat these as lessons: **separate artwork creation/effects approval from final background finishing**, and compare every export to its source.

If transparency is requested, preserve the source canvas and margins, genuine alpha, opaque white snow, partial-alpha edges and intended glow falloff. Remove matte contamination without eroding details. Check over #F3E6DD and a contrasting diagnostic backdrop, and disclose unintended artwork changes.

| Experimental test | Assigned role |
| --- | --- |
| [Tree transparency test](https://chatgpt.com/library?file_id=libfile_6e0280207b0c819186b6b598b256620e&account_id=personal) | Historical foliage/branch-gap extraction test; not a default delivery master |
| [Snow transparency test](https://chatgpt.com/library?file_id=libfile_05d61f25982c8191a27b5c53ecd62e3c&account_id=personal) | Historical pale-snow/icicle extraction test; not a default delivery master |
| [Ice/Lightning battle effects test](https://chatgpt.com/library?file_id=libfile_dbf3d4a9fe2c819193c085c3579baeec&account_id=personal) | Experimental glow/ice/snow test with framing drift; not a layout master |

[Website comparison preview](https://gizmo-tree-island-preview.honestpony262.chatgpt.site) uses the current #F3E6DD page color and is a review aid showing experimental exports and source images. Older opaque source images may retain their previous peach backgrounds. Its contents and layout do not override this guide or establish permanent standards.

## Composition studies reviewed in this chat

Boss sizes below are test cases. Encounter-specific proportions remain flexible.

| Study | Tested dimensions | What it demonstrates | Remaining uncertainty |
| --- | --- | --- | --- |
| Tall grounded boss | About 33% canvas height | A taller silhouette fits above the common ground line | Real horns, wings, equipment and scenery overlap |
| Wide grounded boss | About 45% canvas width | A broad silhouette fits within the footprint | Weapons, hair and effects consume the nominal gap |
| Hovering boss | About 25% canvas height; 5% canvas clearance above ground | Vertical separation supports an upward attack path | Aura density and encounter-specific anatomy |

The wide-boss schematic provides about 113 px of horizontal clearance between silhouette bounding extents. This is specific to that arrangement. The hovering study provides about 63 px from the lowest boss point to the ground line.

Study files

- [Tall boss](https://chatgpt.com/library?file_id=libfile_42a9722f579c8191b7bbe4c54a549edd&account_id=personal)
- [Wide boss](https://chatgpt.com/library?file_id=libfile_8c69457b4ce481918d0827b24d88890b&account_id=personal)
- [Hovering boss](https://chatgpt.com/library?file_id=libfile_2299777dbc2481918d42e370985b2e9a&account_id=personal)

## Generation and acceptance system

Numerical prompting guides composition but does not guarantee it. Use three layers: purpose-specific visual references, a concise prioritized scene prompt, and measured review/controlled finishing. A successful style match is not evidence of a successful geometry match.

### Requirement hierarchy

| Type | Requirements | Review behavior |
| --- | --- | --- |
| Hard requirements | Square canvas; full island and required subjects visible; approved subject identity/design; readable correct weapon/grip and limb construction; assigned face/material references; no artwork text/UI; no cubby for this experiment; no ground-like cast shadow below island | Inspect the actual result; flag failures before final acceptance |
| Measured working targets | Platform width about 76%; center x50%; grounded contact y64%; connected island bottom y81%; scenery ceiling usually y27–30%; visible hero face width about 6.8% | Record values and deltas; review together with the references. Universal tolerances remain unresolved |
| Flexible design choices | Rear ruin arrangement, plants, terrain dressing, tapered underside shape, boss-specific proportions and effect paths | Vary within the approved encounter plan while preserving readability and integration |
| Final delivery requirement | Opaque PNG with clear exterior #F3E6DD, unchanged source dimensions and unchanged pixels outside approved finishing mask/fringe | Verify separately after artwork approval; source background drift is not grounds to redraw accepted artwork |

Keep scene-specific exceptions explicit in the approved plan. General cubby hero-dominance percentages do not apply to this smaller floating-island layout. Boss size is encounter-specific; the hero's face is the primary relative scale landmark.

### Reference roles for a fresh render

- Hero/boss design references define costume, hair silhouette, anatomy and physical weapon construction. Before generating, inspect a direct reference for the exact named boss and variant. Verify defining anatomy, proportions, face, wings/horns, armor, hands and feet; a prior stylized render alone may perpetuate a generic or incorrect boss design. If stylized artwork conflicts with the approved direct boss reference, use the direct reference for boss design while keeping assigned face/material masters for rendering style.
- MapleStory face masters define facial refinement within Jolly identity.
- Wild Hunter defines overall handmade materials; Mechanic and Sylveon retain their existing supporting priority.
- When included, floating-island references define layout/camera/apparent scale only. They must not overwrite the chosen characters or environment.
- Do not attach cubby composition imagery without explicitly excluding its frame, lamp, close-up hero size and scene layout.
- For a fresh-render test, create a new scene rather than editing a previous island. State exactly which references were supplied. A prompt-only geometry test and a test using an island layout reference are different experiments; record that distinction.

### Reusable generation prompt

Fill the bracketed fields from the approved scene plan. Keep the priority order; add only necessary encounter-specific details.

```text
Create ONE new square photorealistic handmade plush miniature MapleStory-inspired battle: [HERO] versus [BOSS], in a floating island inspired by [MAP / INTERPRETATION]. This is a fresh scene, not an edit of an earlier island.

PRIORITY 1 — WIDE FLOATING-ISLAND FRAMING
Show the complete miniature from a distance on an open warm cream #F3E6DD background. No cubby or physical frame. Center the platform, spanning approximately x12%–88%. Grounded feet meet the foreground combat lane around y64%. The tapered connected underside has a baseline end around y81%, but its thickness and lowest tip may vary with the approved island design; keep the combat ground line stable. Highest rear scenery usually begins around y27%–30% as a starting guide, with map-specific variation permitted by the approved plan. Track boss/hero/effect bounds separately; [EXPLICITLY APPROVED SILHOUETTE EXCEPTION, IF ANY]. Preserve empty margins; do not zoom in to fill the canvas. Coordinates are percentages from top-left.

PRIORITY 2 — SUBJECT SCALE AND STAGING
The hero's visible cream cheek-to-cheek face width is about 6.8% of canvas width, excluding hair and accessories. Scale the whole hero coherently. Facial width alone does not determine apparent scale: compare head/body proportions and overall visual weight with the supplied approved heroes. Account separately for elaborate hats, feathers, flowing hair, capes and weapons without losing their recognizable proportions. Keep boss and summons as independently staged subjects. [HERO SIDE, FACING, POSE, GAZE]. [BOSS SIDE, FACING, RELATIVE SIZE, GROUNDED/HOVERING STATUS]. Faces, weapon and boss silhouette stay readable. Main combat lane is near the front lip with a narrow paving strip ahead of toes; stairs and most environmental depth are behind the subjects. Use the approved shallow elevated front view, upright architecture and restrained perspective.

PRIORITY 3 — WEAPON AND BATTLE
[PHYSICAL WEAPON SHAPE, COMPONENTS, GRIP, ARM PLACEMENT, MOTION AND TARGET]. [RESTRAINED EFFECT PATH AND CONTACT LIGHT]. Physical equipment must remain distinct from energy effects; hands and limbs must read correctly.

PRIORITY 4 — IDENTITY, MATERIALS AND ENVIRONMENT
Attach the selected floating-island layout reference for framing/camera only, an encounter example only when relevant, and at most the relevant REF_Island_Environment_[TYPE].png when useful for environment construction. Actual map references determine landmarks and staging; supplemental environment examples guide materials and miniature adaptation. State each image's role. Filenames alone do not supply visual references. [ASSIGNED REFERENCE ROLES]. Preserve Jolly identity with approved MapleStory face refinements, fine short velvety face nap, subtly fluffier framing edge, dimensional textile hair and woven clothing. Apply Wild Hunter's cohesive miniature materials to hero, boss and environment; hard equipment stays structured matte miniature material. [MAP LANDMARKS, TERRAIN, REAR SCENERY AND UNDERSIDE]. Keep masonry/foliage detail appropriately small.

Render subjects and terrain together with contact shadows, natural terrain overlaps, consistent perspective and soft shared illumination. [LOCAL EFFECT LIGHT]. No floor-like shadow below the island. No text, labels, UI, branding or watermark.

Output one opaque square image. Exact exterior background matching is a separate approved finishing step; do not sacrifice artwork to chase color accuracy.
```

This prompt is a control brief, not a guarantee. Do not label an unmeasured result “locked” or “exact.” Do not add a fixed total hero-height rule that conflicts with face scale across crouched, jumping or elaborately costumed poses.

### Measurement landmarks and acceptance checklist

Use the actual output resolution. Normalize each coordinate by the corresponding canvas dimension. Record target, observed value, uncertainty and review status.

| Check | Landmark or evidence |
| --- | --- |
| Canvas and framing | Actual pixel width/height; full silhouette and effect clearance; no cropping |
| Platform width and center | Left/right connected platform-lip bounds. State the row range and whether moss, snow or foliage is included. Exclude independent particles and trailing extensions; measure extensions separately |
| Ground line | Grounded hero sole-to-terrain contact, not stair height or frontmost lip; use the implied landing plane for jumping/hovering subjects |
| Underside | Lowest connected solid island point; distinguish hanging vines, water, isolated debris and soft glow |
| Rear-scenery ceiling | Highest connected rear environment; state whether foliage is included. Do not count boss wings/horns as environmental scenery |
| Subject and effect bounds | Record hero silhouette, boss silhouette and effects separately, including wings, horns, accessories and particles. Check approved exceptions, full visibility, overlap/readability and outer clearance |
| Hero face scale | Visible cream facial inset cheek-to-cheek, excluding hair/hat/ornaments. Identify endpoints and uncertainty; cross-check similar three-quarter orientation and compact body proportions |
| Required independent character-scale gate | Equal-canvas side-by-side review of face, head/body proportions, torso/limbs and overall silhouette/visual weight. Inspect hat/hair/cape/weapon contribution separately. Record boss and summon hierarchy independently. Matched face width or island width alone cannot pass this gate |
| Environment detail scale | Compare paving blocks, stair risers and columns relative to hero face and boots; no single universal block size is established |
| Camera and floor | Compare against assigned camera reference; narrow foreground strip, depth behind subjects, upright ruins. Do not infer exact lens/elevation from a single image |
| Weapon and anatomy | Correct physical construction, grip, visible wrist/arm relationships, readable action; no duplicated/missing limbs |
| Physical integration | Foot contact, terrain overlap, shared lighting, perspective and appropriate contact shadows; no pasted cutout appearance |
| Identity/materials | Actual face/eye treatment and surface hierarchy against assigned masters |
| Effects | Faces and physical weapon readable, coherent paths, localized light and sufficient outer clearance |
| Exterior finish | Separate post-approval pixel-mask/background checks from the delivery section |

Use statuses **pass**, **repair**, or **uncertain**. “Pass” may mean visually accepted when that is explicitly stated; it does not imply a measured numeric match. Proposed tolerance bands require user review before becoming rules.

### Choose the repair from the failure

1. **Whole scene too large or displaced, with sound relative proportions:** propose a controlled, non-generative uniform pixel resize and translation of all artwork together and obtain explicit authorization for that method. Prefer it over repeated generative framing edits when preservation of approved detail matters. Never stretch only width to meet a target. Recheck face scale, scenery ceiling, ground line and underside afterward. Do not stretch horizontally/vertically to force all landmarks.
2. **Hero or environment detail scale wrong relative to platform:** whole-image resizing cannot solve it. Propose a targeted subject/environment composition change, preserving approved elements where feasible.
3. **Scenery too tall or underside too deep after framing normalization:** propose an environment-only change; keep hero scale, ground placement and platform width stable.
4. **Grip, anatomy, identity or integration failure:** propose a localized repair. Do not rebuild the whole image solely for a small fix.
5. **Background mismatch only:** use the approved masked pixel finish, not a generative redraw.

Check the complete result again after any repair. Obtain approval before image edits and process one image at a time.

### Fresh Fighter versus Balrog test — November 13, 2026

[Test image](https://chatgpt.com/library?file_id=libfile_5b81ebaf161c819196112a4ed3de3f11&account_id=personal)

Inputs: Fighter/Balrog cubby design reference, Ice/Lightning face master and Wild Hunter material master. No previous floating island was supplied as a composition reference or edit target. Numerical framing instructions were included in the generation prompt. This specifically tested whether written geometry targets plus design/style references were sufficient.

| Check | Target | Observed | Assessment |
| --- | --- | --- | --- |
| Canvas | Square | 1254 × 1254 | Pass |
| Platform-region width | About 76% / 953 px | x49–1218, 1170 px / 93.3% | Repair; +17.3 percentage points |
| Platform horizontal center | x627 | x633.5 | Close to center; width is the larger problem |
| Side clearance in platform band | About 12% each | Left 3.9%, right 2.8% | Repair |
| Highest scenery | y27–30% | y216 / 17.2% | Repair; scenery reaches too high |
| Lowest connected underside | y81% | y1137 / 90.7% | Repair; extends too low |
| Hero sole-contact line | Around y803 / 64% | Approximately y820–827 / 65–66%, visual estimate | Slightly low; endpoints affected by pose and paving |
| Hero facial inset | About 85 px / 6.8% | Appears larger than target; reliable endpoint measurement still pending | Uncertain; do not declare relative scale correct from framing alone |
| Foreground staging/integration | Near front lip, coherent contact | Boots meet paving, rear stairs supply depth, contact and material language read coherently | Visual pass; camera/detail-scale comparison remains provisional |
| Sword/action | Two-handed physical blade, raised-claw contact | Recognizable slotted blade and handle, two-handed stance and visible contact sparks | Visual pass at current viewing size |
| Clear exterior color | Final #F3E6DD | Top 150-row median RGB 251, 232, 218 / #FBE8DA | Finish pending after artwork approval |

Measurement method: Euclidean RGB distance from the median top-150-row background, thresholds 45/55/65. Platform-region bounds measured within rows 800–879; includes lip-adjacent foliage. Width varied by 1 px across thresholds; scenery top varied by 1 px; bottom was stable. These are contrast-mask observations, not semantic segmentation or guarantees about all silhouette details. Sole-contact readings are manual estimates. Hero face endpoints and environment detail-scale checks need a focused comparison before a final repair choice.

**Conclusion:** character design, action and integration transferred more successfully than framing. Written numeric instructions alone did not hold the intended footprint. This image is a diagnostic example, not an approved layout master.

A proposed 76/93.3 ≈ **81.5%** uniform resize, anchored on an estimated current ground line y825 and moved to y803, would put the scenery top near **y307 (24.5%)** and island bottom near **y1057 (84.3%)**. These are calculated predictions, not an applied edit. Thus resizing alone would improve framing but would not satisfy every vertical target. Recheck hero face scale and detail proportions, then decide whether to accept variation or approve a separate scenery/underside repair. No image repair is authorized by this documentation update alone.


### Completed Fighter versus Crimson Balrog test — accepted November 13, 2026

[Accepted finished scene](https://chatgpt.com/library?file_id=libfile_ae502bbb7a1c8191947dd60125f796fb&account_id=personal)

**Assigned role:** accepted experimental example of an integrated melee battle, corrected hero/environment proportions, accurate Crimson Balrog design and exact-color opaque background finishing. The original Ice/Lightning remains the preferred baseline for apparent scale and framing. This Fighter scene does not replace any shared face, texture or cubby master.

#### Corrections that led to acceptance

1. **Fresh generation:** character design/action transferred more successfully than geometry. The platform measured about 93.3% wide despite a 76% written target.
2. **Whole-scene correction:** a uniform pixel resize and translation brought the footprint near the intended width while preserving the relative artwork. This did not independently correct hero face scale, scenery height or underside depth.
3. **Internal composition correction:** the user approved a separate reduction of Fighter, lower rear architecture and a shorter underside. The two-handed sword action, ground contact and natural terrain integration were retained visually. At this intermediate stage, contrast measurements were approximately **76.7% platform width**, **30.1% rear-scenery top**, and **81.5% connected island bottom**.
4. **Boss-design correction:** a direct Crimson Balrog sprite revealed that the prior boss was too stocky and generic. Corrected to a lean brown body, long brown muzzle under an ivory skull-like brow, compact black side horns, slim central horn, tall dark brown wings, substantial dark skull shoulder armor, narrow navy wrist cuffs and black cloven hooves. Retained readable sword-to-claw contact and shared illumination.
5. **Approved silhouette exception:** the user accepted Crimson Balrog's tall wings extending above the rear-scenery ceiling. Keep these recognizable proportions in this encounter. This is a scene-specific exception, not permission to increase every boss's size or change the baseline island/hero scale.
6. **Background-only finish:** a controlled pixel mask set the clear exterior to **#F3E6DD**, with only a narrow edge-blending fringe. The user accepted the finished result after review.

**Measurement provenance:** the 76.7% / 30.1% / 81.5% readings belong to the pre-Crimson-design correction stage. Do not present them as freshly measured final-image geometry. The final image was visually accepted; final hero face width, boss wing bounds and post-correction geometry were not independently remeasured into a complete final acceptance table. Record new final measurements if a later comparison needs that precision. Acceptance does not prove that generative edits preserved every non-target pixel.

#### Crimson Balrog design reference

[User-approved Crimson Balrog sprite](https://static.wikia.nocookie.net/maplestory/images/d/dd/Mob_Crimson_Balrog.png/revision/latest?cb=20091231235815)

Use this sprite for this encounter's recognizable anatomy and equipment, interpreted through the existing handmade miniature material standards. The approved Fighter/Balrog cubby artwork remains useful for Fighter costume and weapon design; it was insufficient as the sole authority for the exact Crimson Balrog silhouette.

#### Final background verification

Source: the user-approved Crimson Balrog correction, followed by the non-generative exterior-only finishing pass. The recorded checks for the finished PNG were:

| Check | Recorded result |
| --- | --- |
| Source and output dimensions | 1,254 × 1,254; unchanged |
| Clear-background mask target | RGB 243, 230, 221 / #F3E6DD |
| Mask pixels at exact target | Verified |
| Masked background pixels | 1,125,906 |
| Narrow blending-fringe pixels | 3,058 |
| Changed pixels outside mask plus fringe | 0 |

The mask included genuine exterior openings while protecting similarly colored subject surfaces. Narrow-fringe pixels were adjusted for edge blending, so this is not a claim that every artwork-edge pixel remained unchanged.

The finished scene was added to the comparison preview beside Ice/Lightning. Publication succeeded. A browser access block prevented the final live-page inspection in that pass; the standalone finished image and pixel checks were inspected. The user subsequently accepted the scene visually.

#### Rules supported by this outcome

- Verify framing, hero face scale and environmental detail/proportions independently.
- Use uniform scene transforms for global framing failures; use separately approved local changes for internal scale or shape failures.
- Verify the exact boss design from a direct reference before generation, rather than repairing a generic interpretation late.
- Preserve physically coherent contact, terrain overlaps and shared lighting through repairs.
- Measure rear scenery, hero, boss and effects as distinct groups. Keep explicit encounter-specific silhouette exceptions.
- Finish accepted artwork with a controlled exterior mask; do not regenerate accepted artwork solely for background color.
- Preserve failed and intermediate measurements as diagnostic history. Promote only explicitly accepted images to their stated experimental reference roles.


## Accepted Priest versus Black Mage test — November 13, 2026

[Finished opaque PNG](https://chatgpt.com/library?file_id=libfile_516d502b15f4819190bf002dc4471598&account_id=personal)

The user accepted this encounter as a successful companion to Fighter and Ice/Lightning. Direct Black Mage sprites controlled hood, robe silhouette, red eyes and aura; the supplied priest artwork controlled hair, costume, winged blue-orb staff and floating book; the supplied Throne of Darkness map controlled blade-like structures, chains, crimson crystals and central throne. Face and material masters retained their assigned roles. The first generation used these design/style references but no floating-island layout image. Thus this is not evidence that an attached layout reference was tested.

The boss hovers on the left, priest stands on the right, and a focused golden ray connects the confrontation. Black woven robes retain legible folds; gold and crimson light integrate subjects with terrain. The map is adapted into finite miniature architecture rather than a full rectangular backdrop.

### Measured final comparison

| Landmark | Fighter supplied JPEG | Accepted Priest / Black Mage PNG |
| --- | --- | --- |
| Canvas | 1254 × 1254 | 1254 × 1254 |
| Platform-lip bounds | x141–1104 | x144–1111 |
| Platform width, inclusive | 964 px / 76.87% | 968 px / 77.19% |
| Horizontal center | 49.64% | 50.04% |
| Hero sole contact | About 65% down, manual estimate | About 64% down, manual estimate |
| Lowest connected island point | y1022 / 81.50% | y985 / 78.55% |
| Highest rear scenery | About 30%, manual estimate; boss wings excluded | About y299 / 23.8% |
| Clear top-background median | RGB 243,230,221 | RGB 243,230,221 |

Method: Euclidean RGB distance greater than 65 from the top-150-row background median. Platform row bands were 63–70% for Fighter and 59–68% for Priest, chosen to capture each lip rather than a shared scenery row. Irregular edge vegetation is included. These are contrast measurements, not semantic segmentation. Foot lines and Fighter rear-scenery readings are approximate. Final face width was visually accepted as comparable, not independently segmented into an exact measurement.

The separate enhanced Ice/Lightning JPEG used in the earlier comparison measured 1265 × 1243 and approximately 78.3% wide. It is a later variant, not automatically a replacement for the original 1254-square layout authority. Normalize axes independently when comparing it; do not stretch it into a square and declare an exact match.

### Explicitly accepted variation

- Island footprint stays consistent in apparent width and horizontal placement. Hero face scale, foreground contact lane and shallow camera remain independent checks.
- Rear architecture and scenery may vary by map, including height and density. The Black Mage architecture reaching higher is accepted; do not impose identical scenery bounding boxes.
- Underside thickness and taper may vary. The Black Mage island ends 37 px above Fighter's while the combat lane remains near the shared ground reference. This is accepted design variation, not a reason to lower the whole island.
- Hovering boss proportions and aura differ from grounded melee bosses without changing the hero scale or island footprint.
- These accepted examples do not establish universal numeric tolerance bands.

### Framing and preservation lesson

The original generation was oversized. Generative framing passes produced approximately 73.3%, then 80.7%, then 77.2% platform width; a requested 5% enlargement did not produce an exact 5% transform. Some fine details changed. These are generative reconstructions, not pixel-preserving resizes. Measure the actual output rather than reporting the requested transform as achieved. Once artwork is approved, propose a deterministic uniform resize/translation for a framing-only correction and obtain explicit authorization for that method. Use generative edits for internal design, anatomy, integration or composition changes that actually require reconstruction. Preserve the last approved source.

### Background finishing and pale-surface protection

The first candidate mask selected pale parts of the priest and book as well as background. It was rejected before delivery. A refined mask protected light interior components and selected subject regions, retaining aura and book-glow transitions while matching clear exterior and genuine architecture openings.

| Final check | Recorded result |
| --- | --- |
| Output | Opaque lossless PNG, 1254 × 1254 |
| Clear mask target | Exact #F3E6DD / RGB 243,230,221 |
| Masked pixels | 1,139,630 |
| Narrow candidate fringe | 14,575 pixels; not all necessarily changed |
| Changed pixels outside mask plus fringe | 0 |
| Original source | Retained separately |

Inspect the background mask overlay before export. Color similarity is not proof that a pixel is background. Protect fine chain/branch boundaries and pale subjects without introducing rectangular protected patches or flattening translucent light. Standalone image and numerical checks were inspected; this pass did not add the scene to or validate it on the live preview page.

## Floating-island reference files — organization and roles

These references are scoped to the experimental floating-island system and do not supersede Jolly, MapleStory face, Wild Hunter texture or cubby master priorities.

| Intended reference filename | Role | Source status |
| --- | --- | --- |
| MASTER_Island_Layout_Ice_Lightning.png | Primary apparent scale, framing, shallow camera and foreground staging | Approved original, background-matched opaque PNG, 1254 × 1254; [file](https://chatgpt.com/library?file_id=libfile_dc85c841d3148191a1e0b90b9bb66f24&account_id=personal) |
| MASTER_Island_Effects_Ice_Lightning.png | Supplemental lighting, electricity, ice and snow effects only; not layout authority | Approved enhanced variant, background-matched opaque PNG, 1265 × 1243; [file](https://chatgpt.com/library?file_id=libfile_88c7a9f28b848191a0b0ed8c3a25e200&account_id=personal) |
| MASTER_Island_Melee_Fighter.png | Integrated melee contact, grounded stance and winged boss | Accepted finished Fighter PNG |
| MASTER_Island_Hover_Black_Mage.png | Hover clearance, dark robes, ranged magic and map-specific scenery | Accepted finished Priest / Black Mage PNG |

The user approved all four reference roles on November 13, 2026. The two Ice/Lightning files were finished to #F3E6DD without resizing and renamed without changing image bytes. The enhanced file remains nonsquare; preserve its native aspect ratio and never use it to override the original square layout master. The user confirmed uploading all nine named files as Project source references. Matching new uploads were verified in Library on November 13, 2026. The runtime Project-source attachment list had not yet refreshed in that verification turn; retrieve or attach actual file bytes as needed rather than assuming filename mention alone supplies an image.

### Supplemental environment references — approved filenames

| Filename | Assigned purpose |
| --- | --- |
| REF_Island_Environment_Garden.png | Miniature trees, blossoms, delicate foliage, pavilion construction, cloud and petal extensions |
| REF_Island_Environment_Waterfall.png | Waterfalls, wet stone, moss, pools and falling-water extensions |
| REF_Island_Environment_Volcanic.png | Basalt, lava overflow, emissive cracks and soft smoke |
| REF_Island_Environment_Ruins.png | Paving, masonry, stairs, shallow stage construction and environmental detail scale |
| REF_Island_Environment_Mechanical.png | Matte miniature metal, machinery, pipes, cables and localized cyan illumination |

All five were finished as opaque 1254 × 1254 PNGs with clear exterior #F3E6DD, preserving source framing. Fine silhouette/effect transitions may blend rather than equal the flat color. The volcanic smoke used a localized matte transition; do not describe every retained effect pixel as unchanged.

These are supplemental environment-construction references, not replacements for the original Ice/Lightning layout authority, hero face/texture masters, or encounter-specific actual map screenshots. Their visual acceptance does not establish exact geometry alignment or validate character scale in empty scenes. Use only the relevant environment file for the selected map. Do not rotate through a fixed catalog of islands or copy its landmarks when the real map calls for different features. Record solid island bounds separately from falling water, lava, roots, clouds, smoke and particles.

Preserve full source canvases and margins; no screenshots, comparison sheets, tight crops or nonuniform stretching. Prefer original approved PNG bytes. Converting a JPEG to PNG does not restore lost detail, and a later variant is not automatically the layout authority. Attach actual files during generation and explicitly assign their roles. Under a five-image input limit, choose the relevant island reference plus encounter design and face/material references; do not silently omit essential design references or claim an omitted image was supplied. Prioritize reference selection in the approved scene plan.

## Working review sequence

1. **Plan and approve:** identify encounter, actual map inspiration, reference roles, physical weapon/grip, pose, hero/boss scale and any summons. Consult current canonical specifications and inspect actual references. Obtain explicit approval.
2. **Generate one scene:** attach actual selected image references with assigned roles; process only one image at a time.
3. **Design-accuracy review:** inspect identity, expression, costume, boss anatomy, weapons/grips, materials, skills and summons. Propose targeted repairs for approval when needed.
4. **Island-framing calibration:** measure platform width, center, ground reference and underside; compare camera/foreground lane with layout master. Scenery height and underside thickness may vary as approved. Prefer an explicitly authorized controlled uniform resize for global framing-only errors.
5. **Required independent character-scale review:** compare at equal full-canvas size against approved Ice/Lightning and Fighter. Evaluate face width, head/body proportions and full silhouette/visual weight. Inspect costume extensions, boss and summons separately. Always evaluate, never automatically shrink.
6. **Character-scale correction if needed:** obtain approval; resize hero and physical equipment coherently, anchored at grounded feet. Preserve boss, summons, island/camera unless explicitly authorized. Recheck actual character size, anatomy, contact, integration and island framing after the edit.
7. **Artwork approval:** report measured values, estimates and unresolved issues distinctly. Obtain artwork acceptance after design/framing/scale/integration checks; do not call a requested percentage a verified result.
8. **Background finishing:** separately propose and obtain approval for opaque PNG matching to #F3E6DD, protecting pale artwork and effects. Do not regenerate accepted art merely for color. Transparency only by specific approval.
9. **Final verification/export:** verify canvas, unchanged authorized geometry, background mask and fringe scope, exact clear color, fine edges and effects. Inspect on the intended page when available; disclose when live-page validation was not performed. Preserve original and finished copies.

Keep artwork free of text, labels, branding, plaques and UI. Measurement diagrams may include explanatory annotations as separate planning artifacts. Any further image repair requires approval.

## Open decisions

- Exact camera parameters and a repeatable complete floor-depth measurement protocol remain provisional. Accepted scene references guide the working camera.
- Broader environmental detail-scale tests may be useful for future map types. The retired neutral teal-figure scenes are not required calibration targets.
- Numerical tolerances for island placement and face scale.
- How far waterfalls, lava, foliage and particles may extend beyond the solid island bounds.
- Behavior for enormous or partly off-island bosses.
- Masking and background-transition handling for complex auras, smoke, particles, waterfalls and extended translucent effects require further testing; optional transparency has the same edge challenges plus alpha handling.

The snow, volcanic and nature transfers complete the currently agreed environment-staging tests. Further scenes or edge-case studies can be planned as needed. Permanent adoption and further GitHub edits remain subject to explicit user direction.
