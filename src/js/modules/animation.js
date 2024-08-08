import { gsap } from 'gsap';

// /* eslint-disable no-param-reassign */
// /* eslint-disable no-plusplus */
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.defaults({
//   markers: false,
// });

// // ScrollTrigger.refresh();
// // const tl = gsap.timeline();
// // tl.from('.tree', { yPercent: 100 });

// export default function animation() {
//   // section.top - animation tree start - - - - - - - - - - - - - - - - - -

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.top',
//       start: 'top top',
//       end: '+=500',
//       pin: true,
//       scrub: 1,
//     },
//   });

//   tl.fromTo('.top__tree-image', { width: 0 }, { width: '100%' });

//   ScrollTrigger.refresh();

//   // lighting - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//   const light = document.querySelector('.top__lantern');
//   const topWrapper = document.querySelector('.top__wrapper');
//   const topImages = document.querySelector('.top__images');

//   const activateAnimationOnDesktop = () => {
//     topWrapper.style.zIndex = '-1';
//     light.style.position = 'absolute';
//     topImages.style.zIndex = '5';
//     const windowInnerWidth = document.documentElement.clientWidth;
//     const windowInnerHeight = document.documentElement.clientHeight;
//     light.style.background = `radial-gradient(circle at ${
//       windowInnerWidth / 2
//     }px ${windowInnerHeight / 2}px, transparent, #000 40%)`;

//     [...topImages.children].forEach((item) => {
//       item.style.fill = 'rgba(0, 0, 0, 0.5)';
//       item.addEventListener('mouseover', () => {
//         item.style.fill = '#BF252E';
//       });
//       item.addEventListener('mouseout', () => {
//         item.style.fill = 'rgba(0, 0, 0, 0.5)';
//       });
//     });
//   };

//   if (
//     !navigator.userAgent.match('iPhone') &&
//     !navigator.userAgent.match('Android') &&
//     !navigator.userAgent.match('iPad') &&
//     !navigator.userAgent.match('RIM')
//   ) {
//     activateAnimationOnDesktop();
//     document.addEventListener('mousemove', (e) => {
//       const x = e.pageX;
//       const y = e.pageY;
//       // topWrapper.style.zIndex = '-1';
//       // light.style.position = 'absolute';
//       // light.style.zIndex = '0';
//       light.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent, #000 40%)`;
//     });
//   }

//   // section move on scroll - - - - - - - - - - - - - - - - - - - - - - - - -
//   const mm = gsap.matchMedia();

//   mm.add('(min-width: 768px)', () => {
//     const tlWhat = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.what',
//         start: 'top bottom',
//       },
//     });

//     tlWhat.fromTo(
//       '.what > .container',
//       { translateY: 300, opacity: 0, duration: 2 },
//       { translateY: 0, opacity: 1, duration: 2 }
//     );

//     const tlAbout = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.about',
//         start: 'top bottom',
//       },
//     });

//     tlAbout.fromTo(
//       '.about > .container',
//       { translateY: 300, opacity: 0, duration: 2 },
//       { translateY: 0, opacity: 1, duration: 2 }
//     );

//     const tlDevelopments = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.developments',
//         start: 'top bottom',
//       },
//     });

//     tlDevelopments.fromTo(
//       '.developments > .container',
//       { translateY: 300, opacity: 0, duration: 2 },
//       { translateY: 0, opacity: 1, duration: 2 }
//     );

//     const tlDialogs = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.dialogs',
//         start: 'top bottom',
//       },
//     });

//     tlDialogs.fromTo(
//       '.dialogs > .container',
//       { translateY: 300, opacity: 0, duration: 2 },
//       { translateY: 0, opacity: 1, duration: 2 }
//     );

//     const tlBrandbooks = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.brandbook',
//         start: 'top bottom',
//       },
//     });

//     tlBrandbooks.fromTo(
//       '.brandbook > .container',
//       { translateY: 300, opacity: 0, duration: 2 },
//       { translateY: 0, opacity: 1, duration: 2 }
//     );
//   });
// }

// const { outerWidth } = window;
// window.addEventListener('resize', () => {
//   if (outerWidth !== window.outerWidth) {
//     window.location.reload(false);
//   }
// });

// running string
export default function animation() {
  setTimeout(() => {
    gsap.set('.separator', { xPercent: 0, yPercent: 0 });

    const itemWidth = document.querySelector('.separator__item').clientWidth;
    const itemsAmount = document.querySelectorAll('.separator__item').length;
    const totalWidth = itemWidth * itemsAmount;
    const separator = document.querySelectorAll('.separator__item');
    const dirFromRight = `-=${totalWidth}`;

    const mod = gsap.utils.wrap(0, totalWidth);

    function marquee(which, time, direction) {
      gsap.set(which, {
        x(i) {
          return i * itemWidth;
        },
      });
      const action = gsap.timeline().to(which, {
        x: direction,
        modifiers: {
          x: (x) => `${mod(parseFloat(x))}px`,
        },
        duration: time,
        ease: 'none',
        repeat: -1,
      });
      return action;
    }

    gsap.timeline().add(marquee(separator, 40, dirFromRight), 0);
  }, 1000);
}
