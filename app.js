document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    // Splash ekranini yashirish
    document.getElementById('splashScreen').style.display = 'none';
    
    // Video avtomatik bo'lishini o'chirish
    var video = document.getElementById('backgroundVideo');
    video.muted = false; // Video ovozini yoqish
    video.play(); // Video ijro etish
  }, 5000); // 5 soniya kutib splash ekranini yashirish
});
 

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{
    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx + 1) * 400)
      
    });

    setTimeout(()=>{
      logoSpan.forEach((span, idx)=>{


        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 200)
      
      })
    
    },2000)


  })


})


document.addEventListener('DOMContentLoaded', function() {
  // setTimeout orqali keyingi sahifaga otish
  setTimeout(function() {
    // Keyingi sahifaga o'tish uchun window.location.assign ishlatiladi
    window.location.assign('parking.html'); // O'zgartiring url_of_next_page.html - keyingi sahifa manzili
  }, 3500); // 5000 milliseconds (5 sekund) kutish
});
