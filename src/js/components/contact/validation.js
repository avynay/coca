export const useValidation = () => {
  const form = document.querySelector('.get-started__form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstNameInput = form.querySelector('input[name="first-name"]');
    const lastNameInput = form.querySelector('input[name="last-name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('#phone');

    if (!firstNameInput.value.match(/^[a-zA-Zа-яА-Я]+$/)) {
      alert('Please enter a valid name');
      return;
    }

    if (!lastNameInput.value.match(/^[a-zA-Zа-яА-Я]+$/)) {
      alert('Please enter a valid last name');
      return;
    }

    if (
      !emailInput.value.match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      )
    ) {
      alert('Please enter a valid email');
      return;
    }

    if (!phoneInput.value.match(/^\+?\d+$/)) {
      alert('Please enter a valid phone number');
      return;
    }

    form.submit();
  });
};
