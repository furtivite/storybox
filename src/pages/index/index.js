import './index.css';

/* выбор меню */
import {
  langMenuRU
} from '../../modules/langmenu';
/* свайпер */
import {
  slider
} from '../../modules/slider';

/* меню смены языка */
function createLangMenu () {
  const langRU = document.querySelector('.lang-place__selected_ru');
  langRU.addEventListener("click", langMenuRU);
}

/* функция для проверки листенеров */
function click () {
  console.log('click');
}

createLangMenu ();
slider ();
