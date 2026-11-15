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
"**Cygnus Knights approval:** V1, November 15, 2026","",
"Current approved primary pairing is a planning decision, not verification of a completed final image. The published gallery thumbnail may show an earlier boss. Historical entries distinguish earlier created work from proposals and uncertain identity. No cubby/island choice or signature action tracked here.",""];
for(const family of d.collections){
lines.push("## "+family,"","| Class | Primary boss | Alternatives | Pairing status | Gallery image |","|---|---|---|---|---|");
for(const p of d.pairings.filter(x=>x.family===family)){
const prim=p.boss||("— (not created"+(p.proposedBoss?"; proposed: "+p.proposedBoss:"")+")");
lines.push("| "+p.hero+" | "+prim+" | "+((p.alternatives||[]).join(", ")||"—")+" | "+p.status+" | "+(p.image?"[View](../"+p.image+")":"—")+" |");
}
lines.push("");
if(family==="Explorers"||family==="Cygnus Knights"){
lines.push("### "+family+" historical pairings and explorations","","| Class | Boss | Evidence / qualification |","|---|---|---|");
for(const p of d.pairings.filter(x=>x.family===family))for(const v of p.historicalEncounters||[])lines.push("| "+p.hero+" | "+v.boss+" | "+v.evidence+" |");
lines.push("");
if(family==="Explorers")lines.push("**Bishop caveat:** User approved Zombie Mushmom as current wall pairing and earlier creation supports it, but the deployed Bishop binary has not been directly inspected.","");
if(family==="Cygnus Knights")lines.push("**Dawn Warrior caveat:** Seren is now the approved primary; the existing Dawn Warrior thumbnail may show an earlier Magnus version. An approved pairing does not imply the Seren artwork was created.","");
}}
lines.push("## Maintenance","","- Edit `planning/maplestory-pairings.json` first; the website reads it directly.","- Run `node tools/build-pairings.cjs` after editing JSON to regenerate this Markdown.","- Preserve historical encounters separately and distinguish render evidence from earlier proposals.","- Not-created classes retain `boss: null` until approved; proposals stay alternatives.","- Nova's two Magnus selections remain intentional and unchanged.","");
fs.writeFileSync(path.join(root,'planning/maplestory-pairings.md'),lines.join("\n"),'utf8');
console.log("Updated pairing index for "+d.pairings.length+" classes");
