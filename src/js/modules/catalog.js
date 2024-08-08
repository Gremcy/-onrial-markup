export default function filterBase() {
  const filters = document.querySelectorAll('.catalog__item');
  if (filters) {
    filters.forEach((item) => {
      item.addEventListener('click', () => {
        filters.forEach((filter) => {
          if (filter.classList.contains('js__active')) {
            filter.classList.remove('js__active');
          }
          item.classList.add('js__active');
        });
      });
    });
  }
}
