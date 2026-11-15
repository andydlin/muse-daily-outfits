#!/usr/bin/env node
// Rebuild human-readable pairing index from canonical JSON.
// Run: node tools/build-pairings.cjs
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const db=JSON.parse(fs.readFileSync(path.join(root,'planning/maplestory-pairings.json'),'utf8'));
const lines=["# Gizmo's Wall — MapleStory Class × Boss Pairing Index","",
"**Canonical data:** [maplestory-pairings.json](maplestory-pairings.json)  ",
"**Pairing website:** [MapleStory Pairing Tracker](https://www.andydlin.com/muse-daily-outfits/pairings.html)  ",
"**Explorer approval:** V4.1, November 15, 2026","",
"One class has at most one current primary pairing, but may have many separate historical encounters. A pairing being approved does **not** establish final image approval. Site content is dynamically loaded from JSON. Historical identity or image uncertainty is labeled rather than invented. Never display scene-format selection, artwork-progress metadata, or signature-action metadata in the public tracker.",""];
for(const family of db.collections){
lines.push("## "+family,"","| Class | Primary boss | Alternatives | Pairing status | Gallery image |","|---|---|---|---|---|");
for(const p of db.pairings.filter(x=>x.family===family)){
let primary=p.boss||("— (not created"+(p.proposedBoss?"; proposed: "+p.proposedBoss:"")+")");
lines.push("| "+p.hero+" | "+primary+" | "+((p.alternatives||[]).join(", ")||"—")+" | "+p.status+" | "+(p.image?"[View](../"+p.image+")":"—")+" |");
}
lines.push("");
if(family==="Explorers"){
lines.push("### Explorer historical encounters (preserved separately)","","| Class | Earlier and current encountered bosses | Evidence / uncertainty |","|---|---|---|");
for(const p of db.pairings.filter(x=>x.family===family)){
if(!p.historicalEncounters?.length)continue;
lines.push("| "+p.hero+" | "+p.historicalEncounters.map(x=>x.boss).join("; ")+" | "+p.historicalEncounters.map(x=>x.boss+": "+x.evidence).join("; ")+" |");
}
lines.push("","**Bishop caveat:** Current Zombie Mushmom pairing approved from user wall identification and historical creation record. Deployed `maple-jelly/05-bishop-v2.webp` binary was not directly inspected. Existing thumbnail must not be treated as independent visual confirmation.","");
}
}
lines.push("## Maintenance","","- Update `planning/maplestory-pairings.json` first; the website reads it directly.","- Regenerate this Markdown index using `node tools/build-pairings.cjs` after JSON changes.","- Keep every historically created/explored encounter in `historicalEncounters`; distinguish from user-approved current primary.","- For not-created classes, keep `boss: null` and retain future candidates only in `alternatives` / `proposedBoss`.","- Nova pairings are unchanged and the deliberate Magnus repeat remains approved.","");
fs.writeFileSync(path.join(root,'planning/maplestory-pairings.md'),lines.join("\n"),'utf8');
console.log("Updated pairing index for "+db.pairings.length+" classes");
