function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const inputNumberEl = document.querySelector('#controls > input');
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector('#boxes');


inputNumberEl.addEventListener('input', onInputNumber);

let amount = 0;
function onInputNumber(event) {
  amount = Number(event.currentTarget.value);
  // console.log(amount);
  return amount;
}

createBtnEl.addEventListener('click', createBoxes);
let markup = '';


function createBoxes(event) {
  console.log(amount);

  for (let i = 1; i <= amount; i+=1) {
  
    markup += `<div class="box"  style="width:${20+(i*10)}px; heigth:${20+(i*10)}px; background-color:${getRandomHexColor()}"></div>`;
    
  }
    console.log(markup);
      boxesEl.innerHTML=markup;
markup = '';
}
destroyBtnEl.addEventListener('click', onClickDestroy);
function onClickDestroy(event) {
  boxesEl.innerHTML = "";
  markup = '';
  // inputNumberEl.currentTarget.elements.value = 0;
 
  }
 
