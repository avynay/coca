import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';

export const usePartnersSlider = () => {
  let partnersSlider = null;

  function checkWidth() {
    if (window.innerWidth <= 768) {
      if (!partnersSlider) {
        initSwiper();
      }
    } else {
      if (partnersSlider) {
        destroySwiper();
      }
    }
  }

  function initSwiper() {
    partnersSlider = new Swiper('.partners__slider', {
      modules: [Autoplay],
      speed: 1000,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 15,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        451: {
          slidesPerView: 2,
        },
        651: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
  }

  function destroySwiper() {
    if (partnersSlider) {
      partnersSlider.destroy(true, true);
      partnersSlider = null;
    }
  }

  window.addEventListener('resize', checkWidth);
  checkWidth();
};

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.insight__slider-next',
      prevEl: '.insight__slider-prev',
    },
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    container: '.testimonials__slider',
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
    fadeEffect: {
      crossFade: true,
    },
  });
};
