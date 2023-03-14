const trainMove = document.querySelector(".first .trainMove");
const buttons   = document.querySelectorAll(".first .cont-buttons button");
const contBox   = document.querySelectorAll(".first .cont-box");

buttons.forEach((button, index)=>{
    button.addEventListener("click", ()=>{
        moveTrain(index);
        buttons.forEach(bt=>{
            bt.classList.remove("active");
        })
        button.classList.add("active");
        contBox.forEach(ct=>{
            ct.style.opacity = 0;
        });
        contBox[index].style.opacity = 1;
    });
});

function moveTrain(number) {
    trainMove.style.transform = `translateX(-${number*20}%)`;
}