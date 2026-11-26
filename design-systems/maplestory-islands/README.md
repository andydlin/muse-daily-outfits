# MapleStory Islands Design System

**Status:** V0.1 — development workspace; not a release of new canonical artistic standards.

## Purpose

Build a comprehensive, reusable visual and production system for premium handcrafted MapleStory floating-island miniatures, beginning with heroes across the intended class roster. Individual character candidates are reference implementations, not the entire design system. Islands and Cubbies remain independent artistic systems; do not import cubby mascot anatomy or styling.

## Existing authority (unchanged)

The following current specifications govern production. This directory does not supersede them:

- [Floating Islands](../../prompts/maplestory/floating-islands.md)
- [Hybrid Assembly V3](../../prompts/maplestory/hybrid-assembly-workflow-v3.md)
- [Hero × Boss Scale & Camera](../../prompts/maplestory/hero-boss-island-master-v1.md)
- [Hero Pairing](../../prompts/maplestory/hero-pairing.md) — island-applicable rules only.
- [Shared Materials](../../prompts/shared/plush-materials.md) — island-specific rules take precedence.
- [Original Island Production Blueprint V3.1](../../prompts/maplestory/original-island-production-blueprint-v3.md)

Preserve existing masters, artistic checkpoints, source assets, V3.0 and V3.1. Numerical standards remain provisional within their existing scopes. Artistic approval is distinct from structural validation. Explicit approval is required before generation, editing or permanent specification changes.

## Proposed organization

Create sections as actual content is inventoried and approved, rather than populating empty placeholders.

| Path | Intended content |
| --- | --- |
| foundations/ | Shared principles and scoped design tokens |
| hero/ | Anatomy, faces, hair, costumes, equipment, poses and variants |
| boss/ | Independent boss anatomy, silhouettes and variants |
| materials/ | Material references, donors and application techniques |
| environment/ | Scenery and geological craftsmanship |
| photography/ | Lighting, framing and miniature readability |
| composition/ | Spatial organization and integration |
| validation/ | Coverage matrices, experiments and QA |
| asset-registry.json | Stable asset identifiers, versions, provenance, locations and approval scope |
| CHANGELOG.md | Development and release history |

The existing prompts remain in their current locations. A future Cubbies design system may have a separate sibling directory; it is outside this initiative.

## Documentation and assets

- GitHub: versioned specifications, registry and validation records.
- Figma (planned): browsable visual reference library, component examples, variants and comparisons.
- Source asset storage (not yet selected): full-resolution originals, donors, masks, composites, Blender packages and measurement data. Keep individual production assets separate from reference sheets.

Use stable asset IDs and explicit version, status and scope. Distinguish exploratory results, candidates, scoped approvals, validated findings and canonical standards. Record provenance and unresolved validation rather than inferring approval.

## Development sequence

1. Establish this independent documentation workspace.
2. Inventory existing assets and verify availability, provenance and approval status.
3. Establish storage and catalog conventions.
4. Build the initial Figma visual library from preserved assets.
5. Draft a provisional Hero Style Guide from verified evidence.
6. Map intended hero roster coverage and choose representative edge cases.
7. Expand and validate reusable hero components across classes and poses.
8. Review a proposed Hero Design System V1.0 release for explicit approval.

Current handoff: Fighter exploration and Ice Lightning Mage F05 artistic candidate acceptance are reported; F04-A4 is the preserved material-refined foundation. Exact F05 structural checks and actual island placement remain unfinished. Source files and reported metrics must be independently inventoried before catalog promotion. These records do not establish new universal rules.

Boss, environment and photographic system development can follow independently. No new Blender development is proposed without a demonstrated production deficiency.
