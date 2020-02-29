/* английская версия */
import {
  engVersion
} from './engversion';

/* русская версия */
import {
  ruVersion
} from './ruversion';


const header = document.querySelector(".header");

function langchoiser () {
  const langplace = header.querySelector(".lang-place");
  const langplaceSelected = langplace.querySelector(".lang-place__selected");
  const langplaceList = langplace.querySelector(".lang-place__list");
  const langRu = langplace.querySelector(".lang-place__list-item_ru");
  const langEng = langplace.querySelector(".lang-place__list-item_en");

  langplaceSelected.addEventListener("click", function () {
    langplaceSelected.classList.toggle('lang-place_hidden');
    langplaceList.classList.toggle('lang-place_hidden');
  });

  langRu.addEventListener("click", function () {
    langplaceList.classList.toggle('lang-place_hidden');
    langplaceSelected.classList.toggle('lang-place_hidden');
    ruVersion ();
  });

  langEng.addEventListener("click", function () {
    langplaceList.classList.toggle('lang-place_hidden');
    langplaceSelected.classList.toggle('lang-place_hidden');
    engVersion ();
  });
}

export { langchoiser };
