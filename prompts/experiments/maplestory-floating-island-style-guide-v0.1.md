# Gizmo’s Wall — Experimental MapleStory Floating Islands

## Draft 0.1 · November 12, 2026

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
| Experimental exterior background | Sampled floating Ice/Lightning original |
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
| Exterior background | RGB 253, 225, 211 | #FDE1D3 | Ice/Lightning sample |

These are experimental working targets. Exact acceptance tolerances remain unresolved. Report measured drift for review before inventing hard rejection thresholds.

The ground line is a subject-placement reference. The front platform edge, floor rear boundary and steps can occur at other heights. Jumping heroes and hovering bosses retain the same implied ground reference.

The roughly 213 px interval from ground line to island bottom includes the front edge, surface projection and underside. It is not a requirement to construct a uniform 213 px vertical slab.

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

Floor-strip readings describe visible local surfaces. They do not establish the complete walkable floor depth or a camera angle in degrees.

Background samples used median RGB values from small clear patches. The supplied JPEGs contain subtle variation. #FDE1D3 is a chosen solid target sampled from Ice/Lightning. Matching a prompt’s hex instruction requires output verification.

## Hero construction and scale

Use the visible cream facial inset, excluding hair, hat, head ornaments and anatomical ears, as the cheek-to-cheek landmark. View angle changes apparent width, so compare similar three-quarter head orientations and cross-check body proportions.

Scale the hero’s head, body, costume, cape and physical equipment coherently. Preserve class-specific weapon proportions and construction. Accommodate weapon reach through staging, grip, pose and encounter spacing.

Hairstyles, hats, bows, long robes and capes may change the total silhouette. Jumping, crouching and lunging may change crown-to-foot height. Maintain recognizable compact plush proportions through these variations.

Faces use fine short velvety cream nap, a subtly fluffier framing border, rounded dark embroidered/button-like eyes with restrained catchlights, rosy cheeks and expressive brows and mouth. Preserve approved class-specific exceptions from the current canonical specifications.

## Camera and floor

Use Ice/Lightning and Fighter as visual camera anchors. Show a shallow strip of floor that supports visible boot contact, shadows, attack light and terrain overlap. Keep vertical architecture visually upright and perspective restrained.

Camera elevation, lens or projection parameters and exact floor depth remain provisional. A generated image alone does not identify unique camera settings. The simplified ellipses in the composition studies are schematic floor boundaries.

## Materials and lighting

Follow the current Wild Hunter material hierarchy across the entire scene. Use dimensional sculpted textile hair, fine woven clothes, seams and restrained stitching. Keep the cream face and exposed body short-pile and finely textured. Use cohesive handmade miniature finishes on terrain, stone, plants and bosses.

Armor, swords, horns and mechanical parts retain structured hard surfaces and appropriate matte miniature finishes. Ice, glass and magic may retain translucency and luminous highlights.

Use soft diffuse shared illumination. Let localized spells illuminate nearby paving, armor and characters. Boot and object contact shadows sit on island surfaces. The open background beneath the floating island stays clear of a floor-like cast shadow.

## Physical integration

Render terrain and subjects together with coherent perspective, softness, occlusion and lighting. Grounded feet meet paving with tight contact shadows. Suitable rubble, snow or plants can overlap boot edges naturally.

Hovering subjects show readable air clearance. Effects may occupy that clearance while preserving the floating silhouette. Keep weapon grips, hand anatomy and physical weapon components legible.

## Map adaptation and island variation

Choose an actual map and encounter phase before developing a finished environment. Use screenshots or verified references to identify characteristic landmarks, architecture, terrain, palette and atmosphere.

Translate recognizable map features into the miniature material language. Preserve a readable combat lane and space for both subjects. Island silhouettes, underside materials, rock formations, roots and architectural remnants may vary with the map while following the shared framing and apparent scale.

Scenery density may vary. Open arenas can remain open. Nature, waterfalls, lava, leaves and debris may extend beyond the solid platform silhouette while retaining outer clearance. Measure the solid island and these extensions separately.

Use the celestial scene as an experimental staging example. Its fictional architecture has not been selected as a reusable map standard.

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
5. Inspect the actual result against the chosen composition reference. Check island footprint, ground placement, hero face scale, camera feel, materials, integration and background.
6. Report observed deviations, distinguishing actual readings from estimates and prompt targets.
7. Propose any further visual repair for approval.

Keep artwork free of text, labels, branding, plaques and UI. Measurement diagrams may include explanatory annotations as separate planning artifacts.

## Open decisions

- Camera calibration and a repeatable floor-depth measurement protocol.
- Environmental detail scale using a neutral figure beside paving, steps, a doorway and foliage.
- Numerical tolerances for island placement and face scale.
- How far waterfalls, lava, foliage and particles may extend beyond the solid island bounds.
- Behavior for enormous or partly off-island bosses.
- A repeatable method for verifying a truly uniform background and matching its sampled color.

A neutral camera/scale study is the proposed next experiment. Its detailed design and generation remain subject to the user’s approval.
