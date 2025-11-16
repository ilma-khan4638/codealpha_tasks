
// Simple JS to power nav toggle and lightbox
document.addEventListener('DOMContentLoaded', ()=>{
  // Years in footers
  const y = new Date().getFullYear();
  ['year','year2','year3','year4','year5'].forEach(id=>{const el=document.getElementById(id); if(el) el.textContent=y});

  // Nav toggle for small screens
  document.querySelectorAll('.nav-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const nav = document.querySelector('.main-nav');
      if(nav.style.display==='flex') nav.style.display='none'; else nav.style.display='flex';
    })
  });

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox?.querySelector('img');
  const lbCap = lightbox?.querySelector('.lb-caption');
  document.querySelectorAll('.masonry img').forEach(img=>{
    img.style.cursor='zoom-in';
    img.addEventListener('click', ()=>{
      lbImg.src = img.src.replace(/\?w=\d+&q=\d+/,''); // prefer larger
      lbImg.alt = img.alt || '';
      lbCap.textContent = img.parentElement.querySelector('figcaption')?.textContent || '';
      lightbox.classList.add('show');
      lightbox.setAttribute('aria-hidden','false');
    })
  });
  document.querySelectorAll('.close-lb, .lightbox').forEach(el=> el.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget || e.currentTarget.classList.contains('close-lb')){
      lightbox.classList.remove('show');
      lightbox.setAttribute('aria-hidden','true');
      lbImg.src='';
    }
  }));

  lightbox?.querySelector('img')?.addEventListener('click', (e)=>e.stopPropagation());

  // contact form demo
  const form = document.getElementById('contact-form');
  if(form) form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Thanks! This demo form does not submit — connect it to a backend or service.');
    form.reset();
  });
});

