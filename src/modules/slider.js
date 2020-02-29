import '../vendor/swiper/swiper';
import '../vendor/swiper/swiper.css';

function slider () {
  const portfolioBanners = new Swiper ('.portfolio__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

export { slider };
