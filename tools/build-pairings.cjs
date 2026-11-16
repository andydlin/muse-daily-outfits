#!/usr/bin/env node
// Generate the human-readable pairing index from the canonical 54-class JSON.
// Run: node tools/build-pairings.cjs
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const d=JSON.parse(fs.readFileSync(path.join(root,'planning/maplestory-pairings.json'),'utf8'));
const lines=["# Gizmo's Wall — MapleStory Class × Boss Pairing Index","",
"**Canonical data:** [maplestory-pairings.json](maplestory-pairings.json)  ",
"**Compact comparison page:** [Gizmo's Wall — 54-Class Pairings](https://www.andydlin.com/muse-daily-outfits/pairings.html)  ",
"**Review history:** Explorers V4.1; Cygnus Knights V1; Resistance V1; Heroes of Maple V1 (November 15, 2026). Nova was also previously approved.","",
"**Meaning of approved:** The user approved a class-versus-boss pairing in the existing tracker. This does NOT imply final artwork approval. Independent fresh suggestions shown below are NOT approved replacements. No artwork or cubby/island status is inferred.","",
"**Coverage:** All 54 classes have an independent recommended primary plus two alternatives. Across these 162 suggestion slots, all 42 featured boss identities occur at least twice and each appears as a fresh primary at least once.",""];
for(const family of d.collections){
lines.push("## "+family,"","| Hero | Existing approved primary | My fresh primary pick | Fresh alternatives |","|---|---|---|---|");
for(const p of d.pairings.filter(x=>x.family===family)){
lines.push("| "+p.hero+" | "+(p.boss||"— Not yet selected")+" | "+(p.suggestedPrimary||"—")+" | "+(p.suggestedAlternatives||[]).join(", ")+" |");
}
lines.push("");
if(["Explorers","Cygnus Knights","Resistance","Heroes of Maple"].includes(family)){
lines.push("### Historical encounters and proposals","","| Hero | Boss | Evidence / qualification |","|---|---|---|");
for(const p of d.pairings.filter(x=>x.family===family))for(const v of p.historicalEncounters||[])lines.push("| "+p.hero+" | "+v.boss+" | "+v.evidence+" |");
lines.push("");
}
}
lines.push("## Data rules","","- Edit `planning/maplestory-pairings.json` as the single source of truth; the website reads it dynamically.","- `boss` and `status` preserve previously approved pairing decisions; `suggestedPrimary` and `suggestedAlternatives` are independent planning recommendations.","- `historicalEncounters` distinguishes documented created work from proposals with evidence qualifiers.","- Pairing approval never implies final image/artwork approval.","- Regenerate this file using `node tools/build-pairings.cjs` after changing JSON.","");
fs.writeFileSync(path.join(root,'planning/maplestory-pairings.md'),lines.join("\n"),'utf8');
console.log("Generated master pairing index for "+d.pairings.length+" classes");
