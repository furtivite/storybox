const header = document.querySelector(".header");
const langplace = header.querySelector(".lang-place");
const langMenuList = document.createElement("ul");
const langMenuListItem = document.createElement("li");
const langMenuArrow = document.createElement("img");
const langRu = langplace.querySelector(".lang-place__list-item_ru");
const langEng = langplace.querySelector(".lang-place__list-item_en");

function langMenuRu () {
  langplace.innerHTML = "";
  langplace.appendChild(langMenuList);
  langMenuList.classList.add('lang-place__list');
  langMenuList.appendChild(langMenuListItem);
  langMenuListItem.classList.add('lang-place__list-item');
  langMenuListItem.classList.add('lang-place__list-item_ru');
  langRu.textContent = "RU";
  langRu.appendChild(langMenuArrow);
  langMenuArrow.src = '../img/img/arrow-down.png';
  langMenuArrow.classList.add('lang-place__arow');
  langMenuArrow.classList.add('lang-place__arow_rotate');
  langMenuList.appendChild(langMenuListItem);
  langMenuListItem.classList.add('lang-place__list-item');
  langMenuListItem.classList.add('lang-place__list-item_en');
  langRu.textContent = "EN";
}

function langMenuEn () {
  langplace.innerHTML = "";
  langplace.appendChild(langMenuList);
  langMenuList.appendChild(langMenuListItem);
  langMenuListItem.classList.add('lang-place__list-item');
  langMenuListItem.classList.add('lang-place__list-item_en');
  langRu.textContent = "EN";
  langRu.appendChild(langMenuArrow);
  langMenuArrow.src = '../img/img/arrow-down.png';
  langMenuArrow.classList.add('lang-place__arow');
  langMenuArrow.classList.add('lang-place__arow_rotate');
  langMenuList.classList.add('lang-place__list');
  langMenuList.appendChild(langMenuListItem);
  langMenuListItem.classList.add('lang-place__list-item');
  langMenuListItem.classList.add('lang-place__list-item_ru');
  langRu.textContent = "RU";
}
