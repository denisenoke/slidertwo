let totalSlide = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(800px * ${totalSlide})`;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlide -1;
    }

    updateMargin();
}

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlide -1)) {
        currentSlide = 0;
    }

    updateMargin();
}

function updateMargin() {
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 2000);
