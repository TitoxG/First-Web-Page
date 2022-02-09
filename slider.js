const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];


const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-120%";
    slider.style.transition = "all .4s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-60%";
    }, 200);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all .4s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-60%";
    }, 200);
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});
