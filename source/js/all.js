const header = document.querySelector('[data-header]');
const menuBtn = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu-phone]');
const modalOpenElems = document.querySelectorAll('[data-modal-open]');
const modal = document.querySelector('[data-modal]');
const modalClose = document.querySelector('[data-modal-close]');

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

// modal 視窗
if (modal) {
  const showModal = (e) => {
    e.preventDefault();
    modal.classList.add('open');
  }
  const closeModal = (e) => {
    e.preventDefault();
    modal.classList.remove('open');
  }

  modalOpenElems.forEach(modal => {
    modal.addEventListener('click', showModal);
  })
  modalClose.addEventListener('click', closeModal);
}

// 輪播效果
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  speed: 400,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});