const menu = document.querySelector(".menu")
const menuMain = menu.querySelector(".menu-main")
const goBack = menu.querySelector(".go-back")
const menuTrigger = document.querySelector(".mobile-menu-trigger")
const closeMenu = menu.querySelector(".mobile-menu-close")

//const closeMenu = document.querySelector(".mobile-menu-close")

let subMenu

menuMain.addEventListener("click", (e) => {
  if(!menu.classList.contains("active")){
    return;
  }
  if(e.target.closest(".menu-item-has-children")){
    const hasChildren = e.target.closest(".menu-item-has-children")
    showSubMenu(hasChildren)
  }
})

goBack.addEventListener("click",() => {
  hideSubMenu()
})

menuTrigger.addEventListener("click",() => {
  toggleMenu()
})

closeMenu.addEventListener("click",() => {
  toggleMenu()
})

document.querySelector(".menu-overlay").addEventListener("click",() => {
  toggleMenu()
})

function toggleMenu(){
  menu.classList.toggle("active")
  document.querySelector(".menu-overlay").classList.toggle("active")
}

function showSubMenu(hasChildren){
  subMenu = hasChildren.querySelector(".sub-menu")
  subMenu.classList.add("active")
  subMenu.style.animation = "slideLeft 0.5s ease forwards"
  const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent
  menu.querySelector(".current-menu-title").innerHTML = menuTitle
  menu.querySelector(".mobile-menu-head").classList.add("active")
}

function hideSubMenu(){


  subMenu.style.animation = "slideRight 0.5s ease forwards"
  setTimeout(() =>{
    subMenu.classList.remove("active")
  },300)
  menu.querySelector(".current-menu-title").innerHTML = ""
  menu.querySelector(".mobile-menu-head").classList.remove("active")
}

window.onresize = function(){
  if(this.innerWidth > 991){
    if(menu.classList.contains("active")){
      toggleMenu()
    }
  }
}


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      dots:true,
      autoplay:true,
      autoplaySpeed:1000,
      smartSpeed:1500,
      autoplayHoverPause:true,
      center: true
  });
});




/******************** MODAL **************/


var modal = document.getElementById('open-modal');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showPass() {
    var temp = document.getElementById("psw");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}




const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 10000);

function closeDialog() {
  cookieContainer.style.display = "none"
}