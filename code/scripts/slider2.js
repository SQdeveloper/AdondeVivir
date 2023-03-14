const sliderMove2 = document.querySelector(".third .sliderMove");
const buttons2    = document.querySelectorAll(".third button");
let number2 = 0, limitSup2 = 6;

buttons2[0].addEventListener("click",()=>{
    number2--;
    moveSlider2();
    if(number2 == 0) {
        buttons2[0].style.visibility = "hidden";
    }
    buttons2[1].style.visibility = "visible";
});

buttons2[1].addEventListener("click",()=>{
    number2++;
    moveSlider2();
    if(number2 == limitSup2) {
        buttons2[1].style.visibility = "hidden";
    }
    buttons2[0].style.visibility = "visible";
});

function moveSlider2() {
    sliderMove2.style.transform = `translateX(-${number2*10}%)`;
}

if(window.innerWidth <= 650) {
    limitSup2 = 8;
}
else if(window.innerWidth <= 1000) {
    limitSup2 = 7;
}