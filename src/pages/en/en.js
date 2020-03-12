/* все пояснения даны в версии файла для русского языка */

import './en.css';
import {
  englishMenu
} from '../../modules/englishMenu';
import {
  slider
} from '../../modules/slider';
import {
  swiperArrows
} from '../../modules/swiperArrows';
import {
  cookies
} from '../../modules/cookies';

function langMenu () {
  const header = document.querySelector('.header');
  header.addEventListener("click", englishMenu);
}

langMenu ();
slider ();
swiperArrows ();
cookies ();
