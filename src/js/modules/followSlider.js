/* eslint-disable no-unused-vars */
import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper';

export default function projectsSlider() {
  Swiper.use([Navigation, Pagination, Scrollbar]);

  let swiper = Swiper;
  let init = false;
  const slider = document.querySelector('.js_follow-slider');

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
      swiper = new Swiper('.js_follow-slider', {
        slidesPerView: 3.3,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        speed: 800,
        autoHeight: true,

        breakpoints: {
          666: {
            slidesPerView: 4.2,
          },
          1200: {
            slidesPerView: 5.5,
          },
          1920: {
            slidesPerView: 7.2,
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

  // window.addEventListener('load', () => {
   
  // });
 swiperMode();
  /* On Resize
   ************************************************************* */
  window.addEventListener('resize', () => {
    // swiper.destroy();
    init = false;
    swiperMode();
  });
}
