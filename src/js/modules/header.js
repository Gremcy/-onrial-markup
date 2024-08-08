import { CLASSES } from '../_consts';

const { isSticky } = CLASSES;

const headerSticky = () => {
  const $header = $('.js-header');

  $(window).on('scroll', (e) => {
    const scroll = $(e.currentTarget).scrollTop();

    // if (scroll > 20 && window.matchMedia('(max-width: 767px)').matches) {
    if (scroll > 20) {
      $header.addClass(isSticky);
    } else {
      $header.removeClass(isSticky);
    }
  });
};

export default headerSticky;
