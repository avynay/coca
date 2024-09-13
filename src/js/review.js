import '/scss/review.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useReviewNewsSlider } from './components/home/slider.js';
import { useAccordion } from './components/accordion.js';

useTheme();
useBurger();
useAccordion();
useReviewNewsSlider();
