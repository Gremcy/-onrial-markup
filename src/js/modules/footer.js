const footer = () => {
  const footerCopy = document.querySelector('.js__footer-copy');
  if (footerCopy) {
    const fullYear = new Date().getUTCFullYear();
    footerCopy.textContent = `© ${fullYear} Усі прaва захищені`;
  }
};

export default footer;
