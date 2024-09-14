import '/scss/review.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useReviewNewsSlider,
  useReviewviewHeroSlider,
} from './components/home/slider.js';
import { useAccordion } from './components/accordion.js';
import { useTabs } from './components/review/tabs.js';

useTheme();
useBurger();
useAccordion();
useReviewNewsSlider();
useReviewviewHeroSlider();
useTabs();
