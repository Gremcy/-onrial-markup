const pages = [
  'catalog-page',
  'ambassador-page',
  'returns-page',
  'shipping-page',
  'contacts-page',
  'advices-page',
  'advice-page',
  'resources-page',
  'checkout-page',
  'delivery-page',
  'categories-page',
  'registration-page',
  'login-page',
  'profile-info-page',
  'profile-favorite-page',
  'profile-history-page',
  'password-recovery-page',
  'search-result-page',
  'school-page',
  'advicemasters-page',
  'instructors-page',
  'product-page',
];

const headerColor = () => {
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const filterPages = pages.filter((page) => body.classList.contains(page));
  if (filterPages.length > 0) {
    header.classList.add('js__is-white');
  }
};

export default headerColor;
