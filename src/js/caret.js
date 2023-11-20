
let caret = document.querySelectorAll('.caret');
    
let boxs = document.querySelectorAll(".client-delivery-btn--main")


for(let i = 0; i < boxs.length; i++){
       
        boxs[i].addEventListener("click", () => {
                caret[i].classList.toggle("caret-rotate")
        })
}


