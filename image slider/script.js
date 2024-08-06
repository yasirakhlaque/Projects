const slider = document.querySelector('.slider');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const images = document.querySelectorAll('.slider img');

let slideIdx = 0;

function updateSliderPosition() {
    slider.style.transform = `translateX(${-slideIdx * 100}%)`;
}

right.addEventListener('click', function() {
    slideIdx = (slideIdx + 1) % images.length;
    updateSliderPosition();
});

left.addEventListener('click', function() {
    slideIdx = (slideIdx - 1 + images.length) % images.length;
    updateSliderPosition();
});
