# Gizmo’s Wall — Experimental MapleStory Floating Islands

## Draft 0.3 · November 12, 2026

Revision 0.3 adds the user-approved transparent PNG delivery workflow and tree/snow website previews. It retains the accepted staging measurements from revision 0.2. The existing v0.1 filename is retained for link continuity.

This working guide applies to experiments in this chat. Permanent adoption and GitHub specification changes require the user’s explicit approval. Experimental renders retain their assigned reference roles. Approved project masters retain their priority.

## Visual goal

Photorealistic handmade plush miniature battles staged on floating islands inspired by actual MapleStory maps. Use a side-scrolling gameplay composition with dimensional three-quarter characters, both eyes readable where the pose allows, and a shallow view of the floor. Characters, bosses, terrain and effects should feel photographed together as one physical miniature.

## Sources and precedence

Consult the current canonical prompt library before image generation, editing or recoloring.

https://github.com/andydlin/muse-daily-outfits/tree/main/prompts

Relevant files are `shared/jolly-character.md`, `shared/cubby-lighting.md`, `shared/plush-materials.md` and `maplestory/hero-pairing.md`. Consult `maplestory/recolor.md` for recoloring.

The approved experiment replaces the physical cubby presentation with a floating island and open peach background. Its measured island framing and smaller hero scale govern these studies. Other identity, face, material and lighting principles continue to apply where compatible with this presentation.

| Purpose | Reference priority |
| --- | --- |
| Overall identity | Jolly foundation, Jett primary and Goku secondary |
| MapleStory facial refinement | Ice/Lightning Mage primary, Buccaneer secondary |
| Material language | Wild Hunter primary, Mechanic secondary, Sylveon tertiary |
| Established cubby foundation | Bulbasaur primary, Link secondary, consulted for applicable shared standards |
| Experimental composition and apparent scale | Supplied floating Ice/Lightning vs Pink Bean original, with latest approved Fighter vs Balrog original as cross-check |
| Experimental camera and foreground staging | Simplified snowy mage scene, checked against original Ice/Lightning |
| Environment-transfer examples | Accepted volcanic altar and nature root-gate studies |
| Experimental website delivery | Transparent PNG; page background #FDE1D3, sampled from original Ice/Lightning |
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
| Website background | Solid page color | #FDE1D3 / RGB 253, 225, 211 | Transparent PNG artwork composited by the browser |

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

Background samples used median RGB values from clear patches. The supplied JPEGs contain subtle variation. #FDE1D3 remains the original Ice/Lightning reference and is now the website page color. Original staging renders retain their source backgrounds; website delivery uses the separate transparent export workflow below.

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

### Approved website delivery — transparent PNG

For this experimental floating-island series, deliver website artwork as **PNG with genuine alpha transparency**. Set the website page background to **#FDE1D3 (RGB 253, 225, 211)**. Keep the original approved renders as source files. Transparency is a separate final export step after approval of the artwork.

#### Export and preservation rules

1. Preserve the source canvas dimensions and transparent margins. The tested canvases are **1,254 × 1,254**. Keep island placement, apparent scale, ground line and camera framing; do not tightly crop, enlarge or recenter during extraction.
2. Remove the exterior background and genuine exterior gaps, including open arches and gaps between branches. Preserve actual rear foliage, terrain, architecture and scene lighting within those openings.
3. Preserve characters, faces, poses, equipment, textures, colors, island geometry, scenery and illumination. Keep the original source alongside the export for comparison.
4. Use partial alpha for antialiased edges, fine leaves, vines, plush fibers, pale snow, icicles and other translucent elements. Opaque white snow must remain opaque. Remove peach matte contamination without eroding fine details.
5. Preserve intended luminous effects and their soft falloff. Check spell glows separately; the tree and snow tests do not establish a general solution for complex aura, smoke or particle effects.
6. Export genuine transparency, not a painted checkerboard or a solid white background. Do not add a floor-like shadow beneath the island.

#### Required export checks

- Verify actual alpha transparency, original canvas dimensions, preserved margins, island placement and apparent hero scale.
- Inspect the silhouette and enclosed exterior gaps at full size, especially fine foliage, hanging vines, pale snow and thin icicles.
- Composite the export over **#FDE1D3** and inspect the actual webpage at its intended display size. Check for peach/white halos, hard cutout edges, lost detail and visible rectangular background patches. A contrasting diagnostic backdrop can help reveal edge defects.
- Compare against the approved source for unintended changes to faces, textures, lighting, color or geometry. Generative extraction can alter artwork; do not call it pixel-preserving without a verified pixel comparison. Report observed changes for review.
- Retain approved originals and exported files separately. Website delivery approval does not make an experimental scene a replacement identity, texture or cubby master.

#### Reviewed examples

| Export | Tested edge features |
| --- | --- |
| [Tree island — transparent](https://chatgpt.com/library?file_id=libfile_6e0280207b0c819186b6b598b256620e&account_id=personal) | Fine leaves, hanging vines, branch gaps and a root doorway |
| [Snow island — transparent](https://chatgpt.com/library?file_id=libfile_05d61f25982c8191a27b5c53ecd62e3c&account_id=personal) | Opaque white snow, pale edges, translucent icicles and an open stone arch |

The user accepted both transparent versions after website review. These are visually accepted exports, not evidence of exact source-pixel preservation. The tree extraction was observed to shift some fine texture and lighting.

[Website comparison preview](https://gizmo-tree-island-preview.honestpony262.chatgpt.site) displays transparent tree and snow exports and the supplied snow/volcanic originals with their backgrounds intact. This preview is a review aid; its layout is not a permanent gallery specification.

#### Solid-background fallback

Masked pixel replacement to **#FDE1D3**, with minimal edge blending, was also tested successfully on volcanic, nature and snow scenes. Use this as an alternative when an opaque image is specifically needed. It is not the default website delivery format. Verify the masked background color and preserve artwork outside the approved mask and narrow blending fringe.

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

## Working review sequence

1. Identify the experiment’s purpose and its applicable references.
2. Consult current canonical files and inspect relevant actual reference images.
3. Propose the detailed scene or changes, including weapon construction, grip, subject scale, map inspiration and staging.
4. Obtain explicit approval before generating or editing artwork. Generate one image at a time.
5. Inspect the actual result against the chosen composition reference. Check island footprint, ground placement, hero face scale, foreground combat-lane placement, camera feel, materials and integration. Record source-background drift separately from the transparent delivery check.
6. Report observed deviations, distinguishing actual readings from estimates and prompt targets.
7. After artwork approval, propose and obtain approval for the transparency export, then perform the export checks above. Render or edit one image at a time.
8. Propose any further visual repair for approval.

Keep artwork free of text, labels, branding, plaques and UI. Measurement diagrams may include explanatory annotations as separate planning artifacts.

## Open decisions

- Exact camera parameters and a repeatable complete floor-depth measurement protocol remain provisional. Accepted scene references guide the working camera.
- Broader environmental detail-scale tests may be useful for future map types. The retired neutral teal-figure scenes are not required calibration targets.
- Numerical tolerances for island placement and face scale.
- How far waterfalls, lava, foliage and particles may extend beyond the solid island bounds.
- Behavior for enormous or partly off-island bosses.
- Transparent export handling for complex auras, smoke, particles, waterfalls and other extended translucent effects remains to be tested.

The snow, volcanic and nature transfers complete the currently agreed environment-staging tests. Further scenes or edge-case studies can be planned as needed. Permanent adoption and further GitHub edits remain subject to explicit user direction.
