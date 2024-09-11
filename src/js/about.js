import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useAccordion } from './components/accordion.js';
import {
  useAboutHeroSlider,
  useAboutTeamSlider,
} from './components/home/slider.js';

useTheme();
useBurger();
useAccordion();
useAboutHeroSlider();
useAboutTeamSlider();
