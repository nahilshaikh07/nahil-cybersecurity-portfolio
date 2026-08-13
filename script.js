const menu=document.querySelector('.menu'),nav=document.querySelector('#navLinks'),topBtn=document.querySelector('.top');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
window.addEventListener('scroll',()=>{topBtn.classList.toggle('show',scrollY>500)});
topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
 const id=a.getAttribute('href'); if(id.length>1){const el=document.querySelector(id); if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}}
}));
