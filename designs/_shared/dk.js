/* Designer's Kitchen — shared signature for every design in the collection.
   Adds Manisha's logo and a first-person "My take" note. Edit NOTES below to change the copy. */
(function(){
  if(window.top!==window.self||window.__dk)return;window.__dk=1;
  var NOTES={
   '01':['Salmon Sunrise','Food interfaces usually shout. I wanted this one to feel hand-torn and quiet, like a menu someone sketched just for you. My take: texture beats stock photography every time.'],
   '02':['Brewtal Coffee','I think brutalism is just honesty with a bigger border. Thick outlines and hard shadows make hierarchy impossible to miss, and that is exactly what I enjoy about it.'],
   '03':['Nova AI','Glass UI is easy to overdo. My rule: blur and glow should explain depth, never just decorate. The self-drawing dashboard is me showing the product instead of describing it.'],
   '04':['Pixel Quest','Pixel art taught me constraints. With a tiny palette and a grid you cannot hide behind effects, so every sprite has to earn its place. I still design this way.'],
   '05':['Halo One','I believe the product should be the hero and scroll should be the demo. Letting people explode and recolour the headphones says more than any feature list.'],
   '06':['Maison Véra','To me luxury is restraint: big serif type, lots of air, one strong image. I like layouts that read like magazine spreads.'],
   '07':['Juno Studio','Bento grids are my favourite way to say a lot without overwhelming anyone. Every card is a small moment of delight, and dark mode is never an afterthought.'],
   '08':['Raster Studio','One typeface, twelve columns, one red. When the grid is strict the type does all the talking, and I find that calming to design.'],
   '09':['Chroma*OS','Y2K is optimism with reflective surfaces. I wanted chrome that feels liquid and a UI you can drag around like a desktop toy.'],
   '10':['Aurelia Genève','Slow is a luxury too. I tied the watch to the real time and kept the scroll cinematic, because patience is part of the brand.'],
   '11':['Volt//Runner','Neon only works when darkness earns it. Rain, bloom and glitch type are my way of making a screen feel like a place at 2 a.m.'],
   '12':['Puffle','For kids, soft shapes and big targets matter more than cleverness. A puffy mascot and a counting game make learning feel like play.'],
   '13':['Odyssey','Scale is hard to feel on a flat page, so I let scroll move a camera from Earth to Saturn. For me the journey is the content.'],
   '14':['Rad Fest ’26','Memphis taught me that chaos can be designed. I made the shapes throwable because a playful layout should push back when you touch it.'],
   '15':['Shizuku 雫','Ma, the space between things, is the lesson I keep returning to. Ink, paper and one slow cursor trail: less on screen, more felt.'],
   '16':['The Emerald Room','Gold on emerald is geometry showing off. I love Deco because every line is deliberate and symmetry feels like confidence.'],
   '17':['Fern & Field','Nature is not a grid, so the layout should not be either. Swaying grass and morphing blobs let the page breathe.'],
   '18':['Sunset Drive','Sunset, grid, chorus pad. I synthesised the music in the browser because a synthwave page without sound feels half finished.'],
   '19':['Kova','Money apps should feel calm and trustworthy, not clinical. An aurora glow and a card you can spin make a serious product feel human.'],
   '20':['Atelier Noma','Blueprints show the thinking before the building. Scrolling from wireframe to sunlit render is how I describe my own design process.'],
   '21':['Tidebowl','Ordering should feel like making something. Drag, drizzle and watch the receipt add up. I think interfaces work best when they let you play first.'],
   '22':['Zest','I learn through design thinking: empathise, define, ideate, prototype, test. This site is me explaining that with a sticker lemon that grows as you scroll.'],
   '23':['Kibori 木彫','Craft is slow, and a site about craft should be too. Eight turnable pieces let you hold the work in your hands before you commission it.'],
   '24':['Kage 影','Quiet is hard to design. A moonlit approach, layered depth and one vermilion accent: I wanted the site to feel like walking towards something.'],
   '25':['The Ashen One','A collector card is a tiny stage. Tilt, rotate, flip: I wanted a hover to feel like you are holding something rare.'],
   '26':['Dilli दिल्ली','Delhi at dusk is a palette I never tire of: stone, marigold and a violet sky. I drew every landmark in code instead of using photos, so it feels like my sketchbook.'],
   '27':['Toastie','A game is the honest test of UX: if an interaction is not clear in five seconds, players leave. I built Toastie to practise feedback, sound and motion, and every drag, scrub and sizzle is a design decision.'],
   '28':['Lucky','I love code as a medium. This clover is only text: rows of “good luck” in 77 languages, turned in 3D by a little maths. I keep the source on screen because showing how something is made is part of the design for me. A study after a reel by @jin_22ee, rebuilt from scratch.'],
   '29':['Merry Toastie','Seasonal design should feel like a gift, not a banner. I took the Toastie engine and dressed it for Christmas: gingerbread toast, cookie butter, candy you can place and move. The fun is in the small tactile moments. A study after a gingerbread-toast reel by @mikeesbored.']
  };
  var FOLDERS=['01-salmon-sushi','02-brutalist-coffee','03-glass-saas','04-retro-arcade','05-3d-product','06-editorial-luxury','07-playful-bento','08-swiss-typographic','09-y2k-chrome','10-luxury-watch','11-cyberpunk-neon','12-clay-kids','13-cosmic-journey','14-memphis-pop','15-japanese-ink','16-art-deco','17-organic-nature','18-synthwave','19-fintech-aurora','20-architecture-blueprint','21-poke-bowl-builder','22-lemon-learning','23-kibori','24-kage','25-dark-souls-card','26-delhi-dusk','27-toastie','28-lucky-clover','29-christmas-gingerbread'];
  var m=location.pathname.match(/designs\/(\d\d)-[^\/]+/),num=m?m[1]:'',idx=num?parseInt(num,10)-1:-1;
  var n=NOTES[num]||['This design','One of my landing-page studies, designed and built by me.'];
  var here=document.currentScript?new URL('.',document.currentScript.src).href:'../_shared/';
  var gallery=new URL('../../index.html',location.href).href;
  function sib(d){var i=idx+d;return(i>=0&&i<FOLDERS.length)?new URL('../'+FOLDERS[i]+'/index.html',location.href).href:null}
  var prev=sib(-1),next=sib(1);
  function esc(t){return String(t).replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})}
  function mount(){
    if(!document.querySelector('link[data-dk]')){var l=document.createElement('link');l.rel='stylesheet';l.setAttribute('data-dk','');l.href='https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fraunces:opsz,wght@9..144,700;9..144,800&display=swap';document.head.appendChild(l)}
    var host=document.createElement('div');host.setAttribute('data-dk-host','');host.style.cssText='position:fixed;left:0;bottom:0;z-index:2147483000;pointer-events:none';
    var r=host.attachShadow({mode:'open'});
    r.innerHTML='<style>'+
     ':host{all:initial}*{box-sizing:border-box;margin:0}'+
     '.wrap{position:fixed;left:14px;bottom:calc(14px + env(safe-area-inset-bottom));display:flex;flex-direction:column;gap:10px;align-items:flex-start;font-family:Fraunces,Georgia,serif}'+
     '.bar{pointer-events:auto;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.94);border-radius:99px;padding:6px 8px 6px 12px;box-shadow:0 8px 24px rgba(20,20,40,.28),0 0 0 1px rgba(0,0,0,.06)}'+
     '.bar a.logo{display:block;line-height:0}.bar img{height:34px;width:auto;display:block}'+
     'button,a.pill{font:800 12px/1 Fraunces,Georgia,serif;letter-spacing:.06em;border:0;cursor:pointer;color:#fff;background:#26323f;padding:10px 14px;border-radius:99px;text-decoration:none;transition:transform .14s cubic-bezier(.23,1,.32,1),background .15s;touch-action:manipulation;white-space:nowrap}'+
     'button:active,a.pill:active{transform:scale(.96)}'+
     '@media (hover:hover) and (pointer:fine){button:hover,a.pill:hover{background:#d62f3f}}'+
     '.card{pointer-events:auto;width:min(360px,calc(100vw - 28px));background:#fbf6e6;color:#2c2820;border:2px solid #cda74e;outline:2px solid #f4e3a8;outline-offset:-9px;border-radius:6px;padding:22px 24px 18px;box-shadow:0 18px 44px rgba(20,20,40,.35);transform:translateY(10px) scale(.97);opacity:0;visibility:hidden;transition:opacity .22s cubic-bezier(.23,1,.32,1),transform .22s cubic-bezier(.23,1,.32,1),visibility .22s;transform-origin:0 100%}'+
     '.card.on{opacity:1;visibility:visible;transform:none}'+
     '.card .k{font:800 11px/1 Fraunces,Georgia,serif;letter-spacing:.18em;text-transform:uppercase;color:#7a6a4a}'+
     '.card h3{font:800 24px/1.1 Fraunces,Georgia,serif;margin:6px 0 10px}'+
     '.card p{font:500 17px/1.5 Georgia,serif;color:#3b3629}'+
     '.card .sig{font:700 28px/1 Caveat,cursive;color:#d62f3f;margin:12px 0 14px;transform:rotate(-2deg)}'+
     '.card .row{display:flex;gap:8px;flex-wrap:wrap}.card .row a.pill{padding:9px 12px;font-size:11px}.card .row a.alt{background:#e9e0c8;color:#26323f}'+
     '@media (prefers-reduced-motion:reduce){.card,button,a.pill{transition:none}}'+
     '@media (max-width:520px){.bar img{height:28px}.card p{font-size:16px}}'+
     '</style>'+
     '<div class="wrap"><div class="card" role="dialog" aria-label="My take on '+esc(n[0])+'" id="card">'+
       '<div class="k">Designer’s note · '+(num?num+' / '+FOLDERS.length:'')+'</div><h3>'+esc(n[0])+'</h3><p>'+esc(n[1])+'</p><div class="sig">— Manisha Baroliya</div>'+
       '<div class="row"><a class="pill" href="'+gallery+'">← Designer’s Kitchen</a>'+(prev?'<a class="pill alt" href="'+prev+'" aria-label="Previous design">‹</a>':'')+(next?'<a class="pill alt" href="'+next+'" aria-label="Next design">Next ›</a>':'')+'</div></div>'+
     '<div class="bar"><a class="logo" href="'+gallery+'" aria-label="Manisha Baroliya – Designer’s Kitchen"><img src="'+here+'logo.webp" alt="Manisha Baroliya"></a><button id="t" aria-expanded="false" aria-controls="card">My take ✎</button></div></div>';
    document.body.appendChild(host);
    var card=r.getElementById('card'),t=r.getElementById('t');
    function set(v){card.classList.toggle('on',v);t.setAttribute('aria-expanded',v);t.textContent=v?'Close ×':'My take ✎'}
    t.addEventListener('click',function(){set(!card.classList.contains('on'))});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  }
  if(document.body)mount();else document.addEventListener('DOMContentLoaded',mount);
})();
