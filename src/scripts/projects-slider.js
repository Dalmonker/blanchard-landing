import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const projectsSlider = new Swiper(".js-projects-slider", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    grid: {
        rows: 1,
        fill: "row"
    },

    pagination: {
        el: ".js-projects-pagination",
    },

    navigation: {
        nextEl: ".js-projects-next",
        prevEl: ".js-projects-prev",
        disabledClass: "nav-btn--disabled"
    },

    breakpoints : {

        441: {
            slidesPerView: 2,
            spaceBetween: 34
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 50
        },

        1025: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }

})