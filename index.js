// OBSŁUGA GENERATORA HASEŁ Z POBIERANIEM ZNAKÓW Z TABELI ASCII

// const resCopy = document.querySelector('.copy-result');
// const charLng = document.querySelector('.char-length');
// const suw = document.querySelector('.suw');
// const button = document.querySelector('button');
// const strBar = document.querySelector('.str-bar');
// const bar = document.querySelectorAll('.bar');
// const input = document.querySelectorAll('#input-check');
// let inputChecked = 0;
// let password = [];

// // Funkcja zmieniająca klasę w 'pasku postępu' mocy
// function changeBar(inputChecked) {
//   inputChecked > 10
//     ? (bar[0].className = 'bar-on')
//     : (bar[0].className = 'bar');

//   inputChecked > 30
//     ? (bar[1].className = 'bar-on')
//     : (bar[1].className = 'bar');

//   inputChecked > 50
//     ? (bar[2].className = 'bar-on')
//     : (bar[2].className = 'bar');

//   inputChecked > 70
//     ? (bar[3].className = 'bar-on')
//     : (bar[3].className = 'bar');
// }

// // Funkcja sprawdzania mocy hasła
// function strengthPassword(inputChecked) {
//   if (inputChecked <= 36) {
//     strBar.innerHTML = 'słaba';
//   } else if (inputChecked >= 37 && inputChecked <= 51) {
//     strBar.innerHTML = 'średnia';
//   } else if (inputChecked >= 52 && inputChecked <= 69) {
//     strBar.innerHTML = 'mocna';
//   } else if (inputChecked >= 70) {
//     strBar.innerHTML = 'bardzo mocna';
//   }
//   changeBar(inputChecked);
// }

// input.forEach(i => {
//   i.addEventListener('click', e => {
//     // Wstawianie wielkich liter
//     if (i.className === 'upCase') {
//       for (let a = 65; a <= 90; a++) {
//         // Sprawdzanie wartości pola checked
//         if (e.target.checked) {
//           password.push(String.fromCharCode(a));
//           inputChecked++;
//         } else {
//           password.pop(String.fromCharCode(a));
//           inputChecked--;
//         }
//       }
//     } else if (i.className === 'lowCase') {
//       // Wstawianie małych liter
//       for (let a = 97; a <= 122; a++) {
//         // Sprawdzanie wartości pola checked
//         if (e.target.checked) {
//           password.push(String.fromCharCode(a));
//           inputChecked++;
//         } else {
//           password.pop(String.fromCharCode(a));
//           inputChecked--;
//         }
//       }
//     } else if (i.className === 'numbers') {
//       // Wstawianie cyfr
//       for (let a = 48; a <= 57; a++) {
//         // Sprawdzanie wartości pola checked
//         if (e.target.checked) {
//           password.push(String.fromCharCode(a));
//           inputChecked++;
//         } else {
//           password.pop(String.fromCharCode(a));
//           inputChecked--;
//         }
//       }
//     } else if (i.className === 'chars') {
//       // Dodawanie znaków
//       for (let a = 32; a <= 126; a++) {
//         // Sprawdzanie wartości pola checked
//         if (e.target.checked) {
//           if (a >= 32 && a <= 47) {
//             password.push(String.fromCharCode(a));
//             inputChecked++;
//           } else if (a >= 58 && a <= 64) {
//             password.push(String.fromCharCode(a));
//             inputChecked++;
//           } else if (a >= 91 && a <= 96) {
//             password.push(String.fromCharCode(a));
//             inputChecked++;
//           } else if (a >= 123 && a <= 126) {
//             password.push(String.fromCharCode(a));
//             inputChecked++;
//           }
//         } else {
//           if (a >= 32 && a <= 47) {
//             password.pop(String.fromCharCode(a));
//             inputChecked--;
//           } else if (a >= 58 && a <= 64) {
//             password.pop(String.fromCharCode(a));
//             inputChecked--;
//           } else if (a >= 91 && a <= 96) {
//             password.pop(String.fromCharCode(a));
//             inputChecked--;
//           } else if (a >= 123 && a <= 126) {
//             password.pop(String.fromCharCode(a));
//             inputChecked--;
//           }
//         }
//       }
//     }
//     strengthPassword(inputChecked);

//     takePassword(password);
//   });
// });

// // Generowanie hasła
// function takePassword(password) {
//   button.addEventListener('click', e => {
//     // Z ilu znaków składa się hasło
//     let num = charLng.innerHTML;
//     // Zamiana tablicy na string, aby użyć charAt. Bez join() dokłada przecinki
//     let str = password.join('').toString();
//     let arr = [];

//     if (num === '') {
//       alert('Zaznacz długość hasła');
//     }
//     // Losowanie znaków
//     for (let i = 0; i < num; i++) {
//       const res = Math.floor(Math.random() * password.length);
//       arr.push(str.charAt(res));
//     }
//     // Wyświetlenie hasła. Bez join() dodaje przecinki
//     resCopy.innerHTML = arr.join('');
//   });
// }

// function onDragSuw(e) {
//   // console.log(e.target.value)
//   let suwVal = e.target.value;
//   charLng.innerText = suwVal;
// }

// suw.addEventListener('click', onDragSuw);

// !!!  OBSŁUGA GENERATORA HASEŁ Z GOTOWYMI CIĄGAMI ZNAKÓW

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

const upCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const chars = " !#$%&'()*+,-./:;<=>?@[]^_`{|}";

let inputChecked = 0;
let password = '';

input.forEach(i => {
  i.addEventListener('click', e => {
    if (i.className === 'upCase') {
      if (e.target.checked) {
        password = password.concat(upCase);
        inputChecked++;
      } else {
        inputChecked--;
      }
    } else if (i.className === 'lowCase') {
      if (e.target.checked) {
        password = password.concat(lowCase);
        inputChecked++;
      } else {
        inputChecked--;
      }
    } else if (i.className === 'numbers') {
      if (e.target.checked) {
        password = password.concat(numbers);
        inputChecked++;
      } else {
        inputChecked--;
      }
    } else if (i.className === 'chars') {
      if (e.target.checked) {
        password = password.concat(chars);
        inputChecked++;
      } else {
        inputChecked--;
      }
    }
    console.log(password, inputChecked);
  });
});

// Dodawanie małych liter do hasła

// zaznaczanie mocy hasła

// // Generowanie hasła
// button.onclick = function takePassword() {
//   password.join('');
//   resCopy.innerHTML = password;
// };

function onDragSuw(e) {
  // console.log(e.target.value)
  let suwVal = e.target.value;
  charLng.innerText = suwVal;
}

suw.addEventListener('click', onDragSuw);

