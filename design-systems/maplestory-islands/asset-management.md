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

Read GitHub specifications and select relevant assets. Prefer active Project Sources for available references; for specialized assets, use Codex to download and verify, then attach the individual files to the production chat. Direct ChatGPT retrieval is unvalidated; do not depend on signed URLs or claim automatic access. Do not expose secrets or unrelated buckets.

## Catalog conventions

The [registry](asset-registry.json) is deliberately small. Stable IDs use MSI-<CATEGORY>-<NUMBER>; never recycle IDs. Record version, original filename, source/checkpoint, storage location, bytes, hash, intended use, and provenance. Unknown fields remain null or explicitly pending. Track artistic acceptance, technical validation and production authority separately. A verified transfer does not validate anatomy or artistic quality.

Store selected original images, useful individual crops, donors and masks where needed, and curated reference sheets independently. Reference sheets serve human review; focused individual files are preferred for targeted generation where appropriate. Record source IDs and exact crop coordinates for derivatives. Archive intermediate and failed experiments together rather than cataloging every file as active. Preserve original archives. Do not duplicate bytes without a production reason.

## Pilot evidence and limitations

Original Codex roundtrip-report.json (completed 2026-11-27T09:40:30.491136+00:00), inspected in ChatGPT: four originals uploaded and downloaded with matching SHA-256 and sizes, total 160,597,663 bytes; private Standard bucket, create-only uploads, no other buckets touched. According to the separate user-relayed read-only retrieval summary, two assets (F05 and F02-E4) subsequently retrieved using temporary bucket-only read-only access; signed GET requests returned HTTP 200 and matching hashes in Codex. Temporary local credentials removed. ChatGPT web retrieval failed; direct retrieval and artistic application remain unvalidated. No permanent ChatGPT R2 connection exists.

The original upload/round-trip JSON report has now been attached and inspected: all four objects report matching local and downloaded hashes and sizes, conditional creation, Standard storage and denied unsigned GETs. Inventory totals match the manifest. All four stable keys, sizes and hashes are registered from that report. This verifies the report's contents, not independent remote operations. The separate read-only retrieval report has not been inspected. Direct ChatGPT retrieval remains unvalidated. Reference sheets and other individual crops have not been confirmed uploaded. No new remote transfers are authorized by this documentation update.

## Preservation and next steps

Existing island artistic masters, checkpoints, provisional numerical rules and Hybrid Assembly V3 remain unchanged. Preserve V3.0/V3.1. F05 is artistically accepted, not a canonical master; exact anatomy, background-edge and island placement checks remain pending. F02-E4 is retained experimental hair refinement, not a universal material standard.

Next: register additional assets as verified metadata becomes available, develop Hero Style Guide V0.1 and coverage matrix, then continue diverse hero experiments. Revisit the private visual portal only when categorized content, registry and retrieval maturity justify it. No Figma dependency.
