//ON/OFFの文字の切替を設定
//会議室1
const acCheckboxR1 = document.getElementById('ac-sw-r1');
acCheckboxR1.addEventListener('click', () => {
  const acTitleR1 = document.querySelector('.ac-title-r1');
  acTitleR1.textContent = acCheckboxR1.checked ? 'ON' : 'OFF';
});

const lightCheckboxR1 = document.getElementById('light-sw-r1');
lightCheckboxR1.addEventListener('click', () => {
  const lightTitleR1 = document.querySelector('.light-title-r1');
  lightTitleR1.textContent = lightCheckboxR1.checked ? 'ON' : 'OFF';
});
