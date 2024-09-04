import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade } from 'swiper/modules';

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
