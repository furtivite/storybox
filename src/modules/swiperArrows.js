function swiperArrows () {
  const portfolio = document.querySelector('.portfolio');
  const portfoliSowiperBtnNext = portfolio.querySelector('.portfolio__swiper-button-next');
  const portfoliSowiperBtnPrev = portfolio.querySelector('.portportfolio__swiper-button-prevfolio');
  const portfolioSwiperPagination = portfolio.querySelector('.portfolio__swiper-pagination');

  console.log(portfolio.getElementsByClassName('portfolio__swiper-slide').length);

  if (portfolio.getElementsByClassName('portfolio__swiper-slide').length < 2) {
    portfoliSowiperBtnNext.classList.add('portfolio__nav-hidden');
    portfoliSowiperBtnPrev.classList.add('portfolio__nav-hidden');
    portfolioSwiperPagination.classList.add('portfolio__nav-hidden');
  }
}

export { swiperArrows };
