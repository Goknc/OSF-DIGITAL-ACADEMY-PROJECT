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
  $(".owl-one").owlCarousel({
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

$('.list-item a').attr('href','../404/404.html')
$('.footer-col li a').attr('href','../404/404.html')


let carts = document.querySelectorAll('.add-to-cart')


for(let i = 0; i < carts.length; i++){
carts[i].addEventListener('click', () =>{
  cartNumbers()
})
} 

function onLoadCartNumbers(){
let productNumbers = localStorage.getItem('cartNumbers')

if(productNumbers){
 document.querySelector('.minicart p').textContent = productNumbers
}
}

function cartNumbers() {
let productNumbers = localStorage.getItem('cartNumbers')


productNumbers = parseInt(productNumbers)
if(productNumbers){
  localStorage.setItem('cartNumbers',productNumbers+1)

  document.querySelector('.minicart p').textContent = productNumbers + 1 



}else{
  localStorage.setItem('cartNumbers',1)
  
  document.querySelector('.minicart p').textContent = 1


}

}

let wishlists = document.querySelectorAll('.add-to-wishlists')


for(let i = 0; i < wishlists.length; i++){
wishlists[i].addEventListener('click', () =>{
  wishlistNumbers()
})
} 

function onLoadWishlistNumbers(){
let wishlistProductNumbers = localStorage.getItem('wishlistNumbers')

if(wishlistProductNumbers){
  document.querySelector('.wishlist p').textContent = wishlistProductNumbers

}
}

function wishlistNumbers() {
let wishlistProductNumbers = localStorage.getItem('wishlistNumbers')


wishlistProductNumbers = parseInt(wishlistProductNumbers)
if(wishlistProductNumbers){
  localStorage.setItem('wishlistNumbers',wishlistProductNumbers+1)
  document.querySelector('.wishlist p').textContent = wishlistProductNumbers + 1;


}else{
  localStorage.setItem('wishlistNumbers',1)
  document.querySelector('.wishlist p').textContent = 1;
}

}

onLoadCartNumbers()
onLoadWishlistNumbers()

/*** PRODUCT TILE *****/

var products = [{
  "url": "https://picsum.photos/200/200?random=1",
  "name": "TELEVISION",
  "price": "$ 1000"
},
{
  "url": "https://picsum.photos/200/200?random=2",
  "name": "COMPUTER",
  "price": "$ 1500"
},
{
  "url": "https://picsum.photos/200/200?random=3",
  "name": "FRIDGE",
  "price": "$ 800"
},
{
  "url": "https://picsum.photos/200/200?random=4",
  "name": "CARPET",
  "price": "$ 100"
},
{
  "url": "https://picsum.photos/200/200?random=5",
  "name": "DESK",
  "price": "$ 50"
},
{
  "url": "https://picsum.photos/200/200?random=6",
  "name": "PHONE",
  "price": "$ 1000"
},
{
  "url": "https://picsum.photos/200/200?random=7",
  "name": "HEADPHONE",
  "price": "$ 500"
},
{
  "url": "https://picsum.photos/200/200?random=8",
  "name": "KEYBOARD",
  "price": "$ 400"
},
{
  "url": "https://picsum.photos/200/200?random=9",
  "name": "MOUSE",
  "price": "$ 200"
},
{
  "url": "https://picsum.photos/200/200?random=10",
  "name": "BOOK",
  "price": "$ 10"
},
{
  "url": "https://picsum.photos/200/200?random=11",
  "name": "PARFUME",
  "price": "$ 50"
},
{
  "url": "https://picsum.photos/200/200?random=12",
  "name": "DUMBELL",
  "price": "$ 30"
}
]

var jsonVeri = JSON.stringify(products)
var veri = JSON.parse(jsonVeri)

for (var i = 0; i < veri.length; i++) {
$('.card-title')[i].innerHTML = veri[i].name
$('#facilities img').eq(i).attr('src', veri[i].url)
$('.card-text')[i].innerHTML = veri[i].price
}

$(document).ready(function () {
$(".content").slice(0, 6).show();
$("#loadMore").on("click", function (e) {
  e.preventDefault();
  $(".content:hidden").slice(0, 4).slideDown();
  if ($(".content:hidden").length == 0) {
    $("#loadMore").text("No Content").addClass("noContent");
  }
});
})


$(document).ready(function () {
$('.card img').hover(
    function () {
      $(this).css({
        'background-color': 'green',
        'opacity': '0.5'
      })
    },
    function () {
      $(this).css({'opacity': '1'})
    }
  )
},  
)

$(document).ready(function () {
$('.card-body').hover(
    function () {
      $(this).siblings('.card img').css({
        'background-color': 'green',
        'opacity': '0.5'
      })
    },
    function () {
      $(this).siblings('.card img').css({'opacity': '1'})
    }
  )
},  
)

$(document).ready(function () {
$('.card img').hover(
    function () {
      $(this).siblings('.card-body').children('button').css({
        'display':'inline-block'
      })
    },
    function () {
      $(this).siblings('.card-body').children('button').css({'display':'none'})
    }
  )
},  
)


$(document).ready(function () {
$('.card-body').hover(
    function () {
      $(this).children('button').css({
        'display':'inline-block'
      })
    },
    function () {
      $(this).children('button').css({'display':'none'})
    }
  )
},  
)

$(document).ready(function () {
$('.card-left, .card-right').hover(
    function () {
      $(this).css({
        'display':'inline-block'
      })
    },
    function () {
      $(this).css({'display':'none'})
    }
  )
},  
)



if($(window).width() < 854){
  $('#facilities .row').addClass('owl-carousel')
  $('#facilities .row').addClass('owl-theme')
}else{
  $('#facilities .row').removeClass('owl-carousel')
  $('#facilities .row').removeClass('owl-theme')
}


$(function() {
var owl = $('.owl-carousel'),
    owlOptions = {
        margin: 10,
        responsive: {
            0: {
                nav: false,
                dotsEach: 4,
                items: 1,
                loop:true,
                dots:true,
                autoplay:false,
                autoplaySpeed:1000,
                smartSpeed:1500,
                autoplayHoverPause:true,
                center: true
            },
        }
    };

if ( $(window).width() < 767 ) {
    var owlActive = owl.owlCarousel(owlOptions);
} else {
    owl.addClass('off');
}

$(window).resize(function() {
    if ( $(window).width() < 767 ) {
        if ( $('.owl-carousel').hasClass('off') ) {
            var owlActive = owl.owlCarousel(owlOptions);
            owl.removeClass('off');
        }
    } else {
        if ( !$('.owl-carousel').hasClass('off') ) {
            owl.addClass('off').trigger('destroy.owl.carousel');
            owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
        }
    }
});
});


$('.owl-two').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:4,
  dots:false,
  slideBy:4,
  autoplay:true,
  autoplayTimeout:5000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      },
      1200:{
        items:4
    }
  }
})