const resCopy = document.querySelector('.copy-result');
const copyIcn = document.querySelector('.material-symbols-outlined');
const charLng = document.querySelector('.char-length');
const suw = document.querySelector('.suw');
const upCase = document.querySelector('.upCase');
const lowCase = document.querySelector('.lowCase');
const numbers = document.querySelector('.numbers');
const chars = document.querySelector('.chars');
const password =[];

function fillTable(){
for(let i=32; i<=126; i++){
    password.push(String.fromCharCode(i));
}

   console.log(password)
}

function addUpCase() {
    const upC=/[A-Z]/;
    const up = password.filter([A-Z]);
    console.log(up)


// upCase.value==='on' ? password.push()
}

upCase.addEventListener('click', addUpCase)


function onDragSuw() {
// console.log(suw.value)
let suwVal = suw.value;
charLng.innerText = suwVal;
}

suw.addEventListener('click', onDragSuw);

window.addEventListener('load', fillTable);