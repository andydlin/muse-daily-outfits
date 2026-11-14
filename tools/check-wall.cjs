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
      if (!nodes.has(id)) nodes.set(id, {style:{},classList:{add(){},remove(){}},hasAttribute(){return html.includes('data-tap-zoom')},getAttribute(name){return name==='data-tap-scale'?(html.match(/data-tap-scale="([^"]+)"/)?.[1]||null):null},
        addEventListener(name, fn){events[name]=fn},setPointerCapture(){},
        querySelectorAll(){return sources.map(()=>({naturalWidth:1000,setAttribute(){},addEventListener(){}}))}});
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
    if(html.includes('data-tap-zoom')){
      const pose=()=>transform().match(/translate\(([-.\d]+)px,([-.\d]+)px\) scale\(([-.\d]+)\)/).slice(1).map(Number);
      const [tx,ty,z]=pose(),px=tx+800*z,py=ty+800*z;
      events.pointerdown({button:0,pointerId:1,clientX:px,clientY:py});
      windowEvents.pointerup({type:'pointerup',pointerId:1,clientX:px,clientY:py});flush();
      const [fx,fy,fz]=pose(),top=context.innerWidth<600?104:112;
      assert(Math.abs(fx+800*fz-context.innerWidth/2)<1e-6,'Tap must center image horizontally');
      assert(Math.abs(fy+800*fz-context.innerHeight/2)<1e-6,'Tap must center image vertically');
      assert(fz>z,'Tap should zoom in from overview');
      const fixed=Number(html.match(/data-tap-scale="([^"]+)"/)?.[1]);
      if(fixed)assert.equal(fz,fixed,'Tap must use requested zoom');
      else assert(fz*1600<=context.innerWidth*.8+1e-6,'Focused tile must leave neighboring images visible');
      const neighborX=fx+1600*fz+10,neighborY=context.innerHeight/2;
      if(!fixed)assert(neighborX<context.innerWidth,'Neighbor must remain tappable');
      events.pointerdown({button:0,pointerId:1,clientX:neighborX,clientY:neighborY});
      windowEvents.pointerup({type:'pointerup',pointerId:1,clientX:neighborX,clientY:neighborY});flush();
      const [nx,ny,nz]=pose();
      assert(Math.abs(nx+2400*nz-context.innerWidth/2)<1e-6,'Tapping visible neighbor must center it');
      const focused=transform();
      events.pointerdown({button:0,pointerId:1,clientX:100,clientY:200});
      events.pointerdown({button:0,pointerId:2,clientX:200,clientY:200});
      windowEvents.pointerup({type:'pointerup',pointerId:2,clientX:200,clientY:200});
      windowEvents.pointerup({type:'pointerup',pointerId:1,clientX:100,clientY:200});flush();
      assert.equal(transform(),focused,'Two-finger gesture must not trigger tap zoom');
    }
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
