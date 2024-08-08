export default function screenHeight () {
  function fixHeight () {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  fixHeight();
  window.addEventListener('resize', fixHeight);
}
