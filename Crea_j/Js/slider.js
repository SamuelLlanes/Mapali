const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".Div1");
const slideWidth = slides[0].clientWidth + 20; // Ancho del slide + espacio entre slides
let currentSlide = 0;

const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");

const slideVisible = 4; // Número de slides visibles en el slider
const slideStep = 1; // Número de slides que se mueven por vez

let sliderWidth = slideWidth * slides.length; // Ancho total del slider
slider.style.width = sliderWidth + "px"; // Establecemos el ancho del slider

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide -= slideStep;
    if (currentSlide < 0) currentSlide = 0;
    slider.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < slides.length - slideVisible) {
    currentSlide += slideStep;
    if (currentSlide > slides.length - slideVisible)
      currentSlide = slides.length - slideVisible;
    slider.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
  }
});

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

const open2 = document.getElementById('open2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');

open2.addEventListener('click', () => {
  modal_container2.classList.add('show');  
});

close2.addEventListener('click', () => {
  modal_container2.classList.remove('show');
});

const open3 = document.getElementById('open3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('close3');

open3.addEventListener('click', () => {
  modal_container3.classList.add('show');  
});

close3.addEventListener('click', () => {
  modal_container3.classList.remove('show');
});

const open4 = document.getElementById('open4');
const modal_container4 = document.getElementById('modal_container4');
const close4 = document.getElementById('close4');

open4.addEventListener('click', () => {
  modal_container4.classList.add('show');  
});

close4.addEventListener('click', () => {
  modal_container4.classList.remove('show');
});

const open5 = document.getElementById('open5');
const modal_container5 = document.getElementById('modal_container5');
const close5 = document.getElementById('close5');

open5.addEventListener('click', () => {
  modal_container5.classList.add('show');  
});

close5.addEventListener('click', () => {
  modal_container5.classList.remove('show');
});

const open6 = document.getElementById('open6');
const modal_container6 = document.getElementById('modal_container6');
const close6 = document.getElementById('close6');

open6.addEventListener('click', () => {
  modal_container6.classList.add('show');  
});

close6.addEventListener('click', () => {
  modal_container6.classList.remove('show');
});

const open7 = document.getElementById('open7');
const modal_container7 = document.getElementById('modal_container7');
const close7 = document.getElementById('close7');

open7.addEventListener('click', () => {
  modal_container7.classList.add('show');  
});

close7.addEventListener('click', () => {
  modal_container7.classList.remove('show');
});

const open8 = document.getElementById('open8');
const modal_container8 = document.getElementById('modal_container8');
const close8 = document.getElementById('close8');

open8.addEventListener('click', () => {
  modal_container8.classList.add('show');  
});

close8.addEventListener('click', () => {
  modal_container8.classList.remove('show');
});

const open9 = document.getElementById('open9');
const modal_container9 = document.getElementById('modal_container9');
const close9 = document.getElementById('close9');

open9.addEventListener('click', () => {
  modal_container9.classList.add('show');  
});

close9.addEventListener('click', () => {
  modal_container9.classList.remove('show');
});

const open10 = document.getElementById('open10');
const modal_container10 = document.getElementById('modal_container10');
const close10 = document.getElementById('close10');

open10.addEventListener('click', () => {
  modal_container10.classList.add('show');  
});

close10.addEventListener('click', () => {
  modal_container10.classList.remove('show');
});

const open11 = document.getElementById('open11');
const modal_container11 = document.getElementById('modal_container11');
const close11 = document.getElementById('close11');

open11.addEventListener('click', () => {
  modal_container11.classList.add('show');  
});

close11.addEventListener('click', () => {
  modal_container11.classList.remove('show');
});

const open12 = document.getElementById('open12');
const modal_container12 = document.getElementById('modal_container12');
const close12 = document.getElementById('close12');

open12.addEventListener('click', () => {
  modal_container12.classList.add('show');  
});

close12.addEventListener('click', () => {
  modal_container12.classList.remove('show');
});

const open13 = document.getElementById('open13');
const modal_container13 = document.getElementById('modal_container13');
const close13 = document.getElementById('close13');

open13.addEventListener('click', () => {
  modal_container13.classList.add('show');  
});

close13.addEventListener('click', () => {
  modal_container13.classList.remove('show');
});

const open14 = document.getElementById('open14');
const modal_container14 = document.getElementById('modal_container14');
const close14 = document.getElementById('close14');

open14.addEventListener('click', () => {
  modal_container14.classList.add('show');  
});

close14.addEventListener('click', () => {
  modal_container14.classList.remove('show');
});