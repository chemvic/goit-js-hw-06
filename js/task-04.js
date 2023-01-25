let counterValue = 0;
const decrementBtn = document.querySelector('.decrement');
const incrementBtn = document.querySelector('.increment');

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

let valueEl = document.querySelector('#value');

function onDecrementBtnClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;    
}

function onIncrementBtnClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
 }


