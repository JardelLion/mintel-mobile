//modal
const myButtonModalAgendar = document.querySelector(".modal-agendar");
const myModalAgendar = document.getElementById("myModal-agendar");
const myOverlayAgendar = document.getElementById("myOverlay-agendar");
const closeBtnAgendar = document.querySelector(".close-agendar");

myButtonModalAgendar.addEventListener("click", function() {
  myModalAgendar.style.display = "block";
  myOverlayAgendar.style.display = "block";
});

myOverlayAgendar.addEventListener("click", function() {
  myModalAgendar.style.display = "none";
  myOverlayAgendar.style.display = "none";
});

closeBtnAgendar.addEventListener("click", function() {
  myModalAgendar.style.display = "none";
  myOverlayAgendar.style.display = "none";
 });


