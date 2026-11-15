#!/usr/bin/env node
// Regenerate the human-readable pairing index from canonical JSON.
// Usage: node tools/build-pairings.cjs
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const d=JSON.parse(fs.readFileSync(path.join(root,'planning/maplestory-pairings.json'),'utf8'));
const lines=["# Gizmo's Wall — MapleStory Class × Boss Pairing Index","",
"**Canonical data:** [maplestory-pairings.json](maplestory-pairings.json)  ",
"**Pairing website:** [MapleStory Pairing Tracker](https://www.andydlin.com/muse-daily-outfits/pairings.html)  ",
"**Explorer approval:** V4.1, November 15, 2026  ",
"**Cygnus Knights approval:** V1, November 15, 2026  ","**Resistance approval:** V1, November 15, 2026  ","**Heroes of Maple approval:** V1, November 15, 2026","",
"An approved primary pairing is a planning decision, NOT confirmation of final artwork approval. Published gallery thumbnails may depict older opponents. Historical records distinguish created work, exploratory proposals, and uncertain identities. No cubby/island format selection or signature-action metadata is tracked here.",""];
for(const family of d.collections){
lines.push("## "+family,"","| Class | Primary boss | Alternatives | Pairing status | Gallery image |","|---|---|---|---|---|");
for(const p of d.pairings.filter(x=>x.family===family)){
const prim=p.boss||("— (not created"+(p.proposedBoss?"; proposed: "+p.proposedBoss:"")+")");
lines.push("| "+p.hero+" | "+prim+" | "+((p.alternatives||[]).join(", ")||"—")+" | "+p.status+" | "+(p.image?"[View](../"+p.image+")":"—")+" |");
}
lines.push("");
if(["Explorers","Cygnus Knights","Resistance","Heroes of Maple"].includes(family)){
lines.push("### "+family+" — historical encounters and proposals","","| Class | Boss | Historical evidence / qualification |","|---|---|---|");
for(const p of d.pairings.filter(x=>x.family===family))for(const v of p.historicalEncounters||[])lines.push("| "+p.hero+" | "+v.boss+" | "+v.evidence+" |");
lines.push("");
if(family==="Explorers")lines.push("**Bishop caveat:** User approved Zombie Mushmom as current wall pairing and earlier creation supports it, but the deployed Bishop binary has not been directly inspected.","");
if(family==="Cygnus Knights")lines.push("**Dawn Warrior caveat:** Seren is now the approved primary, although the published thumbnail may still depict the older Magnus encounter.","");
if(family==="Resistance")lines.push("**Resistance caveats:** Blaster × Papulatus is an approved primary selection; the boss in the published Blaster thumbnail was not independently identified. Demon Slayer's winged-swordsman thumbnail identity is likewise not independently verified. Mechanic × Lotus approval does not establish completion of the floating-island artwork.","");
if(family==="Heroes of Maple")lines.push("**Heroes of Maple caveat:** Six primary boss pairings were approved, but earlier alternatives (for example Mercedes × Lucid, Phantom × Pink Bean, Luminous × Hilla, Shade × Magnus) are proposals unless a separate created encounter is confirmed. Existing wall thumbnails do not independently prove final artwork approval.","");
}}
lines.push("## Maintenance","","- Edit `planning/maplestory-pairings.json` first; the website reads it directly.","- Run `node tools/build-pairings.cjs` after editing JSON to regenerate this Markdown.","- Preserve historical encounters in `historicalEncounters` with evidence qualifiers; do not equate primary-pairing approval with artwork approval.","- Not-created classes retain `boss: null` until approved; proposals stay alternatives.","- Nova's two Magnus selections remain intentional and unchanged.","");
fs.writeFileSync(path.join(root,'planning/maplestory-pairings.md'),lines.join("\n"),'utf8');
console.log("Updated pairing index for "+d.pairings.length+" classes");
