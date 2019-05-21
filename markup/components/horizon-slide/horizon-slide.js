

var slideIndexH = 1;
var counter = document.getElementById("horizon_count");


function plusSlidesH(n) {
    showSlidesH(slideIndexH += n);

    if (slideIndexH < 10) {
        counter.innerHTML = '0' + slideIndexH;
    } else {
        counter.innerHTML = slideIndexH;
    }

    setTimeout(function () {
        $('.one_slide-h .white_block').removeClass('show');
        $('.one_slide-h.active .white_block').addClass('show');
    }, 200);
}

function showSlidesH(n) {

    var slideHead = document.querySelectorAll(".one_slide-head");
    $('.one_slide-head').removeClass('active');
    if (n > slideHead.length) {slideIndexH = 1}
    if (n < 1) {slideIndexH = slideHead.length}

    // slideHead[slideIndexH - 1].classList.add('active');
    $(slideHead[slideIndexH - 1]).addClass('active');

    var slideText = document.querySelectorAll(".one_slide-text");
    $('.one_slide-text').removeClass('active');
    if (n > slideText.length) {slideIndexH = 1}
    if (n < 1) {slideIndexH = slideText.length}

    // slideText[slideIndexH - 1].classList.add('active');
    $(slideText[slideIndexH - 1]).addClass('active');
    var slides = document.querySelectorAll(".one_slide-h");

    if (n > slides.length) {slideIndexH = 1}
    if (n < 1) {slideIndexH = slides.length}

    $('.one_slide-h').removeClass('active');

    // slides[slideIndexH - 1].classList.add('active');
    $(slides[slideIndexH - 1]).addClass('active');

}


$(document).ready(function() {

    setTimeout(function () {

        showSlidesH(slideIndexH);
        $('.one_slide-h.active .white_block').addClass('show');
    }, 500);
})




