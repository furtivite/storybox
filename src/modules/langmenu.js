function langBtnRu () {
  const header = document.querySelector('.header');
  const langMenuBtn = header.querySelector('.lang-place');
  const createImg = document.createElement("img");

  langMenuBtn.innerHTML = "RU";

  createImg.classList.add('lang-place__arow');
  createImg.src = "../img/arrow-down.png";
  langMenuBtn.appendChild(createImg);
  langMenuBtn.addEventListener("click", langMenuRU);
}

function langBtnEn () {
  const header = document.querySelector('.header');
  const langMenuBtn = header.querySelector('.lang-place');
  const createImg = document.createElement("img");

  langMenuBtn.innerHTML = "EN";

  createImg.classList.add('lang-place__arow');
  createImg.src = "../img/arrow-down.png";
  langMenuBtn.appendChild(createImg);
  langMenuBtn.addEventListener("click", langMenuEN);
}

function langMenuRU () {
  const header = document.querySelector('.header');
  const langMenuBtn = header.querySelector('.lang-place');
  const createUl = document.createElement("ul");
  const createLi = document.createElement("li");
  const createA = document.createElement("a");
  const createImg = document.createElement("img");

  langMenuBtn.innerHTML = "";

  createUl.classList.add('lang-place__list');
  langMenuBtn.appendChild(createUl);
  const langList = langMenuBtn.querySelector ('.lang-place__list');

  createLi.classList.add('lang-place__list-item');
  createLi.classList.add('lang-place__list-item_active');
  createLi.textContent = "RU";
  langList.appendChild(createLi);
  const langListItemActive = langMenuBtn.querySelector ('.lang-place__list-item_active');

  createImg.classList.add('lang-place__arow');
  createImg.classList.add('lang-place__arow_rotate');
  createImg.src = "../img/arrow-down.png";
  langListItemActive.appendChild(createImg);

  createA.classList.add('link');
  createA.classList.add('link_lang-na');
  createA.href = "./en.html";
  langList.appendChild(createA);
  const linkToAnotherLang = langMenuBtn.querySelector ('.link_lang-na');

  /*
    проверить проблему, почему пункт добавляется не внутрь ссылки, а вместо существующего пункта
  */

  createLi.classList.add('lang-place__list-item');
  createLi.classList.add('lang-place__list-item_non-active');
  createLi.textContent = "EN";
  linkToAnotherLang.appendChild(createLi);

  /* листенер закрытия меню */
  langListItemActive.addEventListener("click", langBtnRu);
}

function langMenuEN () {
  const header = document.querySelector('.header');
  const langMenuBtn = header.querySelector('.lang-place');
  const createUl = document.createElement("ul");
  const createLi = document.createElement("li");
  const createA = document.createElement("a");
  const createImg = document.createElement("img");

  langMenuBtn.innerHTML = "";

  createUl.classList.add('lang-place__list');
  langMenuBtn.appendChild(createUl);
  const langList = langMenuBtn.querySelector ('.lang-place__list');

  createLi.classList.add('lang-place__list-item');
  createLi.classList.add('lang-place__list-item_active');
  createLi.textContent = "EN";
  langList.appendChild(createLi);
  const langListItemActive = langMenuBtn.querySelector ('.lang-place__list-item_active');

  createImg.classList.add('lang-place__arow');
  createImg.classList.add('lang-place__arow_rotate');
  createImg.src = "../img/arrow-down.png";
  langListItemActive.appendChild(createImg);

  createA.classList.add('link');
  createA.classList.add('link_lang-na');
  createA.href = "./index.html";
  langList.appendChild(createA);
  const linkToAnotherLang = langMenuBtn.querySelector ('.link_lang-na');

  /*
    проверить проблему, почему пункт добавляется не внутрь ссылки, а вместо существующего пункта
  */

  createLi.classList.add('lang-place__list-item');
  createLi.classList.add('lang-place__list-item_non-active');
  createLi.textContent = "RU";
  linkToAnotherLang.appendChild(createLi);

  /* листенер закрытия меню */
  langListItemActive.addEventListener("click", langBtnEn);
}

export {
  langMenuRU,
  langMenuEN
};
