(() => {
'use strict';
const $=s=>document.querySelector(s),world=$('#world'),vp=$('#viewport');
  let x=0,y=0,scale=1,frame=0,moved=false;
  const tiles=world.querySelectorAll('img'),columns=5,tileSize=1600;
  $('.count').textContent=tiles.length+' cubbies';
  // Stop at native image resolution; images may have different source sizes.
  function maxScale(){return Math.min(...[...tiles].map(img=>(img.naturalWidth||1000)/tileSize))}
  let viewWidth=innerWidth,viewHeight=innerHeight;
  function dimensions(){return{w:columns*tileSize,h:Math.ceil(tiles.length/columns)*tileSize}}
  function layout(){let d=dimensions();world.style.width=d.w+'px';world.style.height=d.h+'px'}
  function paint(){world.style.transform=`translate(${x}px,${y}px) scale(${scale})`;$('#percent').textContent=Math.round(scale*100)+'%'}
  function scheduleDraw(){if(!frame)frame=requestAnimationFrame(()=>{frame=0;paint()})}
  function clampPan(){
  const d=dimensions(),cx=innerWidth/2,cy=innerHeight/2;
  // Allow every edge tile's center to reach the screen center.
  const halfW=Math.min(d.w,tileSize)*scale/2,halfH=Math.min(d.h,tileSize)*scale/2;
  x=Math.max(cx-d.w*scale+halfW,Math.min(cx-halfW,x));
  y=Math.max(cy-d.h*scale+halfH,Math.min(cy-halfH,y));
}
function draw(){clampPan();scheduleDraw()}
  function fit(){layout();let d=dimensions(),top=innerWidth<600?104:112,bottom=90;scale=Math.min((innerWidth-32)/d.w,(innerHeight-top-bottom)/d.h,maxScale());scale=Math.max(.001,scale);x=(innerWidth-d.w*scale)/2;y=top+(innerHeight-top-bottom-d.h*scale)/2;draw()}
  function home(){layout();let d=dimensions(),top=innerWidth<600?104:112,bottom=90;let fs=Math.min((innerWidth-32)/d.w,(innerHeight-top-bottom)/d.h,maxScale());fs=Math.max(.001,fs);scale=Math.min(fs*2,maxScale());x=16;y=top;draw()}
  function reset(){home()}
  function zoom(f,cx=innerWidth/2,cy=innerHeight/2){let n=Math.max(.001,Math.min(maxScale(),scale*f));x=cx-(cx-x)*n/scale;y=cy-(cy-y)*n/scale;scale=n;draw()}
  $('#plus').onclick=()=>{stopFocus();zoom(1.25)};$('#minus').onclick=()=>{stopFocus();zoom(.8)};$('#fit').onclick=()=>{stopFocus();fit()};$('#reset').onclick=()=>{stopFocus();reset()};
  const tapZoom=vp.hasAttribute('data-tap-zoom');
  function stopFocus(){world.classList.remove('focus-zoom')}
  function focusTile(i){
    if(i<0||i>=tiles.length)return;
    const top=innerWidth<600?104:112,bottom=90;
    // Leave a visible strip of neighboring tiles for tap-to-tap navigation.
    const fixedScale=Number(vp.getAttribute('data-tap-scale'));
    scale=fixedScale>0?Math.min(maxScale(),fixedScale):Math.max(.001,Math.min(maxScale(),innerWidth*.8/tileSize,(innerHeight-top-bottom)*.8/tileSize));
    x=innerWidth/2-(i%columns+.5)*tileSize*scale;
    y=innerHeight/2-(Math.floor(i/columns)+.5)*tileSize*scale;
    world.classList.add('focus-zoom');draw();
  }
  world.addEventListener('transitionend',stopFocus);
  if(tapZoom)tiles.forEach((img,i)=>{
    img.tabIndex=0;img.setAttribute('role','button');img.setAttribute('aria-label','Zoom into '+img.alt);
    img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();focusTile(i)}});
  });
  const points=new Map();let start,gesture;
  vp.addEventListener('dragstart',e=>e.preventDefault());
  vp.addEventListener('pointerdown',e=>{if(e.button!==0)return;stopFocus();vp.setPointerCapture(e.pointerId);points.set(e.pointerId,{x:e.clientX,y:e.clientY});moved=false;start={x:e.clientX,y:e.clientY,tx:x,ty:y};if(points.size===2){let [a,b]=[...points.values()];gesture={distance:Math.hypot(a.x-b.x,a.y-b.y),cx:(a.x+b.x)/2,cy:(a.y+b.y)/2};moved=true}vp.classList.add('drag')});
  vp.addEventListener('pointermove',e=>{if(!points.has(e.pointerId))return;points.set(e.pointerId,{x:e.clientX,y:e.clientY});if(points.size===2){let [a,b]=[...points.values()],d=Math.hypot(a.x-b.x,a.y-b.y),cx=(a.x+b.x)/2,cy=(a.y+b.y)/2;if(gesture){zoom(d/Math.max(gesture.distance,1),gesture.cx,gesture.cy);x+=cx-gesture.cx;y+=cy-gesture.cy;draw()}gesture={distance:d,cx,cy};moved=true}else if(start){let dx=e.clientX-start.x,dy=e.clientY-start.y;if(Math.hypot(dx,dy)>5)moved=true;if(moved){x=start.tx+dx;y=start.ty+dy;draw()}}});
  function end(e){if(!points.has(e.pointerId))return;
    if(tapZoom&&e.type==='pointerup'&&points.size===1&&!moved&&start&&Math.hypot(e.clientX-start.x,e.clientY-start.y)<=5){
      const col=Math.floor((e.clientX-x)/scale/tileSize),row=Math.floor((e.clientY-y)/scale/tileSize);
      if(col>=0&&col<columns&&row>=0)focusTile(row*columns+col);
    }
    points.delete(e.pointerId);gesture=null;if(points.size){let a=[...points.values()][0];start={x:a.x,y:a.y,tx:x,ty:y}}else{start=null;vp.classList.remove('drag')}}window.addEventListener('pointerup',end);window.addEventListener('pointercancel',end);vp.addEventListener('lostpointercapture',end);
  vp.addEventListener('wheel',e=>{stopFocus();e.preventDefault();if(e.ctrlKey||e.metaKey)zoom(Math.exp(-e.deltaY*.01),e.clientX,e.clientY);else{x-=e.deltaX;y-=e.deltaY;draw()}},{passive:false});
  vp.addEventListener('keydown',e=>{let handled=true;switch(e.key){case 'ArrowLeft':x+=80;break;case 'ArrowRight':x-=80;break;case 'ArrowUp':y+=80;break;case 'ArrowDown':y-=80;break;case '+':case '=':zoom(1.25);break;case '-':zoom(.8);break;case '0':reset();break;default:handled=false}if(handled){e.preventDefault();draw()}});
  window.addEventListener('resize',()=>{
    // Keep the same wall point at the center, including after phone rotation.
    x+=(innerWidth-viewWidth)/2;y+=(innerHeight-viewHeight)/2;
    viewWidth=innerWidth;viewHeight=innerHeight;draw();
  });reset();
})();
