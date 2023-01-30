function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const inputNumberEl = document.querySelector('#controls > input');
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector('#boxes');
const headEl = document.querySelector('head');

inputNumberEl.addEventListener('input', onInputNumber);

let amount = 0;
function onInputNumber(event) {
  amount = Number(event.currentTarget.value);
 
  return amount;
}

headEl.insertAdjacentHTML("beforeend",`<style>#boxes{
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}
.box{
  margin: 10px;
  }     
    </style>` );

createBtnEl.addEventListener('click', createBoxes);
let markup = '';

function createBoxes(event) {
  
  for (let i = 1; i <= amount; i+=1) {  
    markup += `<div class="box" style="width:${20+(i*10)}px; height:${20+(i*10)}px; background-color:${getRandomHexColor()};"></div>`;    
  }   
      boxesEl.innerHTML=markup;
      markup = '';
}

destroyBtnEl.addEventListener('click', onClickDestroy);
function onClickDestroy(event) {
  boxesEl.innerHTML = "";
  markup = '';  
  }
 
