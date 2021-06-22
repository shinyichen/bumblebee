define([], function() {
  let darkSwitch;

  const turnOnDarkMode = (save) => {
    document.body.setAttribute('data-theme', 'dark');
    darkSwitch.classList.add('darkModeOn');
    darkSwitch.setAttribute('title', 'Turn off dark mode');
    if (save) localStorage.setItem('darkSwitch', 'on');
  };

  const turnOffDarkMode = (save) => {
    document.body.removeAttribute('data-theme');
    darkSwitch.classList.remove('darkModeOn');
    darkSwitch.setAttribute('title', 'Turn on dark mode');
    if (save) localStorage.setItem('darkSwitch', 'off');
  };

  const toggle = () =>
    darkSwitch.classList.contains('darkModeOn')
      ? turnOffDarkMode(true)
      : turnOnDarkMode(true);

  const init = () => {
    darkSwitch = document.getElementById('darkSwitch');
    darkSwitch.classList.remove('hidden');

    // 1. check app setting
    if (localStorage.getItem('darkSwitch') !== null) {
      if (localStorage.getItem('darkSwitch') === 'on') {
        turnOnDarkMode(false);
      } else {
        turnOffDarkMode(false);
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // 2. check system setting
      turnOnDarkMode(false);
    } else {
      // 3. default to light
      turnOffDarkMode(false);
    }
    darkSwitch.addEventListener('click', function() {
      toggle();
    });
  };

  init();
});
