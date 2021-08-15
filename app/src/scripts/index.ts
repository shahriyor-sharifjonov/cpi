// Header Menu
const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__list");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};


const btn = document.querySelector('.calendar__month-btn');
const ac = document.querySelectorAll('.calendar__vis-p');
const nextBtn = document.querySelector('.calendar__month-next');
const prevBtn = document.querySelector('.calendar__month-prev');
function openMonth(el = btn){
  el.classList.toggle('open');
}
function addActive(el){
  for(let i = 0; i < ac.length; i++){
    ac[i].classList.remove('active');
  }
  el.classList.add('active');
  btn.innerHTML = el.innerHTML;
  setTimeout(() => {
    openMonth()
  }, 10);
}
// function next(el){
//   for(let i = 0; i < ac.length; i++){
//     if(ac[i].classList.contains('active')){
//       console.log('ac');
//       ac[i+1].classList.add('active');
//       btn.innerHTML = ac[i+1].innerHTML;
//       ac[i].classList.remove('active');
//     }
//   }
// }
// function prev(el){
//   for(let i = 0; i < ac.length; i++){
//     if(ac[i].classList.contains('active')){
//       console.log('ac');
//       ac[i-1].classList.add('active');
//       btn.innerHTML = ac[i-1].innerHTML;
//       ac[i].classList.remove('active'); 
//     }
//   }
// }