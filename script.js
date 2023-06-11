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

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Добавляем обработчик клика на слайдшоу
document.querySelector('.slideshow').addEventListener('click', function() {
  // Скрываем текущий слайд
  slides[currentSlide].classList.remove('active');
  
  // Увеличиваем индекс текущего слайда
  currentSlide++;
  
  // Если достигнут конец слайдшоу, возвращаемся к первому слайду
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  
  // Отображаем следующий слайд
  slides[currentSlide].classList.add('active');
});

let slideCaption = document.querySelector('.caption');
let slideDark = document.querySelector('.dark');
let opacity = 0.4;
let opacity1 = 1;

function startAnimation() {
  setTimeout(function() {
  let intervalId = setInterval(function() {
    opacity -= 0.1; 
    opacity1 -= 0.25; 
    slideCaption.style.opacity = opacity1;
    slideDark.style.opacity = opacity;
    if (opacity <= 0 && opacity1 <= 0) {
      clearInterval(intervalId);
      slideCaption.classList.add('hide');
      slideDark.classList.add('hide');
    }
  }, 200);
}, 3000);
}

function handleIntersection(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      startAnimation();
    }
  });
}

let options = {
  root: null, // Используем viewport в качестве контейнера
  rootMargin: '0px', // Не добавляем отступы
  threshold: 0 // Как только элемент становится видимым, вызываем колбэк
};

let observer = new IntersectionObserver(handleIntersection, options);
observer.observe(document.querySelector('.slide'));

document.querySelector('.slide').addEventListener('click', resetAnimation);

