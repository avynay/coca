import '/scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useAccordion } from './components/accordion.js';
import { usePhone } from './components/contact/phone.js';
import { useValidation } from './components/contact/validation.js';
import { usePartnersSlider } from './components/home/slider.js';

useTheme();
useBurger();
useAccordion();
usePhone();
useValidation();
usePartnersSlider();
