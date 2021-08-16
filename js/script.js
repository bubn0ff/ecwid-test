/* ------------ < BURGER-MENU > ------------------------------------------------------------ */

var burger = document.querySelector('.menu__btn');
var menu = document.querySelector('.menu__list');

if (burger) {
  burger.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
  })
}

/* ------------ < / BURGER_MENU > ------------------------------------------------------------ */

/* ------------ < SLIDER > ------------------------------------------------------------ */

var prev = document.querySelector('.slider__button_prev');
var next = document.querySelector('.slider__button_next');
var slides = [].slice.call(document.querySelectorAll('.slider__item'), 0);
var dots = [].slice.call(document.querySelectorAll('.slider-dots__item'), 0);

var index = 0;

var setActive = function(elem, indexElem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].classList.remove('active');
  }
  elem[indexElem].classList.add('active');
}

var getCurrentSlide = function(i) {
  setActive(slides, i);
  setActive(dots, i);
}

var nextSlide = function() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  getCurrentSlide(index);
}

var prevSlide = function() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  getCurrentSlide(index);
}

dots.forEach(function(dot, indexDot) {
  dot.addEventListener('click', function() {
    index = indexDot;
    getCurrentSlide(index);
    // clearInterval(autoShowSlides);
  })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// var autoShowSlides = setInterval(nextSlide, 3500);

/* ------------ < / SLIDER > ------------------------------------------------------------ */

/* ------------ < IFRAME > ------------------------------------------------------------ */

window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.promo__iframe').src = 'https://www.youtube.com/embed/jKNdGbyrzZg';
  }, 3000);
});

/* ------------ < / IFRAME > ------------------------------------------------------------ */