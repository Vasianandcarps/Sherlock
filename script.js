window.addEventListener('load', function() {
  let preloader = document.querySelector('.preloader');
  preloader.classList.add('visible');
  let opacity = 1;
  let intervalId = setInterval(function() {
    opacity -= 0.1; 
    preloader.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(intervalId);
      preloader.classList.remove('visible');
    }
  }, 300); 
});


 

