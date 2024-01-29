const resCopy = document.querySelector('.copy-result');
// const copyIcn = document.querySelector('.material-symbols-outlined');
const charLng = document.querySelector('.char-length');
const suw = document.querySelector('.suw');
// const upCase = document.querySelector('.upCase');
// const lowCase = document.querySelector('.lowCase');
// const numbers = document.querySelector('.numbers');
// const chars = document.querySelector('.chars');
const button = document.querySelector('button');
const strBar = document.querySelector('.str-bar');
const bar = document.querySelectorAll('.bar');
const input = document.querySelectorAll('#input-check');
let inputChecked = 0;
let password = [];

function strengthPassword(inputChecked){
  if(inputChecked<=46){
    strBar.innerHTML='słaba';
  }else if(inputChecked>=47&&inputChecked<=62){
    strBar.innerHTML='średnia';
  }else {
    strBar.innerHTML='mocna';
  }
}

input.forEach(i => {
  i.addEventListener('click', e => {
    // Wstawianie wielkich liter
    if (i.className === 'upCase') {
      for (let a = 65; a <= 90; a++) {
        // Sprawdzanie wartości pola checked
        if (e.target.checked) {
          password.push(String.fromCharCode(a));
          inputChecked++;
        } else {
          password.pop(String.fromCharCode(a));
          inputChecked--;
        }
      }
    } else if (i.className === 'lowCase') {
      // Wstawianie małych liter
      for (let a = 97; a <= 122; a++) {
        // Sprawdzanie wartości pola checked
        if (e.target.checked) {
          password.push(String.fromCharCode(a));
          inputChecked++;
        } else {
          password.pop(String.fromCharCode(a));
          inputChecked--;
        }
      }
    } else if (i.className === 'numbers') {
      // Wstawianie cyfr
      for (let a = 48; a <= 57; a++) {
        // Sprawdzanie wartości pola checked
        if (e.target.checked) {
          password.push(String.fromCharCode(a));
          inputChecked++;
        } else {
          password.pop(String.fromCharCode(a));
          inputChecked--;
        }
      }
    } else if (i.className === 'chars') {
      // Dodawanie znaków
      for (let a = 32; a <= 126; a++) {
        // Sprawdzanie wartości pola checked
        if (e.target.checked) {
          if (a >= 32 && a <= 47) {
            password.push(String.fromCharCode(a));
            inputChecked++;
          } else if (a >= 58 && a <= 64) {
            password.push(String.fromCharCode(a));
            inputChecked++;
          } else if (a >= 91 && a <= 96) {
            password.push(String.fromCharCode(a));
            inputChecked++;
          } else if (a >= 123 && a <= 126) {
            password.push(String.fromCharCode(a));
            inputChecked++;
          }
          
        } else {
          if (a >= 32 && a <= 47) {
            password.pop(String.fromCharCode(a));
            inputChecked--;
          } else if (a >= 58 && a <= 64) {
            password.pop(String.fromCharCode(a));
            inputChecked--;
          } else if (a >= 91 && a <= 96) {
            password.pop(String.fromCharCode(a));
            inputChecked--;
          } else if (a >= 123 && a <= 126) {
            password.pop(String.fromCharCode(a));
            inputChecked--;
          }

          
        }
      }
    }
    console.log(inputChecked, password);
    // Sprawdzanie mocy hasła
    strengthPassword(inputChecked)

  
  });
});

// console.log(input);

// // Dodawanie wielkich liter do hasła
// function addUpCase(e) {
//   // const uc1= password.toString().match(/[A-Z]/g)
//   const uc = [];

//   for (let i = 65; i <= 90; i++) {
//     uc.push(String.fromCharCode(i));
//   }
//   const ucChecked = e.target.checked;

//   if (ucChecked) {
//     password.push(uc);
//     inputChecked++;
//     console.log(inputChecked);
//   }else {
//     inputChecked--;
//     console.log(inputChecked);
//   }
//   // return password;
// }
// // Dodawanie małych liter do hasła
// function addLowCase(e) {
//   // const lc1= password.toString().match(/[a-z]/g)
//   const lc = [];

//   for (let i = 97; i <= 122; i++) {
//     lc.push(String.fromCharCode(i));
//   }
//   const lcChecked = e.target.checked;

//   if (lcChecked) {
//     password.push(lc);
//     inputChecked++;
//     console.log(inputChecked);
//   }else {
//     inputChecked--;
//     console.log(inputChecked);
//   }
//   //   resCopy.innerHTML = password.join('');
// }

// // Dodawanie cyfr do hasła
// function addNumb(e) {
//   // const num1= password.toString().match(/[0-9]/g)
//   const num = [];

//   for (let i = 48; i <= 57; i++) {
//     num.push(String.fromCharCode(i));
//   }

//   const numChecked = e.target.checked;

//   if (numChecked) {
//     password.push(num);
//     inputChecked++;
//     console.log(inputChecked);
//   }else {
//     inputChecked--;
//     console.log(inputChecked);
//   }
// }

// // Dodawanie znaków do hasła
// function addChar(e) {
//   // const char1 = password.toString().match(/[^0-9][^a-z][^A-Z]/g);
//   const char = [];

//   for (let i = 32; i <= 126; i++) {
//     if (i >= 32 && i <= 47) {
//       char.push(String.fromCharCode(i));
//     } else if (i >= 58 && i <= 64) {
//       char.push(String.fromCharCode(i));
//     } else if (i >= 91 && i <= 96) {
//       char.push(String.fromCharCode(i));
//     } else if (i >= 123 && i <= 126) {
//       char.push(String.fromCharCode(i));
//     }
//   }

//   const charChecked = e.target.checked;

//   if (charChecked) {
//     password.push(char);
//     inputChecked++;
//     console.log(inputChecked);
//   } else {
//     inputChecked--;
//     console.log(inputChecked);
//   }
// }

// // zaznaczanie mocy hasła
// bar.forEach(b=>{
//   if(inputChecked<=2){
// strBar.innerHTML='słaba';
//   }else if(inputChecked===3){
//     strBar.innerHTML='średnia'
//   }else{
//     strBar.innerHTML='mocna'
//   }
// })

// // Generowanie hasła
// button.onclick = function takePassword() {
//   password.join('');
//   resCopy.innerHTML = password;
// };

// upCase.addEventListener('input', addUpCase);
// lowCase.addEventListener('input', addLowCase);
// numbers.addEventListener('input', addNumb);
// chars.addEventListener('input', addChar);
// button.addEventListener('click', takePassword);

function onDragSuw(e) {
  // console.log(e.target.value)
  let suwVal = e.target.value;
  charLng.innerText = suwVal;
}

suw.addEventListener('click', onDragSuw);

console.log(inputChecked);
