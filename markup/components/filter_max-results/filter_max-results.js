$(document).on('click', '.btn_p', function () {
    $('.btn_p').removeClass('active');
    $(this).addClass('active');
});

$(document).on('click', '.btn_p.params-plan', function () {
    $('.apr_grid').removeClass('active');
    $('.apr_plan').addClass('active');
    $('.max_filter').removeClass('active');
    $('.min_filter').addClass('active');
    $('.min_filter .bt').removeClass('active');
    $('.min_filter .first-type').addClass('active');
    $('.slick-current').css('width', '100%');




    $('.plans-standart').slick('unslick').slick({
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToSlide: 1,
        fade: true,
        cssEase: 'ease',
        arrows: false,
        asNavFor: '.plans-10',

    });

    $('.plans-10').slick('unslick').slick({
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToSlide: 1,
        fade: true,
        cssEase: 'ease',
        arrows: true,
        asNavFor: '.plans-standart',
        prevArrow: $('.prev-plan'),
        nextArrow: $('.next-plan'),
    });
    // setTimeout(function() {
        var current = $('.min_filter .elem.active').attr('data-section');

        $('.plans-standart').slick('slickGoTo', current-1, true);
        activeSection();
    // }, 100)
    $('.plans-10').removeClass('active');
    $('.plans-standart').addClass('active');
});

$(document).on('click', '.btn_p.params-grid', function () {
    $('.apr_plan').removeClass('active');
    $('.apr_grid').addClass('active');
    $('.min_filter').removeClass('active');
    $('.max_filter').addClass('active');

    // $('.filter_room, .filter_area').removeClass('active');

    var result = {
        section: '1',
        flor: ['', ''],
        area: [70, 150],
        room: ['', '', '', '', '']
    };

    result.section = $('.elem.active').attr('data-section');
    result.flor = ['', ''];
    result.area = [30, 200];
    result.room = ['', '', '', '', ''];
    // getCard(result);
    //TODO comment that for filters not to update when parameters are clicked; fix that later


});

$(document).on('click', '.open_filter', function() {
    if ($('.max_filter').hasClass('active')) {
        $('.max_filter').addClass('opened');
    } else {
        $('.min_filter').addClass('opened');
    }

});

$(document).on('click', '.opened>.close_button', function() {
    $('.max_filter').removeClass('opened');
    $('.min_filter').removeClass('opened');
})

