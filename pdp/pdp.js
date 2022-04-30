const menu = document.querySelector(".menu")
const menuMain = menu.querySelector(".menu-main")
const goBack = menu.querySelector(".go-back")
const menuTrigger = document.querySelector(".mobile-menu-trigger")
const closeMenu = menu.querySelector(".mobile-menu-close")

let subMenu

menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children")
    showSubMenu(hasChildren)
  }
})

goBack.addEventListener("click", () => {
  hideSubMenu()
})

menuTrigger.addEventListener("click", () => {
  toggleMenu()
})

closeMenu.addEventListener("click", () => {
  toggleMenu()
})

document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu()
})

function toggleMenu() {
  menu.classList.toggle("active")
  document.querySelector(".menu-overlay").classList.toggle("active")
}

function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu")
  subMenu.classList.add("active")
  subMenu.style.animation = "slideLeft 0.5s ease forwards"
  const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent
  menu.querySelector(".current-menu-title").innerHTML = menuTitle
  menu.querySelector(".mobile-menu-head").classList.add("active")
}

function hideSubMenu() {


  subMenu.style.animation = "slideRight 0.5s ease forwards"
  setTimeout(() => {
    subMenu.classList.remove("active")
  }, 300)
  menu.querySelector(".current-menu-title").innerHTML = ""
  menu.querySelector(".mobile-menu-head").classList.remove("active")
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu()
    }
  }
}





/*********  THUMBNAIL TO PICTURE SECTION **************/

$('.thumbnail').on('click', function () {
  var clicked = $(this);
  var newSelection = clicked.data('big');
  var $img = $('.primary').css("background-image", "url(" + newSelection + ")");
  clicked.parent().find('.thumbnail').removeClass('selected');
  clicked.addClass('selected');
  $('.primary').empty().append($img.hide().fadeIn('slow'));
});

/*************** INCREASE DECREASE BUTTON SECTION  **************/
jQuery(document).ready(($) => {
  $('.quantity').on('click', '.plus', function (e) {
    let $input = $(this).prev('input.qty');
    let val = parseInt($input.val());
    $input.val(val + 1).change();
  });

  $('.quantity').on('click', '.minus',
    function (e) {
      let $input = $(this).next('input.qty');
      var val = parseInt($input.val());
      if (val > 0) {
        $input.val(val - 1).change();
      }
    });
});


/********* READ MORE SECTION ************/
let wordLimit = 100;
let content = document.querySelector('.content')


if (content.textContent.length < wordLimit) {
  content.nextElementSibling.style.display = "none"
} else {
  let displayText = content.textContent.slice(0, wordLimit)
  let moreText = content.textContent.slice(wordLimit)
  content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`
}

function readMore(anc) {
  let post = anc.parentElement
  post.querySelector(".dots").classList.toggle("hide")
  post.querySelector(".more").classList.toggle("hide")
  anc.textContent == "Read More" ? anc.textContent = "Read Less" : anc.textContent = "Read More"
}

/************* PREVENTING USER FROM ENTERING ANYTHING OTHER THAN NUMBER *********************/
function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

$('.list-item a').attr('href', '../404/404.html')
$('.footer-col li a').attr('href', '../404/404.html')


let carts = document.querySelectorAll('.add-to-cart')


for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers()
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers')

  if (productNumbers) {
    document.querySelector('.minicart p').textContent = productNumbers
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers')


  productNumbers = parseInt(productNumbers)
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1)

    document.querySelector('.minicart p').textContent = productNumbers + 1



  } else {
    localStorage.setItem('cartNumbers', 1)

    document.querySelector('.minicart p').textContent = 1


  }

}

let wishlists = document.querySelectorAll('.add-to-wishlists')


for (let i = 0; i < wishlists.length; i++) {
  wishlists[i].addEventListener('click', () => {
    wishlistNumbers()
  })
}

function onLoadWishlistNumbers() {
  let wishlistProductNumbers = localStorage.getItem('wishlistNumbers')

  if (wishlistProductNumbers) {
    document.querySelector('.wishlist p').textContent = wishlistProductNumbers

  }
}

function wishlistNumbers() {
  let wishlistProductNumbers = localStorage.getItem('wishlistNumbers')


  wishlistProductNumbers = parseInt(wishlistProductNumbers)
  if (wishlistProductNumbers) {
    localStorage.setItem('wishlistNumbers', wishlistProductNumbers + 1)
    document.querySelector('.wishlist p').textContent = wishlistProductNumbers + 1;


  } else {
    localStorage.setItem('wishlistNumbers', 1)
    document.querySelector('.wishlist p').textContent = 1;
  }

}

onLoadCartNumbers()
onLoadWishlistNumbers()




$('.owl-two').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 4,
  dots: false,
  slideBy: 4,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
})

$('.footer-col .dropdown').click(function () {
  var clicks = $(this).data('clicks');
  if (clicks) {
    $('.footer-col li').css('display', 'block')
  } else {
    $('.footer-col li').css('display', 'none')

  }
  $(this).data("clicks", !clicks);

})
$(function () {
  $("#printable").find('.print').on('click', function () {
    $.print("#printable");
  });
});