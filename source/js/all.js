const header = document.querySelector('[data-header]');
const menuBtn = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu-phone]');

//  漢堡選單切換
menuBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.innerText === 'menu') {
    e.target.innerText = 'close';
  } else {
    e.target.innerText = 'menu';
  }
  menu.classList.toggle('showMenu');
  document.querySelector('body').classList.toggle('bodyFixed');
})

// // 卷軸滑動時，header變成半透明
// document.addEventListener('scroll', function() {
//   let scrollPosition = window.scrollY;
//   if (scrollPosition > 0) {
//     header.classList.add('opacity-75');
//   } else {
//     header.classList.remove('opacity-75');
//   }
// })