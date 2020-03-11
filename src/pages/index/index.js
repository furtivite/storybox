import './index.css';

/* языковое меню */
import {
  russianMenu
} from '../../modules/russianMenu';

/* свайпер */
import {
  slider
} from '../../modules/slider';

/* уведомление о cookies */
import {
  cookies
} from '../../modules/cookies';

/* функция для проверки листенеров */
function click () {
  console.log('click');
}

/* меню смены языка */
function langMenu () {
  const header = document.querySelector('.header');
  header.addEventListener("click", russianMenu);
}

langMenu ();
slider ();
cookies ();