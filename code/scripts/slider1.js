const sliderMove1 = document.querySelector(".second .sliderMove");
const buttons1    = document.querySelectorAll(".second button");
let number = 0, limitSup1 = 6;

buttons1[0].addEventListener("click",()=>{
    number--;
    moveSlider1();
    if(number == 0) {
        buttons1[0].style.visibility = "hidden";
    }
    buttons1[1].style.visibility = "visible";
});

buttons1[1].addEventListener("click",()=>{
    number++;
    moveSlider1();
    if(number == limitSup1) {
        buttons1[1].style.visibility = "hidden";
    }
    buttons1[0].style.visibility = "visible";
});

function moveSlider1() {
    sliderMove1.style.transform = `translateX(-${number*10}%)`;
}

if(window.innerWidth <= 650) {
    limitSup1 = 8;
}
else if(window.innerWidth <= 1000) {
    limitSup1 = 7;
}