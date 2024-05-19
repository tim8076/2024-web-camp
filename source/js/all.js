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
    el: '.my-custom-pagination',
    clickable: true,
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

// aos 動畫
AOS.init();

AOS.init({
  // Global settings:
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// 部落格文章篩選功能
const blogMenu = document.querySelector('[data-blog-menu]');
const articleContainer = document.querySelector('[data-article-container]');
const articles = [...document.querySelectorAll('[data-article-type]')];

const filterArticles = (type) => {
  let filteredArticles = [];
  if (type === 'all') {
    filteredArticles = [...articles];
  } else {
    filteredArticles = articles.filter(article => article.dataset.articleType === type);
  }
  articleContainer.innerHTML = '';
  filteredArticles.forEach(dom => articleContainer.appendChild(dom));
}

if (blogMenu) {
  blogMenu.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.nodeName === 'A') {
      const type = e.target.dataset.menuType;
      filterArticles(type);
      const links = blogMenu.querySelectorAll('[data-menu-type]');
      links.forEach(link => link.classList.remove('active'));
      e.target.classList.add('active');
    }
  })
}
