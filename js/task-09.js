
const changeColorButton = document.querySelector('.change-color');
const colorInSpan = document.querySelector('.color');


let bodyBackGrColor = getRandomHexColor();
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16).padStart(6, 0)}`;
}

changeColorButton.addEventListener('click', onButtonClickChangeColor);

function onButtonClickChangeColor(event) {
 
  document.body.style.backgroundColor = bodyBackGrColor;
  colorInSpan.textContent = document.body.style.backgroundColor;
  
}