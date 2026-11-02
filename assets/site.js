(function(){
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav-links');
  if(toggle&&nav){
    function setOpen(open){nav.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Luk menu':'Åbn menu');}
    toggle.addEventListener('click',()=>setOpen(!nav.classList.contains('is-open')));
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false)});
    document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!toggle.contains(e.target))setOpen(false)});
  }
  const back=document.querySelector('.back-to-top');
  if(back){const show=()=>back.classList.toggle('is-visible',window.scrollY>600);window.addEventListener('scroll',show,{passive:true});show();back.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));}
  const year=document.querySelector('#year'); if(year){year.textContent=String(new Date().getFullYear());}
  const filters=[...document.querySelectorAll('[data-filter]')];
  const cards=[...document.querySelectorAll('[data-category]')];
  if(filters.length&&cards.length){filters.forEach(btn=>btn.addEventListener('click',()=>{const selected=btn.dataset.filter;filters.forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));cards.forEach(c=>{c.hidden=selected!=='alle'&&!c.dataset.category.split(' ').includes(selected)});}));}
})();
