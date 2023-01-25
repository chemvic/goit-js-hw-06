const inputEl = document.querySelector('#name-input');
const nameOutEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {   
 
    if (event.currentTarget.value !== "") {
            nameOutEl.textContent = event.currentTarget.value;
        return;
    }
    nameOutEl.textContent = 'Anonymous';
}
