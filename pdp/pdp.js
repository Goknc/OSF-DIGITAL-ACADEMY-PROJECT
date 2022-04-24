/*********  THUMBNAIL TO PICTURE SECTION **************/

$('.thumbnail').on('click', function() {
    var clicked = $(this);
    var newSelection = clicked.data('big');
    var $img = $('.primary').css("background-image","url(" + newSelection + ")");
    clicked.parent().find('.thumbnail').removeClass('selected');
    clicked.addClass('selected');
    $('.primary').empty().append($img.hide().fadeIn('slow'));
  });

/*************** INCREASE DECREASE BUTTON SECTION  **************/
  jQuery(document).ready(($) => {
    $('.quantity').on('click', '.plus', function(e) {
        let $input = $(this).prev('input.qty');
        let val = parseInt($input.val());
        $input.val( val+1 ).change();
    });

    $('.quantity').on('click', '.minus', 
        function(e) {
        let $input = $(this).next('input.qty');
        var val = parseInt($input.val());
        if (val > 0) {
            $input.val( val-1 ).change();
        } 
    });
});


/********* READ MORE SECTION ************/
let wordLimit = 100;
let content = document.querySelector('.content')


if(content.textContent.length < wordLimit) {
    content.nextElementSibling.style.display = "none"
}else{
    let displayText = content.textContent.slice(0,wordLimit)
    let moreText = content.textContent.slice(wordLimit)
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`
}

function readMore(anc){
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