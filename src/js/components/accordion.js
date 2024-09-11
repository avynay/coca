export const useAccordion = () => {
  const accordionButtons = document.querySelectorAll('.accordion-button');
  const accordions = document.querySelectorAll('.accordion');
  const closeAccordions = document.querySelectorAll('.close-accordion');

  accordionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const accordion = accordions[index];
      if (accordion.classList.contains('accordion--opened')) {
        accordion.classList.remove('accordion--opened');
      } else {
        accordion.classList.add('accordion--opened');
      }
    });
  });

  closeAccordions.forEach((closeButton, index) => {
    closeButton.addEventListener('click', () => {
      accordions[index].classList.remove('accordion--opened');
    });
  });
};
export const priceAccordion = () => {
  const details = document.querySelectorAll('.faq__accordion');
  // добавить к каждому клику события клика
  [...details].forEach((targetDetail) => {
    targetDetail.addEventListener('click', () => {
      // закрывать всех кроме кликнутого
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute('open');
        }
      });
    });
  });
};
