import { DOM, CLASSES } from '../_consts';

export default class Utility {
  static addBodyHidden() {
    const isMobile = window.matchMedia('(max-width: 599px)').matches;
    const { $body } = DOM;
    if (!isMobile && $body.hasClass('js-prevent-scroll-move')) return;
    const html = document.querySelector('html');
    sessionStorage.scrollTop = DOM.$window.scrollTop();
    $body.addClass(CLASSES.modalOpened);
    html.style.overflow = 'hidden';
  }

  static removeBodyHidden() {
    const isMobile = window.matchMedia('(max-width: 599px)').matches;
    const { $body } = DOM;
    if (!isMobile && $body.hasClass('js-prevent-scroll-move')) return;
    const html = document.querySelector('html');
    $body.removeClass(CLASSES.modalOpened);
    html.style.overflow = 'initial';
  }

  static getScrollbarWidth() {
    // check if webkit-scrollbar supported
    const isMobile = window.matchMedia('(max-width: 599px)').matches;
    const isWebkit = navigator.userAgent.indexOf('AppleWebKit') !== -1;
    const isEdge = /Edge/.test(navigator.userAgent);
    const customScrollSupported = isWebkit && !isEdge && !isMobile;

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = customScrollSupported
      ? 6
      : outer.offsetWidth - inner.offsetWidth;

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);
    return scrollbarWidth;
  }

  static getElemHeight(elem) {
    return $(elem).outerHeight();
  }
}
