
const wrongDisplay = document.querySelectorAll('.wrongInfo');
const formData = document.querySelector('.formData');
const formInput = document.querySelectorAll('.formInput')
const firstPassword = document.querySelector('#firstPassword')
  const passwordConfirm = document.querySelector('#passwordConfirm')
const submitButton = document.querySelector('.submitButton')
const dupa = document.querySelector('.firstNameCont')

submitButton.addEventListener('click', () => {
  formInput.forEach(el => {
       if(el.value === '') {
            wrongDisplay.textContent = 'required field'
       }
  });
});







