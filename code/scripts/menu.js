const buttonClose = document.querySelector("header .close");
const buttonOpen  = document.querySelector("header .toggle");

buttonOpen.addEventListener("click", ()=>{
        buttonClose.style.display = "block";
        buttonOpen.style.display = "none";
        document.body.style.overflow = "hidden";
});

buttonClose.addEventListener("click", ()=>{
    buttonOpen.style.display = "block";
    buttonClose.style.display = "none";
    document.body.style.overflow = "scroll";
});