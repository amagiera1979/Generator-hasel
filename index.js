const resCopy = document.querySelector('.copy-result');
const copyIcn = document.querySelector('.material-symbols-outlined');
const charLng = document.querySelector('.char-length');
const suw = document.querySelector('.suw');
const upCase = document.querySelector('.upCase');
const lowCase = document.querySelector('.lowCase');
const numbers = document.querySelector('.numbers');
const chars = document.querySelector('.chars');
const password = [];

function fillTable() {
  for (let i = 32; i <= 126; i++) {
    password.push(String.fromCharCode(i));
  }

  console.log(password);
}
// Dodawanie wielkich liter do hasła
function addUpCase(e) {
  // const uc= password.toString().match(/[A-Z]/g)
  const uc = [];

  for (let i = 65; i <= 90; i++) {
    uc.push(String.fromCharCode(i));
  }
  const ucChecked = e.target.checked;
  console.log(uc);

  // if(upCase.value==='on'){
  //     const aRand= Math.random()
  //     console.log(aRand)
  //  }

  // upCase.value==='on' ? password.push()
}
// Dodawanie małych liter do hasła
function addLowCase(e) {
  // const lc= password.toString().match(/[a-z]/g)
  const lc = [];

  for (let i = 97; i <= 122; i++) {
    lc.push(String.fromCharCode(i));
  }
  const lcChecked = e.target.checked;
  console.log(lc);
  // console.log(e.target.checked)
  resCopy.innerText = lc.join('')
  
}

// Dodawanie cyfr do hasła
function addNumb(e) {
  // const num= password.toString().match(/[0-9]/g)
  const num = [];

  for (let i = 48; i <= 57; i++) {
    num.push(String.fromCharCode(i));
  }

  const numChecked = e.target.checked;
  console.log(e.target.checked);
  console.log(num);
}

// Dodawanie znaków do hasła
function addChar(e) {
  //   const char = password.toString().match(/[^0-9][^a-z][^A-Z]/g);
  const char = [];

  for (let i = 32; i <= 126; i++) {
    if (i >= 32 && i <= 47) {
      char.push(String.fromCharCode(i));
    } else if (i >= 58 && i <= 64) {
      char.push(String.fromCharCode(i));
    } else if (i >= 91 && i <= 96) {
      char.push(String.fromCharCode(i));
    } else if (i >= 123 && i <= 126) {
      char.push(String.fromCharCode(i));
    }
  }

  const charChecked = e.target.checked;
  console.log(e.target.checked);
  console.log(char);
}

upCase.addEventListener('input', addUpCase);
lowCase.addEventListener('input', addLowCase);
numbers.addEventListener('input', addNumb);
chars.addEventListener('input', addChar);

function onDragSuw(e) {
  // console.log(e.target.value)
  let suwVal = e.target.value;
  charLng.innerText = suwVal;
}

suw.addEventListener('click', onDragSuw);

window.addEventListener('load', fillTable);
