import Choices from "choices.js";
import Swiper from "../../node_modules/swiper/swiper-bundle";

(() => {

    const galleryChoicesSelect = document.querySelector('.js-gallery-choices');
    const galleryChoices = new Choices(galleryChoicesSelect, {
      shouldSort: false,
      searchEnabled: false,
      itemSelectText: '',
      position: 'bottom'

    });

    let gallerySlider = new Swiper(".js-gallery-slider", {
        slidesPerView: 1,
        grid: {
          rows: 1,
          fill: "row"
        },
        spaceBetween: 20,
        pagination: {
          el: ".js-gallery-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".js-gallery-next",
          prevEl: ".js-gallery-prev",
          disabledClass: "nav-btn--disabled"
        },
      
        breakpoints: {
          421: {
            slidesPerView: 2,
            grid: {
              rows: 2
            },
            spaceBetween: 30
          },
      
          1281: {
            slidesPerView: 3,
            grid: {
              rows: 2
            },
            spaceBetween: 50
          }
        },
        
        a11y: false,
        keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо
        
        // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми 
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: 'slide-visible',
        
        on: {
          init: function () {
            this.slides.forEach(slide => {
              if (!slide.classList.contains('slide-visible')) {
                slide.tabIndex = '-1';
              } else {
                slide.tabIndex = '';
              }
            });
          },
          slideChange: function () {
            this.slides.forEach(slide => {
              if (!slide.classList.contains('slide-visible')) {
                slide.tabIndex = '-1';
              } else {
                slide.tabIndex = '';
              }
            });
          }
        }
      }); 
})();