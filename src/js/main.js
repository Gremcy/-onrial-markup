import easyzoom from 'easyzoom';
import screenHeight from './helpers/screenHeight';
import burgerToggle from './modules/burger';
import headerSticky from './modules/header';
import animation from './modules/animation';
// import scrollTo from './modules/scrollTo';
import footer from './modules/footer';
import topSlider from './modules/topSlider';
import bestsellersSlider from './modules/bestsellersSlider';
import form from './modules/form';
import followSlider from './modules/followSlider';
import catalog from './modules/catalog';
import headerColor from './modules/headerColor';
import 'slick-carousel';

window.addEventListener('load', () => {
      const element = document.querySelector('.follow-slider__slider-container');
      element.style.display = 'block';
});


$(document).ready(() => {
  followSlider();
  screenHeight();
  burgerToggle();
  headerSticky();
  // scrollTo();
  footer();
  topSlider();
  bestsellersSlider();
  form();
  animation();
  catalog();
  headerColor();


  $.fn.modalOpen = function () {
    $('.js-modal').modalCloseAll();
    $('body').addClass('is-hidden');
    $(this).fadeIn(1);
    $(this).addClass('is-open');

    return this;
  };

  $.fn.modalClose = function () {
    $(this).fadeOut(1);
    $(this).removeClass('is-open');
    $('body').removeClass('is-hidden');
    return this;
  };

  $.fn.modalCloseAll = function () {
    $('.js-modal').modalClose();
    return this;
  };

  $(document).on('click', '.js-close-modal', () => {
    $('.js-modal').modalCloseAll();
  });

  $(document).on('click', '.js-modal-link', (e) => {
    const target = $(e.currentTarget).attr('data-target');
    const $modal = $(`.js-modal[data-modal="${target}"]`);

    if ($modal.length) {
      $modal.modalOpen();
    }
  });

  // увеличение количества
  // $('.basket-item-product-quantity-less').on('click', function () {
  //   this.parentElement
  //     .querySelector('.basket-item-product-quantity-input')
  //     .stepDown();
  // });
  // $('.basket-item-product-quantity-more').on('click', function () {
  //   this.parentElement
  //     .querySelector('.basket-item-product-quantity-input')
  //     .stepUp();
  // });

  // выпадашки фильтров
  $(document).on('click', '.categories-filters-item-head', function(){
    $(this).toggleClass('in').next().slideToggle();
    $('.categories-filters-item-drop')
      .not(this)
      .removeClass('in')
      .next()
      .slideUp();
    });

  // попап мобильные фильтры категорий
  $(document).on('click', '.categories-top-right-filter-btn', () => {
    $('.mobile-filter-wrapper').addClass('show');
  });
  $(document).on(
    'click',
    '.mobile-filter-close, .mobile-filter-bottom-apply',
    () => {
      $('.mobile-filter-wrapper').removeClass('show');
    }
  );

  // анимированые плейсхолдеры
  /* eslint-disable */
  $('input').focus(function () {
    $(this).parents('.form-group').addClass('focused');
  });

  $('input').blur(function () {
    var inputValue = $(this).val();
    if (inputValue == '') {
      $(this).removeClass('filled');
      $(this).parents('.form-group').removeClass('focused');
    } else {
      $(this).addClass('filled');
    }
  });
  /* eslint-enable */

  // profile favorite card slider
  $('.profile-favorite-slider').slick({
    slidesToShow: 3,
    arrows: true,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: false,
    prevArrow: $('.profile-favorite-slider-arrows .slick-prev'),
    nextArrow: $('.profile-favorite-slider-arrows .slick-next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // advice for masters slider
  $('.advicemasters-hero-slider').slick({
    slidesToShow: 3,
    arrows: true,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: false,
    prevArrow: $('.advicemasters-hero-slider-arrows .slick-prev'),
    nextArrow: $('.advicemasters-hero-slider-arrows .slick-next'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // favourite item drop
  $('.profile-history-item-detalis-btn').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.profile-history-item-drop')
      .not(this)
      .removeClass('in')
      .next()
      .slideUp();
  });

  // select on map poland
  $('.school-map-region').click(function () {
    $(this).toggleClass('select');
    $('.school-map-region').not(this).removeClass('select');
  });

  // выпадашки регионов
  $('.school-instrucrors-item-region').click(function () {
    $(this).toggleClass('in').next().slideToggle();
  });

  // таби попапа сторінки школа
  $('.tab-individual').on('click', function () {
    $(this).addClass('active');
    $('.tab-school').removeClass('active');
    $('.training-popup-individual-block').addClass('show');
    $('.training-popup-school-block').removeClass('show');
  });
  $('.tab-school').on('click', function () {
    $('.tab-individual').removeClass('active');
    $(this).addClass('active');
    $('.training-popup-school-block').addClass('show');
    $('.training-popup-individual-block').removeClass('show');
  });


  // add favourite product
    // $('.product-right-favourite').click(function () {
    //   $(this).toggleClass('selected');
    // });


  // product about tabs 
  if ($('.tabs__nav-btn').length > 0) {
    const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
    const tabsItems = document.querySelectorAll('.tabs__item');

    tabsBtn.forEach((item) => {
      item.addEventListener('click', () => {
        const currentBtn = item;
        const tabId = currentBtn.getAttribute('data-tab');
        const currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
          // eslint-disable-next-line no-shadow
          tabsBtn.forEach((item) => {
            item.classList.remove('active');
          });

          // eslint-disable-next-line no-shadow
          tabsItems.forEach((item) => {
            item.classList.remove('active');
          });

          currentBtn.classList.add('active');
          currentTab.classList.add('active');
        }
      });
    });

    document.querySelector('.tabs__nav-btn').click();
  }




  // activation zoom plugin
  const $easyzoom = $('.easyzoom').easyZoom();
    
  // window.modal = new Modal();
  // window.modal.init();
});
