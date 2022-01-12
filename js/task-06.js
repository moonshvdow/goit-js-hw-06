const inputValidationEl = document.querySelector('#validation-input');

inputValidationEl.addEventListener('input', event => {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.remove('invalid');
});

inputValidationEl.addEventListener('blur', event => {
    if(event.currentTarget.value.length === Number(event.currentTarget.dataset.length)){
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.add('invalid');
    }
});



