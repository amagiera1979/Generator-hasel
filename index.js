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
const charLng = document.querySelector('.char-length');
const suw = document.querySelector('.suw');
const button = document.querySelector('button');
const strBar = document.querySelector('.str-bar');
const bar = document.querySelectorAll('.bar');
const input = document.querySelectorAll('#input-check');

const upCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
// W takim zapisie nie można uwzględnić wszystkich znaków. Brak "" \
const chars = " !#$%&'()*+,-./:;<=>?@[]^_`{|}";

let inputChecked = 0;
let password = '';

// Funkcja zmieniająca klasę w 'pasku postępu' mocy
function changeBar(inputChecked) {
  inputChecked > 0 ? (bar[0].className = 'bar-on') : (bar[0].className = 'bar');

  inputChecked > 1 ? (bar[1].className = 'bar-on') : (bar[1].className = 'bar');

  inputChecked > 2 ? (bar[2].className = 'bar-on') : (bar[2].className = 'bar');

  inputChecked > 3 ? (bar[3].className = 'bar-on') : (bar[3].className = 'bar');
}

// Funkcja sprawdzania mocy hasła
function strengthPassword(inputChecked) {
  if (inputChecked === 1) {
    strBar.innerText = 'słaba';
  } else if (inputChecked === 2) {
    strBar.innerText = 'średnia';
  } else if (inputChecked === 3) {
    strBar.innerText = 'mocna';
  } else if (inputChecked === 4) {
    strBar.innerText = 'bardzo mocna';
  }
  console.log(strBar.innerHTML);
  changeBar(inputChecked);
}

// Wstawianie liter, liczb i znaków do hasła
input.forEach(i => {
  i.addEventListener('click', e => {
    // jeśli zaznaczymy checkbox z wielkimi literami
    if (i.className === 'upCase') {
      if (e.target.checked) {
        password = password.concat(upCase);
        inputChecked++;
      } else {
        // jeśli odznaczymy checkbox - trzeba usunąć fragment z wielkimi literami i zmniejszyć inputChecked
        const a = password.indexOf('A');
        const b = password.indexOf('Z');
        a === 0
          ? (password = password.slice(b + 1, password.length))
          : (password = password
              .slice(0, a)
              .concat(password.slice(b + 1, password.length)));

        inputChecked--;
      }
    } else if (i.className === 'lowCase') {
      if (e.target.checked) {
        password = password.concat(lowCase);
        inputChecked++;
      } else {
        const c = password.indexOf('a');
        const d = password.indexOf('z');
        c === 0
          ? (password = password.slice(d + 1, password.length))
          : (password = password
              .slice(0, c)
              .concat(password.slice(d + 1, password.length)));
        inputChecked--;
      }
    } else if (i.className === 'numbers') {
      if (e.target.checked) {
        password = password.concat(numbers);
        inputChecked++;
      } else {
        const e = password.indexOf('0');
        const f = password.indexOf('9');
        e === 0
          ? (password = password.slice(f + 1, password.length))
          : (password = password
              .slice(0, e)
              .concat(password.slice(f + 1, password.length)));
        inputChecked--;
      }
    } else if (i.className === 'chars') {
      if (e.target.checked) {
        password = password.concat(chars);
        inputChecked++;
      } else {
        const g = password.indexOf(' ');
        const h = password.indexOf('}');
        g === 0
          ? (password = password.slice(h + 1, password.length))
          : (password = password
              .slice(0, g)
              .concat(password.slice(h + 1, password.length)));
        inputChecked--;
      }
    }
    strengthPassword(inputChecked);
  });
});

// tworzenie ikony 'kopiuj' i kopiowanie do schowka
function createCopyIcon() {
  const icon = document.createElement('i');
  const div = document.createElement('div');
  div.style.textAlign = 'center';
  div.style.marginTop = '10px';
  icon.className = 'material-symbols-outlined';
  icon.innerHTML = 'file_copy';
  icon.style.height = '10px';
  icon.style.cursor = 'pointer';
  div.appendChild(icon);
  resCopy.appendChild(div);
  icon.addEventListener('click', e => {
    navigator.clipboard.writeText(resCopy.innerText);
  });
}

// Generowanie hasła
button.addEventListener('click', e => {
  // Z ilu znaków składa się hasło
  let num = charLng.innerHTML;
  let result = '';

  if (num === '') {
    alert('Zaznacz długość hasła');
  }
  // Losowanie znaków
  for (let i = 0; i < num; i++) {
    const res = Math.floor(Math.random() * password.length);

    result = result.concat(password.charAt(res));
  }

  resCopy.innerHTML = result;

  createCopyIcon();
});

// Suwak= ilość znaków
function onDragSuw(e) {
  let suwVal = e.target.value;
  charLng.innerText = suwVal;
}

suw.addEventListener('click', onDragSuw);
