
function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

// let isLoggedIn = false;
// const toggleButton = document.getElementById('toggleButton');

// toggleButton.addEventListener('click', () => {
//     if (!isLoggedIn) {
//         // Tizimga kirmagan bo'lsa, avtomatik ravishda login sahifasiga o'tish
//         window.location.href = 'login.html'; // Ma'lumotnoma manzili
//     } else {
//         // Tizimga kirmagan bo'lsa, boshqa amalni bajarish (masalan, tugmani rangini o'zgartirish)
//         toggleButton.style.backgroundColor = 'green'; // Tugmani yashil rangda o'zgartirish
//     }
//     isLoggedIn = !isLoggedIn; // isLoggedIn holatini toggllash
// });


// rang o'zgartirish uchun


// function login(buttonNumber) {
//   // Tanlangan tugmani aniqlash
//   var button = document.getElementById('button' + buttonNumber);

//   // Tugmani rangini o'zgartirish
//   button.style.backgroundColor = '#a8b819c2'; // Fon rangni ozgartiramiz
//   button.style.backgroundColor =  '#bdd91f';//chegarani rangi
//   button.style.color = 'white'; // Matn rangni ozgartiramiz

//   // Backendga kirish so'rovi yuborish
//   // Masalan, fetch() yordamida backendga so'rov yuborish mumkin
// }