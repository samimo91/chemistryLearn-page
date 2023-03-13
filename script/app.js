
// ========== Toggle Icon =============

const navToggleIcon = document.querySelector(".nav__toggle-icon");
const navMenu = document.querySelector(".menu__items");

navToggleIcon.addEventListener("click", function () {
  this.classList.toggle("nav__toggle-icon--open");
  navMenu.classList.toggle("menu__items--open");
});
// =====================================



//=========== Swiper ==========

const swiper = new Swiper('.swiper', {
  speed: 400,
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false
  },
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
  }

});
// =============================