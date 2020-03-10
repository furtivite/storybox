import './en.css';

/* языковое меню */
import {
  englishMenu
} from '../../modules/englishMenu';

/* свайпер */
import {
  slider
} from '../../modules/slider';

/* функция для проверки листенеров */
function click () {
  console.log('click');
}

/* меню смены языка */
function langMenu () {
  const header = document.querySelector('.header');
  header.addEventListener("click", englishMenu);
}

langMenu ();
slider ();
