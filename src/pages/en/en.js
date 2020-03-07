import './en.css';
/* выбор меню */
import {
  langMenuEN
} from '../../modules/langmenu';
/* свайпер */
import {
  slider
} from '../../modules/slider';

/* меню смены языка */
function createLangMenu () {
  const langEN = document.querySelector('.lang-place__selected_en');
  langEN.addEventListener("click", langMenuEN);
}

/* функция для проверки листенеров */
function click () {
  console.log('click');
}

createLangMenu ();
slider ();
