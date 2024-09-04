export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');

  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const entriesPrice = document.querySelector('[data-price="enterprise"]');

  // new
  const textPrice = document.querySelectorAll('[data-price="text"]');

  const priceList = {
    starter: {
      default: '$' + 120,
      withSale: '$' + calculateSalePrice(120),
    },
    popular: {
      default: '$' + 1680,
      withSale: '$' + calculateSalePrice(1680),
    },
    enterprise: {
      default: '$' + 2520,
      withSale: '$' + calculateSalePrice(2520),
    },
  };

  function calculateSalePrice(defaultPrice) {
    return defaultPrice * 12 - defaultPrice * 12 * 0.2;
  }

  // new
  const priceTextList = {
    content: {
      default: '/mo',
      withSale: '/yr',
    },
  };

  const setPricesWithSale = () => {
    starterPrice.textContent = priceList.starter.withSale;
    popularPrice.textContent = priceList.popular.withSale;
    entriesPrice.textContent = priceList.enterprise.withSale;
    // new
    textPrice.forEach((element) => {
      element.textContent = priceTextList.content.withSale;
    });
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    entriesPrice.textContent = priceList.enterprise.default;
    // new
    textPrice.forEach((element) => {
      element.textContent = priceTextList.content.default;
    });
  };

  switcher.checked = true;
  setPricesWithSale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWithSale();
    } else {
      setDefaultPrices();
    }
  });
};
