$(document).on('click', '.header_menu-button', function () {
    $(this).toggleClass('active');
    $('.header_menu__mobile').toggleClass('active');
    // $('.menu_subitem-mob').removeClass('active');
    // $('.menu_subitem-mob2').removeClass('active');
});

// $(document).on('click', '.menu_item:first-of-type', function () {
//     $('.menu_subitem-mob').toggleClass('active');
// });
//
// $(document).on('click', '.menu_item:nth-child(2)', function () {
//     $('.menu_subitem-mob2').toggleClass('active');
// });
//
// $(document).on('click', '.back_link', function () {
//     $('.menu_subitem-mob').removeClass('active');
//     $('.menu_subitem-mob2').removeClass('active');
// });


$(document).on('click', '.menu_subitem', function () {
    $('.menu_subitem-link').removeClass('current');
    $(this).find('.menu_subitem-link').addClass('current');
});



// $(document).on('click', '.link-off>.menu_item-link', function(off) {
//     off.preventDefault();
// })

// $(document).on('click', '.btn_history', function (e) {
//     e.preventDefault();
//     window.location.replace('/pro-nas/kontseptsiya#build_history');
//     // alert(123)
//     // window.open('/pro-nas/kontseptsiya#build_history');
//     window.location.reload();
// });

// $(document).on('click', '#btn_infra', function () {
//     location.href = '/pro-nas/kontseptsiya#infrastruktura';
//     // window.open('/pro-nas/kontseptsiya#infrastruktura');
//     window.location.reload();
// });

$(document).ready(function() {
   if (window.location.hash == '#build_history') {
       $('.scroll_slide').removeClass('active');
       $('.scroll_slide.history__slide').addClass('active');


   } else if (window.location.hash == '#infrastruktura') {
       $('.scroll_slide').removeClass('active');
       $('.scroll_slide.map__slide').addClass('active');

   } else if (window.location.hash == '#tehno') {
       $('.scroll_slide').removeClass('active');
       $('.scroll_slide.tehinfo__slide').addClass('active');

   }
});

// function build() {
//     window.location.href = '/pro-nas/kontseptsiya#build_history';
//     console.log(11111111);
//     window.location.reload();
// }
//
// function infra() {
//     window.location = '/pro-nas/kontseptsiya#infrastruktura';
//     console.log(22222222);
//     window.location.reload();
// }

$(document).on('click', '.btn_history', function () {

    setTimeout(function() {
        location.href = '/pro-nas/kontseptsiya#build_history';
        window.location.reload();
        $('.scroll_slide').removeClass('active');
        $('.scroll_slide.history__slide').addClass('active');
    }, 300);
});

$(document).on('click', '.btn_infra', function () {

    setTimeout(function() {
        location.href = '/pro-nas/kontseptsiya#infrastruktura';
        window.location.reload();
        $('.scroll_slide').removeClass('active');
        $('.scroll_slide.map__slide').addClass('active');
    }, 300);
});

$(document).on('click', '.btn_tehno', function () {

    setTimeout(function() {
        location.href = '/pro-nas/kontseptsiya#tehno';
        window.location.reload();
        $('.scroll_slide').removeClass('active');
        $('.scroll_slide.tehinfo__slide').addClass('active');
    }, 300);
});