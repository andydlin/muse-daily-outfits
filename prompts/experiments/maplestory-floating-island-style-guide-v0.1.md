# Gizmo’s Wall — Experimental MapleStory Floating Islands

## Draft 0.6 · November 13, 2026

Revision 0.6 adds a prioritized generation prompt, an acceptance checklist, measurement definitions and repair routing, plus the first fresh Fighter/Balrog test assessment. It retains #F3E6DD and the opaque PNG delivery workflow. Layout targets remain working targets; this revision does not invent universal numerical rejection tolerances. The existing v0.1 filename is retained for link continuity.

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
| Connected island bottom | 81% down | y1016 | Approved original silhouettes |
| Bottom clearance | 19% | About 238 px | Derived from island bottom |
| Scenery ceiling | Usually 27–30% down | y339–376 | Observed scenery tops |
| Visible hero face width | About 6.8% | 85 px | Provisional cheek-to-cheek anchor |
| Website background | Exact solid exterior and page color | #F3E6DD / RGB 243, 230, 221 | Opaque PNG with separately approved masked background finishing |

These are experimental working targets. Exact acceptance tolerances remain unresolved. Report measured drift for review before inventing hard rejection thresholds.

The ground line is a subject-placement reference. The front platform edge, floor rear boundary and steps can occur at other heights. Jumping heroes and hovering bosses retain the same implied ground reference.

The roughly 213 px interval from ground line to island bottom is an image-space placement guide. Front-edge shape and projected surfaces affect its interpretation; allow tapered, map-specific undersides.

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

Hovering subjects show readable air clearance. Effects may occupy that clearance while preserving the floating silhouette. Keep weapon grips, hand anatomy and physical weapon components legible.

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
5. Use only the minimal edge blending needed to avoid halos. Preserve snow, icicles, fine foliage, vines, translucent ice and soft spell glows. Retain gradual effect-to-background transitions rather than flattening luminous or translucent artwork to solid background color.
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

- Hero/boss design references define costume, hair silhouette, anatomy and physical weapon construction.
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
Show the complete miniature from a distance on an open warm cream #F3E6DD background. No cubby or physical frame. Center the platform, spanning approximately x12%–88%. Grounded feet meet the foreground combat lane around y64%. The tapered connected underside ends around y81%. Highest rear scenery usually begins around y27%–30%. Preserve empty margins; do not zoom in to fill the canvas. Coordinates are percentages from top-left.

PRIORITY 2 — SUBJECT SCALE AND STAGING
The hero's visible cream cheek-to-cheek face width is about 6.8% of canvas width, excluding hair and accessories. Scale the whole hero coherently. [HERO SIDE, FACING, POSE, GAZE]. [BOSS SIDE, FACING, RELATIVE SIZE, GROUNDED/HOVERING STATUS]. Faces, weapon and boss silhouette stay readable. Main combat lane is near the front lip with a narrow paving strip ahead of toes; stairs and most environmental depth are behind the subjects. Use the approved shallow elevated front view, upright architecture and restrained perspective.

PRIORITY 3 — WEAPON AND BATTLE
[PHYSICAL WEAPON SHAPE, COMPONENTS, GRIP, ARM PLACEMENT, MOTION AND TARGET]. [RESTRAINED EFFECT PATH AND CONTACT LIGHT]. Physical equipment must remain distinct from energy effects; hands and limbs must read correctly.

PRIORITY 4 — IDENTITY, MATERIALS AND ENVIRONMENT
[ASSIGNED REFERENCE ROLES]. Preserve Jolly identity with approved MapleStory face refinements, fine short velvety face nap, subtly fluffier framing edge, dimensional textile hair and woven clothing. Apply Wild Hunter's cohesive miniature materials to hero, boss and environment; hard equipment stays structured matte miniature material. [MAP LANDMARKS, TERRAIN, REAR SCENERY AND UNDERSIDE]. Keep masonry/foliage detail appropriately small.

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
| Scenery ceiling | Highest connected rear scenery; state whether foliage is included. Effects/particles measured separately |
| Hero face scale | Visible cream facial inset cheek-to-cheek, excluding hair/hat/ornaments. Identify endpoints and uncertainty; cross-check similar three-quarter orientation and compact body proportions |
| Environment detail scale | Compare paving blocks, stair risers and columns relative to hero face and boots; no single universal block size is established |
| Camera and floor | Compare against assigned camera reference; narrow foreground strip, depth behind subjects, upright ruins. Do not infer exact lens/elevation from a single image |
| Weapon and anatomy | Correct physical construction, grip, visible wrist/arm relationships, readable action; no duplicated/missing limbs |
| Physical integration | Foot contact, terrain overlap, shared lighting, perspective and appropriate contact shadows; no pasted cutout appearance |
| Identity/materials | Actual face/eye treatment and surface hierarchy against assigned masters |
| Effects | Faces and physical weapon readable, coherent paths, localized light and sufficient outer clearance |
| Exterior finish | Separate post-approval pixel-mask/background checks from the delivery section |

Use statuses **pass**, **repair**, or **uncertain**. “Pass” may mean visually accepted when that is explicitly stated; it does not imply a measured numeric match. Proposed tolerance bands require user review before becoming rules.

### Choose the repair from the failure

1. **Whole scene too large or displaced, with sound relative proportions:** propose a uniform pixel resize and translation of all artwork together. Recheck face scale, scenery ceiling, ground line and underside afterward. Do not stretch horizontally/vertically to force all landmarks.
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


## Working review sequence

1. Identify the experiment’s purpose and its applicable references.
2. Consult current canonical files and inspect relevant actual reference images.
3. Propose the detailed scene or changes, including weapon construction, grip, subject scale, map inspiration and staging.
4. Obtain explicit approval before generating or editing artwork. Generate one image at a time.
5. Inspect the actual result against the chosen composition reference. Check island footprint, ground placement, hero face scale, foreground combat-lane placement, camera feel, materials and integration. Record source-background drift separately from final exterior-background validation.
6. Report observed deviations, distinguishing actual readings from estimates and prompt targets.
7. After artwork approval, propose and obtain approval for the default masked exterior-background finishing pass, then perform the checks above. Use transparency only when specifically approved. Render or edit one image at a time.
8. Propose any further visual repair for approval.

Keep artwork free of text, labels, branding, plaques and UI. Measurement diagrams may include explanatory annotations as separate planning artifacts.

## Open decisions

- Exact camera parameters and a repeatable complete floor-depth measurement protocol remain provisional. Accepted scene references guide the working camera.
- Broader environmental detail-scale tests may be useful for future map types. The retired neutral teal-figure scenes are not required calibration targets.
- Numerical tolerances for island placement and face scale.
- How far waterfalls, lava, foliage and particles may extend beyond the solid island bounds.
- Behavior for enormous or partly off-island bosses.
- Masking and background-transition handling for complex auras, smoke, particles, waterfalls and extended translucent effects require further testing; optional transparency has the same edge challenges plus alpha handling.

The snow, volcanic and nature transfers complete the currently agreed environment-staging tests. Further scenes or edge-case studies can be planned as needed. Permanent adoption and further GitHub edits remain subject to explicit user direction.
