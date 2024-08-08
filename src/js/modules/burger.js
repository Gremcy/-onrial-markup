import { DOM, CLASSES} from '../_consts';
import Utility from '../helpers/Utility';

export default function burgerToggle() {
  const header = document.querySelector('.js-header');
  const menu = document.querySelector('.js-mob-menu');
  const { isOpen, isHeaderOpen } = CLASSES;
  const { $burger, $window } = DOM;

  $burger.on('click', () => {
    $burger.toggleClass(isOpen);
    header.classList.toggle(isOpen);
    menu.classList.toggle(isOpen);

    if (DOM.$body.hasClass(isHeaderOpen)) {
      Utility.removeBodyHidden();
      DOM.body.classList.remove(isHeaderOpen);
    } else {
      Utility.addBodyHidden();
      DOM.body.classList.add(isHeaderOpen);
    }
  });

  $window.on('resize', () => {
    if (window.matchMedia('(min-width: 1024px)').matches && menu) {
      menu.classList.remove(isOpen);
    }
  })


}
