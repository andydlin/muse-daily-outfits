# MapleStory Islands — Hybrid Assembly Workflow V1
Status: provisionally approved 2026-11-24. Preferred workflow for new island validations; universal geometry, anatomical scale and boss ratios remain provisional.

## Workflow
1. Read canonical island, scale, pairing and shared material specs; inspect approved composition, character texture V2, relevant boss-style masters and extracted V2B guides. Collect encounter references and obtain explicit plan approval before generation or editing.
2. Classify physical relationships: independent heroes/bosses may be separate assets; rooted or architectural bosses (Zakum) belong with terrain and scenery. Mounted/mechanical assemblies are evaluated case by case.
3. Before foundation generation, approve a lightweight composition-aware spatial blueprint on provisional V2B geometry: approximate posed hero and boss silhouettes, footing, combat lane and visible scenery zones. For large, mounted, mechanical or aerial assemblies, include full projected silhouettes, weapon, wing and tail clearance as relevant. Plan distinctive scenery where it remains readable around characters. Placeholders guide foundation generation but must not appear in the foundation; integrated bosses remain physically integrated. Environment-only islands need no character placeholders. This planning blueprint does not replace the later measured structural composite. Apply from Validation 04 onward; do not restart Validation 03.
   Generate cohesive foundation with connected terrain, architecture, scenery and any integrated boss. Preserve map identity, open combat lanes and natural depth.
4. Normalize and approve foundation geometry BEFORE adding independent characters. Use proportional resizing/repositioning, not distortion. V2B targets remain provisional: 1254 square, width 1074, margins 90, rim y846, bottom y1079, underside 233, projected floor depth 127 px, Blender elevation 7°. Overall underside depth matters more than rock shapes; flooring materials are map-specific. Check integrated boss scale after normalization.
5. Approve independent assets: compare head-to-body proportions with Fighter, check class identity, anatomy, equipment, grip and materials. Fine directional fiber hair is permitted per approved texture V2; avoid coarse yarn or fuzz. Boss-style master Zakum V1 is retained.
6. Programmatically composite approved assets at measured posed heights and positions on normalized foundation; check shared combat plane, visible flooring ahead of feet, clearance, full silhouettes. Composite is structural authority, not final artwork.
7. With explicit approval, generate one cohesive photographic scene. Following Validation 03, one candidate approach (qualified by Validation 04 below) is a dedicated four-panel assembly reference sheet combining the approved measured structural composite and unobstructed asset identity references, attached as the only reference in a clean chat. The composite remains structural authority; Fighter controls photographic quality, not map design. Clean-chat composite-only and same-chat assembly are alternative tests when reference-sheet generation introduces unacceptable structural drift; none guarantees fidelity. Permit lighting, contact shadows, material interaction and progressive depth of field, not redesign. Preserve source assets; reject material drift. Never claim pixel preservation after regeneration. See the Validation 03 findings below.
8. Check framing and scale after every generation. Review identity, anatomy, materials, grounding, lighting, depth and clearance at full size and actual uncropped 256 square. Correct minor framing programmatically only if character scale remains acceptable; otherwise return to foundation/composite. Effects only for production or explicitly approved tests. Final background #F3E6DD; no exterior shadow, ground plane, reflection, text or UI. Internal contact shadows allowed.

## Large-boss staging
Prefer a slightly recessed footing position for large bosses when it improves visual mass distribution, foreground flooring, combat clearance and environmental depth, as observed in Paladin × Zakum and Wild Hunter × Horntail. This is an optional staging preference, not a universal depth rule. Keep physically plausible footing and readable silhouettes; validate against the encounter blueprint and measured composite. Do not change approved anatomy or scale to achieve this effect.

## Validation record
- 01 Mechanic × Pianus: visually approved validation-only; do not recreate. Candidate B 225 px standing calibration remains provisional; Mechanic assembly ~300–330 px, Pianus ~365–375 px (visual estimates).
- 02 Paladin × Zakum: Integrated Assembly V5 approved artistic checkpoint, not final geometry lock. Integrated boss foundation plus precise structural composite followed by cohesive generation was strongest approach. Separate asset compositing alone looked pasted on; direct generation without composite drifted in scale. Deferred: revisit Paladin head proportions against Fighter (10–15% increase is a proposed test, not locked); normalize island width before placing revised hero, then recalibrate posed height and review gallery. Preserve V5 and approved masters.
- 03 Wild Hunter × Horntail: Test D-N approved as the Master Validation V2 artistic checkpoint on 2026-11-24; validation complete at the artistic-checkpoint level. Preserve original assets, Structural Composite V5, original Test D and normalized Test D-N. No regeneration or universal geometry/scale lock. See detailed findings below. Composition-aware foundation planning applies from Validation 04 onward; do not restart Validation 03. Combine objectives rather than requiring seven renders.

## Validation 03 — Test D-N checkpoint and findings
Source: [Validation 03 Assembly](https://chatgpt.com/c/6b060108-c378-83e8-862b-e953ef6531fc). This records the approved discussion findings, not a new pixel measurement or independent image audit.

### Assembly tests
| Test | Approach | Finding |
| --- | --- | --- |
| A | Clean chat, structural composite only | Successful photographic assembly with excellent framing and character scale; good identity, equipment and materials, very good environmental depth, but incomplete masking corrections. |
| C | Successful assembly refined with Fighter photographic master | Stronger structural fidelity than D: retained composite dimensions and intended scale, with improved identity, equipment, materials and masking. Rear scenery was slightly too blurred; overall integration still felt somewhat like a polished composite. |
| D | Clean chat, four-panel reference sheet only | Strongest artistic candidate: better Wild Hunter expression, Jaira anatomy/presence, Horntail dimensionality, handcrafted materials, character/terrain integration and environmental depth of field. Overall assembly magnification caused framing and scale drift. |
| D-N | Programmatic proportional normalization of D, no regeneration | Approved artistic checkpoint; retained D's artistic strengths while correcting island width and margins, with residual scale and edge caveats below. |

Two earlier project-chat attempts with multiple references failed; composite-only clean chat, assembly plus Fighter refinement, and sheet-only clean chat succeeded. These observations support the clean-chat proposal but do not isolate the cause of earlier failures or prove universal reliability. Unobstructed asset details in the sheet may explain D's artistic advantage; this remains an interpretation.

Before normalization, visual estimates on a 1254 × 1254 canvas were: C island width ~1074 px, side margins ~90 px, mounted hero ~210 px and Horntail ~330 px; D width ~1215 px, margins ~20 px, hero ~245 px and Horntail ~395 px. These are discussion estimates, not verified pixel measurements.

### Normalization and quality control
Test D was proportionally reduced to 88.18% of its original size without regeneration; original Test D was preserved. The discussion reports programmatic control of canvas, normalized width and background. Character heights and island bottom below are approximate.

| Parameter | Provisional target | Test D-N |
| --- | --- | --- |
| Canvas | 1254 × 1254 px | 1254 × 1254 px |
| Island width | 1074 px | 1074 px |
| Side margins | 90 px | 90 px |
| Mounted hero height | 210 px | ~218 px |
| Horntail height | 330 px | ~348 px |
| Island bottom | y1079 | ~y1067 |
| Background | #F3E6DD | #F3E6DD |

The bottom was aligned with Structural Composite V5 rather than forced to provisional y1079. Horntail remains slightly oversized. Background extraction slightly hardened blurred rear scenery edges, which need softer blending. Proportional resizing preserves relative geometry but cannot independently correct the boss scale deviation. Floor depth, underside thickness, rim position and apparent camera were not established as exact compliant measurements by this checkpoint; do not infer a full geometry pass from width normalization.

Mounted hero staging, ranged combat clearance and large-boss recessed staging were validated for this encounter. Photographic integration was artistically approved. In the actual uncropped 256 × 256 review, both characters remained recognizable, Horntail retained a strong silhouette and blue crystals conveyed distinct environmental identity. Universal character scale, boss ratios and geometry remain provisional.

### Proposed preferred approach for the next validation
1. Approve individual assets and the measured structural composite.
2. Prepare a dedicated four-panel assembly reference sheet containing structural and asset identity references.
3. Open a clean chat and attach only that sheet.
4. With explicit generation approval, generate one cohesive photographic assembly.
5. Normalize framing programmatically only when relative proportions and character scale permit; use proportional resizing/repositioning, never distortion.
6. Perform structural, artistic and actual uncropped 256 × 256 gallery quality control. Report controlled measurements separately from estimates and list residual deviations.

Keep composite-only clean-chat assembly as the fallback if sheet-driven output has unacceptable structural drift. This is a proposed preferred next-validation workflow supported by one approved checkpoint, not a universal guarantee. Preserve all approved source assets and Structural Composite V5. Test D-N needs no regeneration; this record authorizes no additional rendering or revisions.

## Validation 04 — Test F-N checkpoint and findings
Approved 2026-11-24: Hero × Black Mage, artistic checkpoint only. Preserve Foundation V2-N, Hero V3, Black Mage V5, Structural Composite V2, reference sheets, original Test F and normalized F-N. This record summarizes approved discussion findings, not a new independent pixel audit.

### Foundation and assets
- Composition-aware placeholders successfully guided the Throne of Darkness foundation and open combat lane. V2-N retained after geometry-correction exploration; accepted geometry deviations remain encounter-specific, not a V2B lock.
- Hero V3 approved at 210 px posed height; minor etched hair, sword and cape material deviations accepted for this encounter only.
- Black Mage V1–V4 did not achieve the desired identity/style balance. V5, recreated in a clean external chat using a dedicated crop of the older island Black Mage and Character Texture V2, was approved. Compact hood, restrained gold embroidery, charcoal/crimson fabrics, red eyes and visible boots; reduced shoulder ornamentation accepted.
- Character-native staging lesson: grounded melee hero does not require a grounded boss. Preserve natural hovering/flying/mounted behavior; distinguish physical silhouette height from hover clearance. Grounded boots need contact shadows; hovering characters need soft separated shadows on terrain. No baked-in asset presentation shadows in cutouts or exterior island shadows. Treat this as encounter-tested guidance, not a new universal scale rule.
- Structural Composite V2: Hero right, facing left, anchor x825, footing y825, height 210 px, width 219 px; Black Mage left, facing right, anchor x410, surface y805, lowest point y775, physical height 270 px, width 178 px, hover clearance 30 px. Horizontal bounding-box clearance 196 px; height ratio 1.29. These are screen-space assembly targets/reported measurements, not 3D distances. Foundation width 1074 px. Minor masking halos remained.

### Assembly experiments
| Test | Approach | Finding |
| --- | --- | --- |
| A | Fresh project chat, equal four-panel sheet | Rejected: generic ruins, wrong characters and yellow eyes. |
| B | External clean chat, same sheet and prompt | Rejected: village/Henesys-like environment, wrong characters and yellow eyes. |
| C | External chat, composite-only direct edit, franchise names omitted | Rejected: cubby-like warrior substitution, reversed positions, redesigned environment/background. |
| D | Unpersonalized Temporary Chat | Blocked: image editing unavailable in that session; not a fidelity failure. |
| E | External chat, composition-dominant sheet (~76% panel area), simplified edit prompt | Partial improvement but rejected: closer Black Mage and crimson theme, wrong cubby-like mage, reversed placement and oversized figures. Layout and wording both changed. |
| F | Original project chat, approved assets/composite, Fighter photographic authority only | Strongest artistic candidate: recognizable characters, correct red eyes, natural hover and grounding, cohesive lighting and depth; substantial structural and identity-detail drift. |
| F-N | Programmatic proportional normalization, no regeneration | Approved artistic checkpoint with residual deviations. |

Neither clean chats nor four-panel sheets guarantee fidelity. Same-chat assembly remains viable; Validation 03's proposed clean-chat preference is not a mandatory default. Reference competition, familiar franchise imagery and personalization are hypotheses only; no causal mechanism established. Isolated V5 success does not imply reliable full-scene assembly. Reject cubby substitutions. Avoid repeated full-scene generation when fidelity fails; consider localized/non-generative integration as a proposed fallback, not yet validated. Preserve approved assets and composite as structural authority; artistic approval does not imply exact asset reproduction.

### Normalization and QC
Reported foreground bounds: F width 1229 px, margins 14/11 px, bottom y1167; F-N proportional factor ~87.4%, width 1074 px, margins 90/90 px, bottom boundary y1079, canvas 1254 square, background #F3E6DD. Foreground masking, proportional resampling and background replacement only; no non-uniform stretching or regeneration. Minor edge imperfections may remain.

| Parameter | Approved encounter target | F-N |
| --- | --- | --- |
| Hero posed height | 210 px | ~253 px (+20%) |
| Black Mage physical height | 270 px | ~284 px (+5%) |
| Boss/hero height ratio | 1.29 | ~1.12 |
| Hover clearance | 30 px | ~39 px |
| Island width | 1074 px | 1074 px |
| Bottom boundary | y1079 | y1079 |

Character values are visual estimates scaled by normalization factor, not exact measurements. Rim, projected floor depth, underside thickness and camera elevation not verified compliant. Uniform normalization cannot correct relative scale. Hero hair more spiky/sculpted, sword and cape redesigned/enlarged; Black Mage costume/pose differ from V5. Architecture oversized and reconstructed, map fidelity partial, crimson illumination overly volcanic. Shared lighting, contact/hover shadows, handcrafted materials and progressive depth are artistically convincing. Full-size and actual uncropped 256 × 256 reviews completed; Fighter retains better balance of architecture, characters and negative space. No combat effects or exterior island shadow.

### Objective outcomes
Humanoid boss/shared scale partially validated; composition-aware foundation planning demonstrated at structural stage; scenery readability and depth partially validated; four-panel photographic assembly not reliably validated. F-N approved artistically, Structural Composite V2 remains structural authority. No further rendering authorized; no master replacement or universal geometry, scale or boss ratio lock.

## Scope
Supersedes rigid empty-island-first and independent-character layering requirements for new island work only. Cubby rules and approved existing artwork unchanged. No universal scale or geometry lock. Explicit approval required for permanent changes and each generation.
