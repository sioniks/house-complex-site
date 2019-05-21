$('.docs_list').each(function () {
   var  _this =  $(this)
    _this.slick({
        infinite: true,
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: _this.siblings('.prev-doc'),
        nextArrow: _this.siblings('.next-doc'),
    });

});



$('.certificate__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: '60px',
    arrows: false,
    dots: false,
});

$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        //"zoom",
        //"share",
        //"slideShow",
        //"fullScreen",
        //"download",
        //"thumbs",
        "close"
    ],

});