

// start  --------MODAL------------
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

// end ----------MODAL------------------




// start ------------PASSWORDSTYLE------------------
const acessPasswords = document.querySelectorAll('.definicoes__password');
const shows = document.querySelectorAll('.open-eye');
const hides = document.querySelectorAll('.close-eye');

for(let index = 0; index < shows.length; index ++){
    shows[index].addEventListener("click", ()=>{
        if((acessPasswords[index].type == 'password')){
            acessPasswords[index].type = 'text';
            shows[index].style.display = 'none';
            hides[index].style.display = 'block';
    
        }

    })


}

for(let index = 0; index < hides.length; index ++){
    hides[index].addEventListener("click", ()=>{
        hides[index].style.display = 'none';
        shows[index].style.display = 'block';
        acessPasswords[index].type = 'password';


    })


}


//end -----------------PASSWORDSTYLE-------------------