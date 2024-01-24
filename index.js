const resCopy = document.querySelector('.copy-result');
const copyIcn = document.querySelector('.material-symbols-outlined');
const charLng = document.querySelector('.char-length');
const suw = document.querySelector('.suw');
const upCase = document.querySelector('.upCase');
const lowCase = document.querySelector('.lowCase');
const numbers = document.querySelector('.numbers');
const chars = document.querySelector('.chars');



function onDragSuw() {
console.log(suw.value)
let suwVal = suw.value;
charLng.innerText = suwVal;
}

suw.addEventListener('click', onDragSuw);