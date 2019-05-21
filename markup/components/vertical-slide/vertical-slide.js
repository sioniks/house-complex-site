if ($('.one_slide').length > 0 ) {
    var slideIndex = 1;
    showSlides(slideIndex);


    function plusSlides(n) {
        // setTimeout(function() {
            showSlides(slideIndex += n);
        // }, 700);
        setTimeout(function() {
            $('.one_slide .white_block').removeClass('show');
            $('.one_slide.active .white_block').addClass('show');
        }, 200);

    }


    function showSlides(n) {
        var i;

        var slides = document.getElementsByClassName("one_slide");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}

        $('.one_slide').removeClass('active');

        slides[slideIndex-1].classList.add('active');
    }
}

$(document).ready(function() {
    $('.one_slide.active .white_block').addClass('show');
})
