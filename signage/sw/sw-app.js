//ON/OFFの文字の切替を設定
const acCheckbox = document.getElementById('ac-sw');
acCheckbox.addEventListener('click', () => {
  const acTitle = document.querySelector('.ac-title');
  acTitle.textContent = acCheckbox.checked ? 'ON' : 'OFF';
});

const lightCheckbox = document.getElementById('light-sw');
lightCheckbox.addEventListener('click', () => {
  const lightTitle = document.querySelector('.light-title');
  lightTitle.textContent = lightCheckbox.checked ? 'ON' : 'OFF';
});