function russianMenu () {
  const header = document.querySelector('.header');
  const lang = header.querySelector('.lang-place');
  lang.addEventListener("click", openMenuRU);
}

function openMenuRU () {
  const header = document.querySelector('.header');
  const lang = header.querySelector('.lang-place');

  const createUl = document.createElement("ul");
  const createLi = document.createElement("li");
  const createLi2 = document.createElement("li");
  const createA = document.createElement("a");
  const createA2 = document.createElement("a");
  const createImg = document.createElement("img");

  lang.innerHTML = "";

  createUl.classList.add('lang-place__list');
  lang.appendChild(createUl);

  const langPlaceList = header.querySelector('.lang-place__list');

  /* ссылка с активным языком */

  createA.classList.add('link');
  createA.classList.add('link-active');
  createA.href = "#";
  langPlaceList.appendChild(createA);

  /* список с активным языком */

  createLi.classList.add('lang-place__list-item');
  createLi.classList.add('lang-place__list-item_active');
  createLi.textContent = "RU";
  createA.appendChild(createLi);

  /* стрелка на первом пункте */
  createImg.classList.add('lang-place__arow');
  createImg.classList.add('lang-place__arow_rotate');
  createImg.src = "../img/arrow-down.png";
  createLi.appendChild(createImg);

  /* ссылка с неактивным языком */

  createA2.classList.add('link');
  createA2.classList.add('link-non-active');
  createA2.href="./en.html";
  langPlaceList.appendChild(createA2);

  /* список с неактивным языком */

  createLi2.classList.add('lang-place__list-item');
  createLi2.classList.add('lang-place__list-item_non-active');
  createLi2.textContent = "EN";
  createA2.appendChild(createLi2);
}

export { russianMenu };
