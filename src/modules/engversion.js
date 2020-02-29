const header = document.querySelector(".header");
const main = document.querySelector(".main");

function engVersion () {
  engHeader ();
  engBeginning ();
  engDetailed ();
  engPortfolio ();
}

function engHeader () {
  const headerNav = header.querySelector(".nav");
  const headerNavSchema = headerNav.querySelector(".nav__list-item-schema");
  const headerNavDetailed = headerNav.querySelector(".nav__list-item-detailed");
  const headerNavContacts = headerNav.querySelector(".nav__list-item-contacts");
  const headerNavCreate = headerNav.querySelector(".nav__list-item-create");
  const headerNavPortfolio = headerNav.querySelector(".nav__list-item-portfolio");

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

function engDetailed () {
  const detailedHeader = main.querySelector(".detailed__caption");
  const detailedCaptionEffect = main.querySelector(".detailed__line-caption_effect");
  const detailedParagraphEffect = main.querySelector(".detailed__paragraph_effect");
  const detailedCaptionAttention = main.querySelector(".detailed__line-caption_attention");
  const detailedParagraphAttention = main.querySelector(".detailed__paragraph_attention");
  const detailedCaptionTelling = main.querySelector(".detailed__line-caption_telling");
  const detailedParagraphTelling = main.querySelector(".detailed__paragraph_telling");
  const detailedCaptionStory = main.querySelector(".detailed__line-caption_story");
  const detailedParagraphStory = main.querySelector(".detailed__paragraph_story");

  detailedHeader.textContent = "DETAILS";
  detailedCaptionEffect.textContent = "Maximum Effect";
  detailedParagraphEffect.textContent = "Information conveyed through an animated video reaches the viewer intact";
  detailedCaptionAttention.textContent = "Today's Attention is Tomorrow's Client";
  detailedParagraphAttention.textContent = "By catching the viewer's attention now you get a returning customer in the future";
  detailedCaptionTelling.textContent = "Stop Selling, Start Telling";
  detailedParagraphTelling.textContent = "Common sales techniques don't work! A client makes a purchase when he sees and understands the purpose of your product in his life";
  detailedCaptionStory.textContent = "Every Brand Has a Story Worth Telling";
  detailedParagraphStory.textContent = "Whatever your product is, with your help our writers will come up with a beautiful story and bring it to the viewer";
}

function engPortfolio () {
  const portfolioHeader = main.querySelector(".portfolio__caption");
  portfolioHeader.textContent = "PORTFOLIO";
}

export { engVersion };
