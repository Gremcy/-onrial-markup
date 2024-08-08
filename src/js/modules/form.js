export default function form() {
  const textarea = document.querySelector('.contact-form__textarea');

  if (textarea) {
    textarea.addEventListener('keyup', (e) => {
      textarea.style.height = '25px';
      const scHeight = e.target.scrollHeight;
      textarea.style.height = `${scHeight}px`;
    });
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        textarea.style.height = '25px';
        const scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
      }
    });
  }
}
