# Facial refinement — V0.1
Approved for experimental use 2026-11-27; not a validated universal eye geometry. Follow [master prompt](../hero-generation-prompt.md).

## Resolved inputs
Foundation and clean crop; approved mask; identity reference; construction donor; material donor if needed; allowed changes; protected landmarks.

## Authored reusable prompt
Refine only the approved facial regions of the supplied clean crop. Separate identity (eye color, recognizable features, personality, expression), construction (eyelid thickness, iris shape and detailing, eye contours), and material (smooth matte skin, restrained highlights). Preserve identity without freezing construction properties explicitly approved for change. Use construction donors only for the assigned features, not their pose, expression or colors. Use material donors only for surface treatment. Soft in appearance, smooth in material. Maintain dimensional anime eyes, not button eyes or mascot styling. Preserve eye size, spacing, gaze, brows, mouth, head silhouette and hair unless separately approved. For eye-only work, thin heavy upper eyelids, soften angular outer corners, soften iris tonal transitions and restrain catchlights only as approved. Preserve all other regions. Return one image.

## Validation
Register to foundation without distortion; reject geometry drift, inspect eyelid and iris changes and expression at full size and 256 px. Selectively reassemble only after approval and verify zero changed pixels outside approved mask. Preserve unsuccessful candidates. H03-C showed that identity preservation can conflict with construction changes; H03-C2 tests narrower scope. No universal eye dimensions established.
