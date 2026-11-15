#!/usr/bin/env node
// Regenerate the human-readable Markdown index from the single canonical JSON.
// Usage: node tools/build-pairings.cjs
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const db = JSON.parse(fs.readFileSync(path.join(root,'planning/maplestory-pairings.json'),'utf8'));
const lines = [
"# Gizmo's Wall — MapleStory Class × Boss Pairing Index","",
"**Canonical data:** [maplestory-pairings.json](maplestory-pairings.json)  ",
"**Visual tracker:** [MapleStory Pairings](https://www.andydlin.com/muse-daily-outfits/pairings.html)","",
"Planning-only list. Do not infer that an artwork is finished from its class/boss pairing status. Older ambiguous boss identities are marked for verification. The website reads the JSON live; this index is generated from that exact JSON.",""
];
for (const family of db.collections) {
 lines.push("## "+family,"","| Class | Boss | Alternatives | Pairing status | Existing gallery image |","|---|---|---|---|---|");
 for (const p of db.pairings.filter(p=>p.family===family)) {
  lines.push("| "+p.hero+" | "+(p.boss||"**Needs verification**")+" | "+((p.alternatives||[]).join(", ")||"—")+" | "+p.status+" | "+(p.image?"[View](../"+p.image+")":"—")+" |");
 }
 lines.push("");
}
lines.push("## Maintenance","","- Edit `maplestory-pairings.json` as the single source of truth.","- Run `node tools/build-pairings.cjs` after changing data; commit the regenerated Markdown together with JSON.","- Pairing research, image-generation references, and render statuses are separate.","- Magnus repetition for Kaiser and Cadena is deliberate and approved.","");
fs.writeFileSync(path.join(root,'planning/maplestory-pairings.md'),lines.join('\n'),'utf8');
console.log("Updated planning/maplestory-pairings.md from "+db.pairings.length+" canonical entries");
