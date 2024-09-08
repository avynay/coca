import '/scss/main.scss';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
  usePartnersSlider,
} from './components/home/slider.js';
import { useAccordion } from './components/accordion.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
useAccordion();
usePartnersSlider();
