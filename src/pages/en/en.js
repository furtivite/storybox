import './en.css';
/* меню смены языка */
import {
  langchoiser
} from '../../modules/langchoiser';
/* свайпер */
import {
  slider
} from '../../modules/slider';

/* функция для проверки листенеров */
function click () {
  console.log('click');
}

langchoiser ();
slider ();
