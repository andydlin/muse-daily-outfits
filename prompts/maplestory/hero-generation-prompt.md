# MapleStory Islands — Hero Generation Prompt
Version 1.0 — approved publication 2026-11-27

## Usage and version control
Read the current [Hero Style Guide](hero-style-guide-v0-1.md), [Floating Islands](floating-islands.md), [Hybrid Assembly V3](hybrid-assembly-workflow-v3.md), [scale and camera](hero-boss-island-master-v1.md), [hero pairing](hero-pairing.md) and [shared materials](../shared/plush-materials.md). This is the editable, reusable authored prompt, not a recovered verbatim internal image-generator prompt. Canonical specifications and approved structural composites retain authority.

Before each generation, retrieve the latest GitHub version, inspect actual reference images, fill the inputs and present the planned generation for approval. Record the prompt revision, resolved character-specific inputs, reference roles and any step-specific deviations with the checkpoint. Notify the user whenever a reusable prompt change is proposed or needed; show the change and rationale, obtain explicit approval, commit to GitHub and verify the committed contents before adopting it. Do not silently change the baseline. Character-specific input substitutions are not baseline revisions; disclose them in the step plan. If GitHub or required references are inaccessible, disclose the limitation before proceeding. Do not claim access to hidden generator rewrites or automatic reference handoff.

## Inputs (resolve before generation)
- Character/class and supplied identity artwork: [IDENTITY]
- Approved miniature anatomy references: [ANATOMY REFERENCES]
- Character-specific projected proportion targets and landmarks: [TARGETS]
- Facial and material references, with specific usage roles: [REFERENCES]
- Costume, weapon construction and grip: [EQUIPMENT]
- Approved pose, gaze, camera and framing: [POSE]
- Mode: [ISOLATED FOUNDATION / LOCALIZED ISLAND INSERTION / LOCALIZED REFINEMENT]
- Preserved foundation, crop coordinates, mask and allowed changes if applicable: [EDIT SCOPE]
- Effects: [APPROVED EFFECTS OR NONE]

## Reusable generation prompt

Create one premium, photorealistic handcrafted miniature MapleStory playable character, consistent with the approved standalone floating-island artistic language, not cubby mascot styling.

**Preserve the character's identity. Reconstruct the character's anatomy in our artistic language.**

Use [IDENTITY] strictly as a Character Identity Reference: preserve recognizable hairstyle and color, eye color, distinctive facial features, personality, costume, accessories, signature weapon and identifying design motifs. Do not inherit its head-to-body ratio, shoulder breadth, torso length, limb lengths, facial proportions, rendering style or pose by default. Pose is independently approved. Adapt costume and equipment to the miniature anatomy, not anatomy to the costume illustration.

Construct the character using [ANATOMY REFERENCES] and [TARGETS]. Prioritize independently approved head dominance, compact functional anatomy, shoulder relationship, torso and limb lengths, and hand/foot scale. Preserve character-specific variation. Do not impose a universal head ratio; distinguish crown-to-chin height, posed crown-to-foot height and extended equipment/hair silhouettes. Do not enlarge hair alone to satisfy a head ratio. Follow approved facial references for internal facial proportions while retaining identity.

Hair is sculpted in form, plush in material: soft, dimensional plush-like hair with carefully shaped locks, fine directional textile fibers, gentle surface softness and diffuse highlights. Preserve recognizable hairstyle geometry while creating the tactile appearance of a premium handcrafted miniature. Use fine densely packed plush-like microfibers; avoid carved resin, glossy plastic, coarse yarn, excessive fuzz, flat felt and prominent realistic human-hair strands. Fiber density and intensity remain experimental.

Faces are smooth matte anime-inspired, with soft dimensional contours, restrained tonal transitions, expressive character-specific eyes and controlled catchlights. No button eyes, Jolly faces or generic mascot styling.

Use Character Texture Master V2 for materials only: fine restrained fabric weave, delicate stitching, subtle leather grain, satin-matte metal, short controlled fur, distinct painted machinery and appropriate luminous/translucent magical materials. Preserve material separation. Avoid glossy plastic and generic CGI. Apply [REFERENCES] only within their assigned roles.

Preserve [EQUIPMENT] with believable physical construction, coherent grip and readable silhouette. Distinguish weapons from energy effects. Follow [POSE] and [APPROVED EFFECTS OR NONE].

For isolated foundations: one complete character on a uniform #F3E6DD background, 1254 × 1254 final canvas, full silhouette visible, soft photographic lighting, no ground plane, exterior shadow, reflection, text or UI.

For localized island insertion or refinement: use the approved clean crop as the sole edit target, respect [EDIT SCOPE], measured placement, framing, perspective, lighting and existing approved assets. Preserve internal contact/hover shadows as appropriate. Do not apply isolated-character background rules to island crops. Follow Hybrid Assembly V3 for normalization, reinsertion and verification. Change only the approved regions and properties.

Return one image per approved step.

## Validation gate (outside the image prompt)
Before approving a new character foundation or beginning component refinement, compare crown, chin and foot landmarks, head width, shoulder breadth, torso and limbs against the independently approved targets. Report actual measurements separately from estimates, and distinguish pose and hair/equipment extensions. If anatomy is unacceptable, preserve the candidate and propose a correction for approval. Material quality cannot compensate for anatomical drift. Check identity, equipment, pose, materials and presentation separately; island structural approval remains independent. Preserve approved assets and verify pixel preservation before claiming it.

## Revision history
- V1.0: Initial reusable authored baseline. Incorporates Hero H01/H01-C lesson: identity artwork must not dictate anatomy; independent proportion planning and validation are required. H01-C's 53–56% experimental head-share range is character-specific, not a universal standard.
