import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.what-can-sell__online-shop', {
  modules: [Navigation, Pagination],
    autoHeight: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 20,
    mousewheel: true, 

    breakpoints:{ 
        559.98: { 
          slidesPerView: 1, 
        }, 
        1023.98: { 
          slidesPerView: 1, 
        }, 
        1200: { 
          slidesPerView: 2, 
        }, 
      },
    navigation: { 
        prevEl: '.slider__prev', 
        nextEl: '.slider__next', 
    }
});

export default swiper 