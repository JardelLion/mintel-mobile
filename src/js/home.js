
let isActive = false;
const activeBtn = function(termsClass){
    let openText = document.querySelector("."+termsClass);
   
    if(!isActive){
        openText.style.display = 'block';
       
        isActive = true;

    }
    else {
        openText.style.display = 'none';
        
        isActive = false;

    }
    
    
}
