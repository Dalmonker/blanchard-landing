import Swiper from "../../node_modules/swiper/swiper-bundle";

(() => {
  const swiper = new Swiper('.js-back-slider', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    }
  });
  
})();
