const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
if(menu){
  menu.addEventListener('click',()=>nav.classList.toggle('show'));
}
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',()=>{
    if(nav) nav.classList.remove('show');
  });
});
