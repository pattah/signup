
const dupa = document.querySelector('.formInput');
const wrongDisplay = document.querySelector('.wrongInfo');
const formData = document.querySelector('.formData');
const formInput = document.querySelector('.formInput')

const submitButton = document.querySelector('.submitButton')

function check() {
const firstPassword = document.querySelector('#firstPassword');
const passwordConfirm = document.querySelector('#passwordConfirm');
    if (firstPassword.value === passwordConfirm.value) {
         passwordConfirm.setCustomValidity('');
        
    } else {
         passwordConfirm.setCustomValidity('Passwords do not match');
        
    }
}
check()



