const inputEl = document.querySelector('#validation-input');
// const inputDataEl = document.querySelector('#validation-input>data-length');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        event.preventDefault();
        inputEl.classList.add('valid');
        
        return;
    }     
     inputEl.classList.add('invalid');
      
    
        //    event.currentTarget.value.length == inputEl.dataset.length? inputEl.classList.add('valid'):inputEl.classList.add('invalid');

}
