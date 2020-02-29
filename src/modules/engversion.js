const header = document.querySelector(".header");
const main = document.querySelector(".main");

function engVersion () {
  engHeader ();
  engBeginning ();
}

function engHeader () {
  const headerNav = header.querySelector(".nav");
  const headerNavSchema = headerNav.querySelector(".nav__list-item_schema");
  const headerNavDetailed = headerNav.querySelector(".nav__list-item_detailed");
  const headerNavContacts = headerNav.querySelector(".nav__list-item_contacts");
  const headerNavCreate = headerNav.querySelector(".nav__list-item_create");
  const headerNavPortfolio = headerNav.querySelector(".nav__list-item_portfolio");

  const langplace = header.querySelector(".lang-place");
  const langplaceSelected = langplace.querySelector(".lang-place__selected");

  headerNavSchema.textContent = "How We Work";
  headerNavDetailed.textContent = "Details";
  headerNavContacts.textContent = "Contacts";
  headerNavCreate.textContent = "Create a Video";
  headerNavPortfolio.textContent = "Portfolio";
  langplaceSelected.innerHTML = `ENG&nbsp;
  <picture>
    <img
      src="../img/arrow-down.png" alt="arrow-down"
      srcset="../img/arrow-down@2x.png 2x, ../img/arrow-down.png 1x"
      class="lang-place__arow">
  </picture>
  `;
}

function engBeginning () {
  const beginningHeader = main.querySelector(".beginning__caption");
  beginningHeader.textContent = "UNBOX YOUR STORY";
}

export { engVersion };
