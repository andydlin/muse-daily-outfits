# Asset Management V0.1

**Status:** Approved storage and catalog architecture (2026-11-27). This is not a new artistic standard.

## Responsibilities

- GitHub: canonical specifications, stable asset registry, provenance, validation and version history.
- Cloudflare R2: permanent original binary asset storage, in the dedicated private Standard bucket `maplestory-islands-assets`.
- ChatGPT Project Sources: active production library for frequently used masters, selected references and working packages.
- Codex: authenticated transfers, checksum verification and technical automation.
- ChatGPT: reference selection, artistic development and review.
- Figma and the private visual portal are deferred. Curated static reference sheets remain the human-facing overview.

## Storage and retrieval

Keep the bucket separate from other MapleStory projects. Use least-privilege bucket-scoped credentials, read-only for retrieval and separately authorized write access for uploads. Keep credentials out of chat, GitHub and manifests. Do not make the bucket public. Temporary signed GET URLs are bearer access links; do not persist them in the registry.

Use stable object keys and SHA-256 hashes as durable references. Preserve original filenames and bytes. Use versioned keys and atomic create-only uploads; never overwrite approved originals. Verify size and SHA-256 after download. Maintain independent backups of important archives.

Read GitHub specifications and select relevant assets. Prefer active Project Sources for available references; for specialized assets, use Codex to download and verify, then attach the individual files to the production chat. For registered images, authenticated MCP retrieval is available for visual inspection; see the versioned snapshot procedure below. Direct signed-URL retrieval and automatic ImageGen reference handoff remain unvalidated. Do not expose secrets or unrelated buckets.

## MCP V0.2 — pinned registry and refresh procedure

The authenticated read-only reference connector uses a validated build-time snapshot of the GitHub asset registry, not a live registry lookup. V0.2 endpoint: `https://msi-reference-mcp-pilot.andydlin92.workers.dev/mcp/v0.2`. Preserve V0.1 at `/mcp` as a fallback. V0.2 provides list_assets (optional category filter), get_asset_metadata and get_asset_image. Archives and arbitrary object keys are excluded. The application enforces allowlisted reads; the native R2 binding itself is not an object-level read-only IAM boundary.

Current validated snapshot: `7c14e989f4573d218b4724989ecbf03491508186` (GitHub registry blob SHA, not commit SHA or asset SHA-256). This matches the current main registry as independently fetched on 2026-11-27. The V0.2 Production project validation supplied by the user reports 3/3 original images visually ingested without attachments and 4/4 inventory/filter queries passed. One master call needed corrected image response handling and a retry. Returned sizes and connector-reported SHA-256 values match the current GitHub registry for MSI-MASTER-001, MSI-HERO-001 and MSI-HAIR-001. Independent SHA-256 recomputation in ChatGPT and standalone metadata invocation were not performed in that visual test. Automatic ImageGen pixel handoff remains unconfirmed (MCP-02B inconclusive); use explicitly attached references when direct visual conditioning is essential. No authority changes follow from retrieval success.

Whenever new assets or metadata are registered:

1. Preserve original bytes, upload approved assets to R2 using create-only keys, verify size and SHA-256, and commit the approved registry changes to GitHub.
2. Have Codex fetch the exact current registry and compare its Git blob SHA to the connector's deployed snapshot. A mismatch means refresh is needed; do not assume newly registered assets are already exposed.
3. Build a validated snapshot from the approved image allowlist; exclude archives, pending/unverified assets and arbitrary keys. Preserve existing authentication and source/deployment versions. Obtain approval before deployment changes.
4. Refresh and redeploy the connector deliberately. Test discovery, category filtering, original-byte integrity, rejected unknown IDs and unauthorized access; regression-test the prior endpoint. Record snapshot SHA, deployment version and validation results.
5. Confirm the ChatGPT connection exposes the expected tools and inventory. Retrieve new images individually and verify actual vision access separately from transport. Reconnect or refresh tools if necessary; a change in endpoint requires the appropriate connection. Keep the previous working version available for rollback.

Until refresh is complete, use the prior validated snapshot only for assets whose metadata remains applicable, or retrieve verified originals through Codex/Project Sources. Do not automatically synchronize or redeploy on every GitHub change; batch updates when useful. No secrets or signed URLs belong in the registry.

## Catalog conventions

The [registry](asset-registry.json) is deliberately small. Stable IDs use MSI-<CATEGORY>-<NUMBER>; never recycle IDs. Record version, original filename, source/checkpoint, storage location, bytes, hash, intended use, and provenance. Unknown fields remain null or explicitly pending. Track artistic acceptance, technical validation and production authority separately. A verified transfer does not validate anatomy or artistic quality.

Store selected original images, useful individual crops, donors and masks where needed, and curated reference sheets independently. Reference sheets serve human review; focused individual files are preferred for targeted generation where appropriate. Record source IDs and exact crop coordinates for derivatives. Archive intermediate and failed experiments together rather than cataloging every file as active. Preserve original archives. Do not duplicate bytes without a production reason.

## Pilot evidence and limitations

Original Codex roundtrip-report.json (completed 2026-11-27T09:40:30.491136+00:00), inspected in ChatGPT: four originals uploaded and downloaded with matching SHA-256 and sizes, total 160,597,663 bytes; private Standard bucket, create-only uploads, no other buckets touched. According to the separate user-relayed read-only retrieval summary, two assets (F05 and F02-E4) subsequently retrieved using temporary bucket-only read-only access; signed GET requests returned HTTP 200 and matching hashes in Codex. Temporary local credentials removed. ChatGPT web retrieval using signed URLs failed. The later authenticated MCP connector provides a separate visual retrieval path, as documented below.

The original upload/round-trip JSON report has now been attached and inspected: all four objects report matching local and downloaded hashes and sizes, conditional creation, Standard storage and denied unsigned GETs. Inventory totals match the manifest. All four stable keys, sizes and hashes are registered from that report. This verifies the report's contents, not independent remote operations. The separate read-only S3 retrieval report has not been inspected. Reference sheets and other individual crops have not been confirmed uploaded. No new remote transfers are authorized by this documentation update.

## Preservation and next steps

Existing island artistic masters, checkpoints, provisional numerical rules and Hybrid Assembly V3 remain unchanged. Preserve V3.0/V3.1. F05 is artistically accepted, not a canonical master; exact anatomy, background-edge and island placement checks remain pending. F02-E4 is retained experimental hair refinement, not a universal material standard.

Next: register additional assets as verified metadata becomes available, develop Hero Style Guide V0.1 and coverage matrix, then continue diverse hero experiments. Revisit the private visual portal only when categorized content, registry and retrieval maturity justify it. No Figma dependency.
