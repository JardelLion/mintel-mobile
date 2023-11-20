//modal
const myButtonModals = document.querySelectorAll(".modal-send");
const myModals = document.querySelectorAll(".modal");
const myOverlays = document.querySelectorAll(".overlay");
const closeBtns = document.querySelectorAll(".close");


for(let i = 0; i < myButtonModals.length; i++){
    myButtonModals[i].addEventListener("click", () => {
        myModals[i].style.display = "block";
        myOverlays[i].style.display = "block";

    })
}


for(let i = 0; i < myOverlays.length; i++){
    myOverlays[i].addEventListener("click", () => {
        myModals[i].style.display = "none";
        myOverlays[i].style.display = "none";

    })
}


for(let i = 0; i < closeBtns.length; i++){
    closeBtns[i].addEventListener("click", () => {
        myModals[i].style.display = "none";
        myOverlays[i].style.display = "none";

    })
}



