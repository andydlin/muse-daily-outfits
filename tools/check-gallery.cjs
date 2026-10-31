const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),cp=require('node:child_process');
const html=fs.readFileSync('index.html','utf8'),script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const outfits=JSON.parse(script.match(/var OUTFITS = ([\s\S]*?);\s*const \$/)[1]);
const previous=cp.execFileSync('git',['show','HEAD:index.html'],{encoding:'utf8'});
assert.deepEqual(outfits,JSON.parse(previous.match(/var OUTFITS = ([\s\S]*?);\s*const \$/)[1]));
assert.deepEqual(outfits.map(o=>o.name.slice(0,10)),outfits.map(o=>o.name.slice(0,10)).sort().reverse());
for(const o of outfits){for(const a of [o.front,o.back,...Object.values(o.hairOff||{})]){assert(fs.existsSync(a.file));assert(fs.existsSync('images/thumb/'+a.name))}const slug=o.front.name.replace(/-(?:with-helmet-|with-hair-)?front\.webp$/,'');for(const scene of ['waking','idle','working','making-something'])assert(fs.existsSync(`scenes/${slug}/${scene}.mp4`))}
function runtime(count,width=1200){
 let queue=[],nodes=new Map();
 class Element{
  constructor(){this.attrs={};this.dataset={};this.style={};this.children=[];this.parts=new Map();this.isConnected=true;this.paused=true;this.open=false;let classes=new Set();this.classList={add:x=>classes.add(x),remove:x=>classes.delete(x),contains:x=>classes.has(x),toggle:(x,on)=>{if(on??!classes.has(x))classes.add(x);else classes.delete(x)}}}
  querySelector(q){if(!this.parts.has(q))this.parts.set(q,new Element());return this.parts.get(q)}
  append(c){this.children.push(c)}remove(){this.isConnected=false}contains(){return false}addEventListener(){}setAttribute(k,v){this.attrs[k]=String(v)}getAttribute(k){return this.attrs[k]??(k==='src'?this.src:null)}hasAttribute(k){return !!this.getAttribute(k)}removeAttribute(k){delete this.attrs[k];if(k==='src')delete this.src}pause(){this.paused=true}play(){this.paused=false;return Promise.resolve()}load(){}focus(){}showModal(){this.open=true}close(){this.open=false}
  get offsetHeight(){return nodes.get('#world')?.classList.contains('grid-only')?230:380}
  getBoundingClientRect(){const p=ctx;let left=p.x+parseFloat(this.style.left||0)*p.scale,top=p.y+parseFloat(this.style.top||0)*p.scale;return {left,top,right:left+230*p.scale,bottom:top+230*p.scale,width:230*p.scale}}
 }
 const doc={querySelector:q=>{if(!nodes.has(q))nodes.set(q,new Element());return nodes.get(q)},createElement:()=>new Element(),addEventListener(){},hidden:false,activeElement:null};
 const ctx=vm.createContext({document:doc,window:{addEventListener(){}},innerWidth:width,innerHeight:850,matchMedia:()=>({matches:false,addEventListener(){}}),requestAnimationFrame:f=>(queue.push(f),queue.length),console});
 const source=script.replace(/var OUTFITS = [\s\S]*?;\s*const \$/,`var OUTFITS = ${JSON.stringify(Array.from({length:count},(_,i)=>outfits[i%outfits.length]))};\nconst $`);
 vm.runInContext(source,ctx);function run(code){return vm.runInContext(code,ctx)}function flush(){let n=0;while(queue.length){assert(++n<20,'draw loop');queue.shift()()}}
 flush();run("scale=1;x=14;y=104;draw()");flush();assert(run('cards.size')<40,'normal view should mount a bounded number of cards');assert(run("[...cards.values()].filter(c=>!c.querySelector('video').paused).length")<=4);
 run("setMode('detailed')");flush();assert(run('rowHeight')===398);run("open(0)");assert(run("[...cards.values()].every(c=>c.querySelector('video').paused)"));run('close();x=-2000;draw()');flush();assert(run('cards.size')<40);
 run('fit()');flush();assert(run('dimensions().w*scale')<=width);run('document.hidden=true;syncVideos()');assert(run("[...cards.values()].every(c=>c.querySelector('video').paused)"));return run('cards.size');
}
for(const n of [18,365,1000])console.log(`${n} outfits: rendering, mode switching, viewer pause, pan, Fit all, hidden-tab pause passed (${runtime(n)} overview cards)`);
console.log('Original outfit records, ordering, all photos, thumbnails, and scene paths passed.');
