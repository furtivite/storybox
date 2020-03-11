function cookies () {
  const cookies = document.querySelector('.cookies');
  const okBtn = cookies.querySelector('.cookies__button_ok');
  const moreBtn = cookies.querySelector('.cookies__button_more');

  /* скрыть меню */
  okBtn.addEventListener("click", function cookiesHidden () {
    cookies.classList.add('cookies_hidden');
  })

  /* открыть пункт соглашения о cookies - пока не сделано */
  moreBtn.addEventListener("click", function langMenu () {
    const header = document.querySelector('.header');
    header.addEventListener("click", russianMenu);
  })
}

export { cookies };
