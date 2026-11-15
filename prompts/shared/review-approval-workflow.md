# Shared workflow — Review, approvals, and quality gates

**Applies to:** Daily Outfits, MapleStory hero pairings, floating islands, recolors, material edits, and other Gizmo's Wall image workflows. This governs communication and validation; it does **not** change any visual master priorities or authorize extra image edits.

## Before generating
- Read the relevant current canonical prompts and inspect actual reference assets.
- Propose a detailed scene/edit plan: character identity, pose and action, composition/scale, environment, effects, materials, cubby or island constraints, and what remains locked.
- Wait for **explicit user approval** before generating/editing. Generate exactly one image per approved iteration.
- End with a concise, actionable choice to **Approve and generate** or **Request changes**. When interactive controls are available, use working approval/edit buttons; otherwise provide clear conversational options. Never imply a button itself performs an image edit without an actual authorized tool action.

## After a render or edit
- Review the **actual output** against the appropriate actual master files. Do not substitute search illustrations for master images.
- Use a compact table with **Area | Status (Pass / Needs review / Pending) | Evidence / action** when multiple criteria are relevant.
- Check task-specific categories: face identity and two-layer construction, costume and weapon fidelity, pose/grips, material distinctions (plush vs metal), effects, environment, composition, cubby geometry/colors/LED, and approved locked details. For floating islands, separately check visible floor depth and open combat space.
- Distinguish direct observation from estimates. Provide actual pixel measurements and deltas only when measured from accessible source/output files; otherwise say measurement is pending. Do not claim a quality gate passed without inspection.
- Prioritize fixes by impact, explain precisely what would change, and explicitly list what **must not** change. Avoid unnecessary general texture passes when a localized edit is sufficient.
- After a review, offer clear next actions: **Approve targeted correction**, **Request changes**, or **Keep current version**. Buttons are preferred where supported, but do not clutter simple acknowledgments with controls.

## Final validation and completion
- After **every** edit, rerun the applicable quality checks, including the mandatory cubby geometry check for cubby scenes. Do not reuse pre-edit measurement results as post-edit evidence.
- Mark an image final only after user acceptance and clearly distinguish accepted artistic exceptions from objectively verified technical checks.
- Never silently update master priorities, approved visuals, or GitHub rules. Keep approval and scope constraints from the task-specific prompt authoritative.
- Keep reviews readable: detailed tables for substantive audits, short paragraphs for straightforward passes, and no gratuitous checklists inside artwork.
