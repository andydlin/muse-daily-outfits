const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const cp = require('node:child_process');
const pages = process.argv.slice(2);
if (!pages.length) pages.push('scenes-wall.html');
for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  const root = path.dirname(page);
  const sources = [...html.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map(m => m[1]);
  assert(sources.length, `${page}: no wall images`);
  assert.equal(new Set(sources).size, sources.length, `${page}: duplicate images`);
  for (const source of sources) assert(fs.existsSync(path.join(root, source)), `Missing ${source}`);
  for (const asset of ['wall.css', 'wall.js']) assert(html.includes(`"${asset}"`) || html.includes(`"${asset}?`));
  assert(!/<dialog\b|onclick=/i.test(html), 'Wall must remain pan/zoom only');
  cp.execFileSync(process.execPath, ['--check', path.join(root, 'wall.js')]);
  for (const [width,height] of [[390,844],[1440,900]]) {
    const nodes = new Map(), events = {}, windowEvents = {};
    function node(id) {
      if (!nodes.has(id)) nodes.set(id, {style:{},classList:{add(){},remove(){}},
        addEventListener(name, fn){events[name]=fn},setPointerCapture(){},
        querySelectorAll(){return sources.map(()=>({naturalWidth:1000}))}});
      return nodes.get(id);
    }
    const queue=[];
    const context = {document:{querySelector:node},innerWidth:width,innerHeight:height,
      requestAnimationFrame(fn){queue.push(fn);return queue.length},
      window:{addEventListener(name,fn){windowEvents[name]=fn}}};
    function flush(){while(queue.length)queue.shift()()}
    vm.runInNewContext(fs.readFileSync(path.join(root,'wall.js'),'utf8'),context);flush();
    assert.equal(node('.count').textContent, `${sources.length} cubbies`);
    const transform=()=>node('#world').style.transform;
    const before=transform();
    events.wheel({preventDefault(){},deltaX:25,deltaY:40});flush();
    assert.notEqual(transform(),before,'Wheel must pan');
    for(let i=0;i<100;i++)node('#plus').onclick();flush();
    assert(Number(transform().match(/scale\(([^)]+)/)[1])<=.625,'Zoom exceeds source resolution');
    const old=transform().match(/translate\(([^p]+)px,([^p]+)px/).slice(1).map(Number);
    context.innerWidth+=100;context.innerHeight+=60;windowEvents.resize();flush();
    const resized=transform().match(/translate\(([^p]+)px,([^p]+)px/).slice(1).map(Number);
    assert.equal(resized[0],old[0]+50);assert.equal(resized[1],old[1]+30);
    node('#fit').onclick();flush();
    assert(!/NaN|Infinity/.test(transform()));
    // Extreme trackpad pans must stop at both edges, at overview and detail scales.
    for(const detail of [false,true]) {
      if(detail){for(let i=0;i<100;i++)node('#plus').onclick();flush()}
      for(const delta of [-1e7,1e7]) {
        events.wheel({preventDefault(){},deltaX:delta,deltaY:delta});flush();
        const [tx,ty,z]=transform().match(/translate\(([-.\d]+)px,([-.\d]+)px\) scale\(([-.\d]+)\)/).slice(1).map(Number);
        const half=800*z;
        const totalW=8000*z,totalH=Math.ceil(sources.length/5)*1600*z;
        const cx=context.innerWidth/2,cy=context.innerHeight/2;
        assert(tx>=cx-totalW+half-1e-6&&tx<=cx-half+1e-6);
        assert(ty>=cy-totalH+half-1e-6&&ty<=cy-half+1e-6);
        // Extreme pans reach the exact bounds, placing corner tile centers centrally.
        assert(Math.abs(tx-(delta<0?cx-half:cx-totalW+half))<1e-6);
        assert(Math.abs(ty-(delta<0?cy-half:cy-totalH+half))<1e-6);
      }
    }
  }
  console.log(`${page}: ${sources.length} image paths, syntax, mobile/desktop pan, zoom limit, resize, Fit all and pan bounds pass`);
}
