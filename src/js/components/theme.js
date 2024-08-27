export const useTheme = () => {
  // themetarget=элемент у которого есть data-theme(не обращаемся к body на случай если чет поменяется и это будет не на body)
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('[data-theme-switcher]');

  const themeTargetDataset = themeTarget.dataset;

  // ниже для того чтобы переключенная тема сохранялась после перезагрузки страницы
  const theme = localStorage.getItem('theme') || 'light';
  themeTargetDataset.theme = theme;

  // ниже чтобы чекбокс сохранялся(хотя в некоторых браузерах и так робит)
  if (theme === 'dark') {
    themeSwitcher.checked = true;
  }

  // ниже сама переключалка
  themeSwitcher.addEventListener('click', () => {
    if (themeTargetDataset.theme === 'light') {
      themeTargetDataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      themeTargetDataset.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
};
