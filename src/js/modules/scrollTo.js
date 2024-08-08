// /* eslint-disable no-use-before-define */
// /* eslint-disable no-inner-declarations */
// /* eslint-disable no-restricted-globals */

// import { DOM, CLASSES } from '../_consts';
// import Utility from '../helpers/Utility';

// export default function scrollTo() {
//   const header = document.querySelector('.js-header');
//   const menu = document.querySelector('.js-mob-menu');
//   const { isOpen, isHeaderOpen } = CLASSES;
//   const { $burger } = DOM;

//   const mobileMenu = document.querySelector('.menu__list');
//   mobileMenu.addEventListener('click', onMenuLinkClick);

//   function onMenuLinkClick(e) {
//     e.preventDefault();
//     const menuLink = e.target.classList.contains('menu__link')
//       ? e.target
//       : e.target.parentNode;
//     if (
//       menuLink.dataset.goto &&
//       document.querySelector(menuLink.dataset.goto)
//     ) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

//       $burger.toggleClass(isOpen);
//       header.classList.toggle(isOpen);
//       menu.classList.toggle(isOpen);
//       Utility.removeBodyHidden();
//       DOM.body.classList.remove(isHeaderOpen);

//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: 'smooth',
//       });
//     }
//   }

//   const topButton = document.querySelector('.top__link');
//   topButton.addEventListener('click', (e) => {
//     const nextSection = document.querySelector('.what');
//     const nextSectionValue =
//       nextSection.getBoundingClientRect().top + scrollY + 1;

//     e.preventDefault();
//     window.scrollTo({
//       top: nextSectionValue,
//       behavior: 'smooth',
//     });
//   });
// }
