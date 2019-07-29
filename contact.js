const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const button = document.querySelector('.submit-button');
const form = document.querySelector('.form');
const regEx = /\S+@\S+\.\S+/;

name.addEventListener('input', checkInput);
message.addEventListener('input', checkInput);
email.addEventListener('input', checkInput);

function checkInput() {
  if (
    name.value.trim() !== '' &&
    regEx.test(email.value) &&
    message.value.trim() !== ''
  ) {
    button.style.backgroundColor = '#fa923f';
    button.disabled = false;
  } else {
    button.style.backgroundColor = '#979695';
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('submitted');
});
