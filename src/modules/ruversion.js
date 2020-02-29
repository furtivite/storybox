const header = document.querySelector(".header");
const main = document.querySelector(".main");

function ruVersion () {
  ruHeader ();
  ruBeginning ();
  ruDetailed ();
}

function ruHeader () {
  const headerNav = header.querySelector(".nav");
  const headerNavSchema = headerNav.querySelector(".nav__list-item-schema");
  const headerNavDetailed = headerNav.querySelector(".nav__list-item-detailed");
  const headerNavContacts = headerNav.querySelector(".nav__list-item-contacts");
  const headerNavCreate = headerNav.querySelector(".nav__list-item-create");
  const headerNavPortfolio = headerNav.querySelector(".nav__list-item-portfolio");

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

function ruDetailed () {
  const detailedHeader = main.querySelector(".detailed__caption");
  const detailedCaptionEffect = main.querySelector(".detailed__line-caption_effect");
  const detailedParagraphEffect = main.querySelector(".detailed__paragraph_effect");
  const detailedCaptionAttention = main.querySelector(".detailed__line-caption_attention");
  const detailedParagraphAttention = main.querySelector(".detailed__paragraph_attention");
  const detailedCaptionTelling = main.querySelector(".detailed__line-caption_telling");
  const detailedParagraphTelling = main.querySelector(".detailed__paragraph_telling");
  const detailedCaptionStory = main.querySelector(".detailed__line-caption_story");
  const detailedParagraphStory = main.querySelector(".detailed__paragraph_story");

  detailedHeader.textContent = "ПОДРОБНЕЕ";
  detailedCaptionEffect.textContent = "Максимальное воздействие";
  detailedParagraphEffect.textContent = "Через анимационное видео информация доходит до зрителя без потерь";
  detailedCaptionAttention.textContent = "Сегодня внимание - завтра клиент";
  detailedParagraphAttention.textContent = "Завоевав внимание зрителя сейчас, вы получите постоянного покупателя в будущем";
  detailedCaptionTelling.textContent = "Хватит продавать - лучше расскажи";
  detailedParagraphTelling.textContent = "Методики продаж не работают! Клиент покупает, когда видит и понимает место вашего товара в своей жизни";
  detailedCaptionStory.textContent = "Достойная история есть у каждого бренда";
  detailedParagraphStory.textContent = "Каким бы ни был продукт, сценаристы вместе с вами откроют красивую историю, чтобы достойно донести её до зрителя";
}

export { ruVersion };
