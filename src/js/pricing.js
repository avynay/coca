import '/scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useAccordion } from './components/accordion.js';
import { priceAccordion } from './components/accordion.js';
import { usePriceSwitcher } from './components/pricing/priceSwitch.js';

useTheme();
useBurger();
useAccordion();
usePriceSwitcher();
priceAccordion();
