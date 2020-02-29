const header = document.querySelector(".header");
const main = document.querySelector(".main");

function ruVersion () {
  ruHeader ();
  ruBeginning ();
}

function ruHeader () {
  const headerNav = header.querySelector(".nav");
  const headerNavSchema = headerNav.querySelector(".nav__list-item_schema");
  const headerNavDetailed = headerNav.querySelector(".nav__list-item_detailed");
  const headerNavContacts = headerNav.querySelector(".nav__list-item_contacts");
  const headerNavCreate = headerNav.querySelector(".nav__list-item_create");
  const headerNavPortfolio = headerNav.querySelector(".nav__list-item_portfolio");

  const langplace = header.querySelector(".lang-place");
  const langplaceSelected = langplace.querySelector(".lang-place__selected");

  headerNavSchema.textContent = "Схема работы";
  headerNavDetailed.textContent = "Подробнее";
  headerNavContacts.textContent = "Контакты";
  headerNavCreate.textContent = "Создать видео";
  headerNavPortfolio.textContent = "Портфолио";
  langplaceSelected.innerHTML = `RU&nbsp;
  <picture>
    <img
      src="../img/arrow-down.png" alt="arrow-down"
      srcset="../img/arrow-down@2x.png 2x, ../img/arrow-down.png 1x"
      class="lang-place__arow">
  </picture>
  `;
}

function ruBeginning () {
  const beginningHeader = main.querySelector(".beginning__caption");
  beginningHeader.textContent = "ОТКРОЙ СВОЮ ИСТОРИЮ";
}

export { ruVersion };
