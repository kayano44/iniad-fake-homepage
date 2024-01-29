//ON/OFFの文字の切替を設定
//会議室A
const acCheckboxRA = document.getElementById('ac-sw-rA');
acCheckboxRA.addEventListener('click', () => {
  const acTitleRA = document.querySelector('.ac-title-rA');
  acTitleRA.textContent = acCheckboxRA.checked ? 'ON' : 'OFF';
});

const lightCheckboxRA = document.getElementById('light-sw-rA');
lightCheckboxRA.addEventListener('click', () => {
  const lightTitleRA = document.querySelector('.light-title-rA');
  lightTitleRA.textContent = lightCheckboxRA.checked ? 'ON' : 'OFF';
});

//会議室B
const acCheckboxRB = document.getElementById('ac-sw-rB');
acCheckboxRB.addEventListener('click', () => {
  const acTitleRB = document.querySelector('.ac-title-rB');
  acTitleRB.textContent = acCheckboxRB.checked ? 'ON' : 'OFF';
});

const lightCheckboxRB = document.getElementById('light-sw-rB');
lightCheckboxRB.addEventListener('click', () => {
  const lightTitleRB = document.querySelector('.light-title-rB');
  lightTitleRB.textContent = lightCheckboxRB.checked ? 'ON' : 'OFF';
});

//会議室C
const acCheckboxRC = document.getElementById('ac-sw-rC');
acCheckboxRC.addEventListener('click', () => {
  const acTitleRC = document.querySelector('.ac-title-rC');
  acTitleRC.textContent = acCheckboxRC.checked ? 'ON' : 'OFF';
});

const lightCheckboxRC = document.getElementById('light-sw-rC');
lightCheckboxRC.addEventListener('click', () => {
  const lightTitleRC = document.querySelector('.light-title-rC');
  lightTitleRC.textContent = lightCheckboxRC.checked ? 'ON' : 'OFF';
});

//会議室D
const acCheckboxRD = document.getElementById('ac-sw-rD');
acCheckboxRD.addEventListener('click', () => {
  const acTitleRD = document.querySelector('.ac-title-rD');
  acTitleRD.textContent = acCheckboxRD.checked ? 'ON' : 'OFF';
});

const lightCheckboxRD = document.getElementById('light-sw-rD');
lightCheckboxRD.addEventListener('click', () => {
  const lightTitleRD = document.querySelector('.light-title-rD');
  lightTitleRD.textContent = lightCheckboxRD.checked ? 'ON' : 'OFF';
});

