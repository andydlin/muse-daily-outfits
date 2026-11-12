# Shared spec — Cubby, framing, and lighting

**Applies:** All dioramas. Unified cubby reference for both Daily Outfits and MapleStory: `MASTER_Cubby_Bulbasaur.png` is **primary** and `MASTER_Cubby_Secondary_Link.png` is **secondary**. Do not replace these references by guessing colors.

## Geometry

- Square, physically plausible recessed miniature cubby, complete **visible ceiling, both side walls, and back/ground**, not a flat poster.
- Rigid sharp-cornered square exterior frame with restrained consistent thickness, clean bevels and mitered corners. No thick/round/chunky casing.
- Maintain the **entire cubby and exterior margins on all four sides** in a **1:1 square output**. Keep frame size, placement, exterior breathing room, and shadow consistent across gallery tiles. Never crop, zoom, stretch, or extend the frame during a recolor.
- Historical Master Recolor V1 measured 1254×1254 canvas, roughly 1100×1080 outer frame, ~72px side margins, ~64px frame width. These are legacy guides only when that original Black Clover framing is used, **not a reason to resize an approved source**.


## Cubby Geometry Lock — mandatory for every render and edit (2026-11-11)

**Reason:** Re-rendering, texture-only edits, recolors, and canvas adjustments can silently change the cubby's apparent footprint. Treat frame geometry as an independently verified acceptance criterion, not a prompt-only preference.

### Canonical master and measurement protocol

- **Authoritative geometry reference:** the actual project asset `MASTER_Cubby_Bulbasaur.png`, not earlier generated variants, historical Black Clover values, or unverified chat estimates. Secondary visual cross-check: `MASTER_Cubby_Secondary_Link.png`.
- **Canonical canvas:** Bulbasaur's supplied master is **1254 × 1254 pixels (1:1)**. For other output resolutions, normalize all frame measurements by canvas width and height before comparison.
- **Bounding box definition:** measure the **outermost solid ivory-cream frame edges**, excluding the soft exterior drop shadow. Record `x_min, y_min, x_max, y_max`, outer width and height, left/right/top/bottom exterior margins, horizontal/vertical center, and frame thickness. Inspect corners/edges at full resolution to distinguish frame from shadow. Use actual image pixels, not visual guesses or prompt claims.
- **Baseline:** derive the numerical bounding box from the actual Bulbasaur master when performing validation. Store/compare that measured box for the current asset; **do not treat earlier approximate chat measurements as exact canonical coordinates**. If reliable edge measurement is not possible, report that explicitly and request visual review rather than inventing precision.
- **Tolerance:** aim for within **1% of canvas dimension per outer frame edge** (about 13 px at 1254), and within **2% of canvas dimension** for outer width/height (about 25 px at 1254), unless a different approved master or deliberate geometry exception applies. Prefer closer alignment when practical. Keep 1:1 canvas and fully visible frame in all cases.

### Required quality gate

1. **Before** creation/edit: identify the approved source image, inspect Bulbasaur, and record or verify the target frame footprint, placement, margins, bevel thickness and LED position.
2. **After every generated image or edit** (including texture fixes, recolors, canvas extensions and character-size changes): measure or visually verify the outer frame against the master. Confirm square canvas, full four-sided frame, consistent margins, clean mitered bevels, cubby depth, and centered flush LED.
3. Report **measured values and deltas** when measurement is available. Clearly label estimates as estimates. Do not call an image geometry-locked, or claim a numeric match, without inspecting the actual output.
4. If the frame drifts beyond tolerance, **do not mark the image final**. Describe the discrepancy and propose a geometry-only repair for user approval; then re-check the repaired result.

### Editing and repair rules

- **Texture-only / recolor-only:** outer frame bounding box, dimensions, center, thickness and all four margins are **immutable**. Edit only authorized surfaces. Do not regenerate or resize the whole scene merely to recolor architectural surfaces or refine hair/face texture.
- **Character-scale adjustments:** change only the requested character(s) relative to the **unchanged cubby**, unless the user explicitly approves a whole-cubby scale change.
- **Whole-cubby resize:** permitted **only when specifically approved**. Apply a centered, uniform transform to the entire cubby and interior together; extend/reconstruct only the exterior wall as needed. Do not stretch the art nonuniformly to force a width/height match.
- **Geometry mismatch where width and height differ:** prefer a controlled **frame/exterior reconstruction or outpainting** that leaves interior characters, scene and effects intact; warn that generative reconstruction may change fine details. Do not claim pixel-perfect preservation from a generative re-render.
- **Canvas correction:** extend/crop only approved exterior wall regions as appropriate; never crop the cubby or silently alter its footprint. Verify the final output is square and that margins align with the master.
- Keep every approved hero/boss design, relative scale, pose, costume, magic, scenery, lighting and palette unchanged except what the user explicitly requests.

This geometry lock supplements the existing Bulbasaur Neutral Cream Lock and first-pass consistency gate; it does **not** change the approved master-reference hierarchy.

## Ceiling LED — strict

- Exactly **one small, thin, flush-mounted circular warm-white LED downlight**, centered on the cubby ceiling.
- Visible illuminated disc with delicate cream-beige trim ring; **no hanging light, protruding cylinder, bulky housing, thick bezel or giant spotlight**.
- Consistent relative diameter, ceiling location, shallow depth and color temperature from tile to tile.
- Local soft glow and natural falloff; dim the illumination for night scenes without changing the hardware.
- Approved Sylveon — Meadow Dance is a fixture-shape reference.

## Material/lighting

- Warm neutral ivory-cream / peach-beige cubby and exterior, soft physically believable depth and shadows.
- Light should be soft, naturally gradated, with a gently feathered **exterior contact shadow**, not a dark outline.
- Preserve dramatic spell lighting, night conditions and themed interior artwork during recolor.

## Unified cubby color masters — all scenes

1. **Primary:** `MASTER_Cubby_Bulbasaur.png` — frame color, exterior peach-beige wall, interior ceiling/sidewall color, LED appearance, exterior soft shadow, cubby depth and warmth.
2. **Secondary:** `MASTER_Cubby_Secondary_Link.png` — cross-check bevel geometry, proportions, and color/lighting consistency wherever Bulbasaur alone is ambiguous. In case of disagreement, Bulbasaur controls colors.

These apply to **both Daily Outfit and MapleStory** creation and recoloring. Attach the images for accurate visual matching; do not substitute invented hex colors. Preserve different scene atmospheres and magical effects.

**Buccaneer is not a cubby-color master:** `MASTER_Maple_Face_Secondy_Buccaneer.png` is a secondary **MapleStory face/expression** reference only. Historical Buccaneer-derived sample hex values are superseded and must not drive new cubby colors. Black Clover — Anti-Magic Slash remains an optional *legacy geometry* reference only when explicitly requested.

## Mandatory first-pass cubby consistency gate

Before treating **any newly generated scene** (Daily Outfit or MapleStory) as complete, compare the result against **`MASTER_Cubby_Bulbasaur.png`**, using **`MASTER_Cubby_Secondary_Link.png`** as secondary validation. The validation must check:

1. **Complete square geometry:** rigid, sharp, consistently beveled frame with a visibly recessed ceiling, sides, and back/ground; same apparent cubby scale and centered placement as Bulbasaur. Never expand the cubby to nearly fill the entire canvas.
2. **Exterior breathing room:** pale warm-beige exterior wall clearly visible on **all four sides**, with balanced margins. No cropped frame edges, reduced margins, or zoomed-in composition.
3. **Frame color:** neutral light ivory-cream, not saturated peach, pink, orange, or yellow. Compare to Bulbasaur visually rather than guessing hex values.
4. **Exterior shadow:** subtle, broad, soft feathering beneath and around the frame; never a thick dark border.
5. **Ceiling LED:** the correct small, thin, flush-mounted circular warm-white disc with a fine rim, centered in the ceiling.
6. **Lighting balance:** prevent an excessive orange cast over the cubby and character while retaining intentional sunsets, golden magic, night ambience, or other scene-specific effects. Keep outfit and prop colors distinct.

If the initial render misses any of these, **correct the cubby/frame/wall/lighting before considering the scene finished**, while preserving every approved character, costume, pose, creature-hood design, prop, particle, magical effect, and interior environment detail as closely as possible. This is a visual-quality check, not permission to redesign the scene. Do not claim that an image passed a check unless actually visually inspected.

## Bulbasaur Neutral Cream Lock — color corrections and new scenes

**Color target:** `MASTER_Cubby_Bulbasaur.png` is the authoritative visual reference for the **light, neutral peach-beige exterior wall; soft, neutral ivory-cream beveled frame; creamy beige interior architectural ceiling and side walls; small flush warm-white LED; and soft neutral exterior shadows**. The aim is **lighter, creamier, and less saturated — not warmer**. Preserve gentle warm depth, but explicitly remove excessive **orange, yellow, and pink** saturation and any overall orange cast. Avoid salmon-pink, strong golden-orange or yellow display-box color. Do not infer an invented hex palette; compare visually to Bulbasaur.

- Keep **all four frame sides** consistent in ivory-cream color, bevel, thickness and geometry, with the existing complete square frame and exterior margins intact.
- Keep the **centered, thin, flush-mounted circular warm-white LED** physically unchanged; its architectural glow should be gentle, not a broad orange wash.
- Keep **exterior contact shadows** soft, diffuse and neutral, without dark/orange outlines.
- Neutralize excessive warmth on **architectural surfaces only**; retain natural interior depth and the original scene-specific atmosphere (including sunsets, red moons, purple battlefields, fire, sandstorms, spell light, reflections and glows).

**Strict scope for an approved scene recolor:** adjust only the cubby frame/structure, exterior wall/background, interior architectural ceiling and side-wall color/lighting as needed, and architectural LED/exterior shadows. **Do not** alter Jolly/hero/boss characters, faces, eyes, hair, plush finish, costumes, weapons, wings, accessories, poses, sizes, terrain, scenery, interior artwork, magical effects, camera framing or composition. Do not move, resize or crop the cubby. This is a **color consistency pass, not a creative redesign**.
