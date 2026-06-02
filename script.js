// MOBILE MENU TOGGLE
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".navbar ul");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// IMAGE POPUP
function openImage(imageSrc){
  document.getElementById("imagePopup").style.display = "flex";
  document.getElementById("popupImage").src = imageSrc;
}

function closeImage(){
  document.getElementById("imagePopup").style.display = "none";
}