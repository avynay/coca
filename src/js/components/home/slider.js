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

export const useAboutHeroSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    centeredSlides: false,
    navigation: {
      nextEl: '.hero__slider-next',
      prevEl: '.hero__slider-prev',
    },
    breakpoints: {
      381: {
        slidesPerView: 1.2,
      },
      577: {
        slidesPerView: 1.4,
        centeredSlides: true,
      },
      769: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      993: {
        slidesPerView: 2.3,
        spaceBetween: 32,
      },
    },
  });
};

export const useAboutTeamSlider = () => {
  new Swiper('.team__employee', {
    modules: [Navigation, Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 18,
    loop: true,
    speed: 2000,
    autoplay: {
      enabled: true,
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    centeredSlides: true,
    navigation: {
      nextEl: '.team__employee-next',
      prevEl: '.team__employee-prev',
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 2.5,
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 32,
        centeredSlides: false,
      },
    },
  });
};

export const useReviewviewHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 16,
    initialSlide: 1,
    breakpoints: {
      1201: {
        slidesPerView: 'auto',
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 32,
      },
      993: {
        slidesPerView: 'auto',
        initialSlide: 1,
        spaceBetween: 32,
        centeredSlides: true,
      },
      577: {
        slidesPerView: 'auto',
        centeredSlides: true,
      },
    },
  });
};

export const useReviewNewsSlider = () => {
  new Swiper('.news__slider', {
    modules: [Navigation],
    spaceBetween: 32,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.news__btn--next',
      prevEl: '.news__btn--prev',
    },
  });
};
