const inputControlEl = document.querySelector("#font-size-control");
const spanForTextEl = document.querySelector("#text");

inputControlEl.addEventListener('input', onFontSizeControl);

function onFontSizeControl (event) {
    spanForTextEl.style.fontSize = event.currentTarget.value+"px";

}