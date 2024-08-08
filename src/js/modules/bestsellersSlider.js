/* eslint-disable no-unused-vars */
import { Swiper, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

export default function projectsSlider() {
  Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

  let swiper = Swiper;
  let init = false;
  const slider = document.querySelector('.js_bestsellers-slider');

  /* Which media query
   ************************************************************* */
  function swiperMode() {
    if (!slider) return;
    // const mobile = window.matchMedia('(min-width: 0px) and (max-width: 665px)');
    // const tablet = window.matchMedia(
    //   '(min-width: 666px) and (max-width: 1023px)'
    // );
    // const desktop = window.matchMedia('(min-width: 1200px)');

    // const notMobile = window.matchMedia('(min-width: 666px)');

    // Enable (for mobile)
    // if (notMobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper('.js_bestsellers-slider', {
        slidesPerView: 2,
        spaceBetween: 10,

        // direction: 'horizontal',
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'bullets',
        // },
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   draggable: true,
        // },
        // spaceBetween: 150,

        // calculateHeight: true,
        autoHeight: true,

        // loop: true,
        // grabCursor: true,
        // keyboard: {
        //   enabled: true,
        //   onlyInViewport: true,
        // },
        navigation: {
          nextEl: '.swiper-about-button-next',
          prevEl: '.swiper-about-button-prev',
        },

        breakpoints: {
          666: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          //   768: {
          //     slidesPerView: 3,
          //     spaceBetween: 25,
          //   },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            // centeredSlides: true,
            // loop: true,
            // navigation: {
            //   nextEl: '.swiper-about-button-next',
            //   prevEl: '.swiper-about-button-prev',
            // },
          },
        },
      });
    }
    // }

    // Disable (for desktop)
    // else if (mobile.matches && swiper && typeof swiper.destroy === 'function') {
    //   swiper.destroy();
    //   init = false;
    // }
  }

  /* On Load
   ************************************************************* */

  window.addEventListener('load', () => {
    swiperMode();
  });

  /* On Resize
   ************************************************************* */
  window.addEventListener('resize', () => {
    // swiper.destroy();
    init = false;
    swiperMode();
  });
}
