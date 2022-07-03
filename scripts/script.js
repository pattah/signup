
const wrongDisplay = document.querySelector('.wrongInfo');
const formData = document.querySelector('.formData');
const firstPassword = document.querySelector('#firstPassword')
const passwordConfirm = document.querySelector('#passwordConfirm')
const submitButton = document.querySelector('.submitButton')
const dupa = document.querySelector('.firstNameCont')
const formInput = document.querySelectorAll('.formInput')

submitButton.addEventListener('click', () => {
  formInput.forEach(el => {
  if (el.value === '') {
    el.style.border = '1px solid red'
  } else {
    el.style.border = '1px solid rgb(170, 170, 170)';
  }
});
});