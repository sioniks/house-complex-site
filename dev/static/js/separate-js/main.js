$(document).on('click', '.up_btn', function () {
    $("html, body").animate({scrollTop: 0}, 600);
    return false;
});

$(document).scroll(function () {
    if (scrollY > 500) {
        $('.up_btn').show();
    }
    else {
        $('.up_btn').hide();
    }
});



var result = {
    section: '1',
    flor: ['', ''],
    area: [30, 200],
    room: ['', '', '', '', '']
};
var timerSpeed = 200

function getCard(result) {
    // console.log(result);
    var $container = $('#apr_grid');
    // $container.empty();

    var $tempalte = $('#cart_tmpl');
    $.ajax({
        url: "api/sections",
        type: "POST",
        dataType: "json",
        data: {
            result,
        },
        success: function (data) {
            var data2 = data.area;
            var mini = +data2.min;
            var maxi = +data2.max;

            if (mini == maxi) {
                maxi = mini + 0.00000001;
            }
            // console.log(mini);
            // console.log(maxi);

            range.noUiSlider.updateOptions({
                range: {
                    min: mini,
                    max: maxi
                },
                start: [mini, maxi]
            });


            data = data.result;


            var i = 0;
            $container.empty();
            for (; i < data.length; i++) {
                $tempalte.tmpl(data[i]).appendTo('#apr_grid');

                // console.log(data[i].rooms_count);
                switch (data[i].rooms_count) {
                    case '1':
                        $('.room-1').removeClass('no-rooms');
                        // console.log(1001);
                        break;
                    case '2':
                        $('.room-2').removeClass('no-rooms');
                        // console.log(2001);
                        break;
                    case '3':
                        $('.room-3').removeClass('no-rooms');
                        // console.log(3001);
                        break;
                    case '4':
                        $('.room-4').removeClass('no-rooms');
                        // console.log(4001);
                        break;
                    case '5':
                        $('.room-5').removeClass('no-rooms');
                        // console.log(5001);
                        break;
                    default:
                    // console.log(6001);

                }
            }
        }

    });

}

$(document).on('click', '.elem', function () {
    $('.room_count .rm').addClass('no-rooms');
    result.section = $(this).attr('data-section');
    result.flor = ['', ''];
    result.area = [30, 200];
    result.room = ['', '', '', '', ''];

    // console.log(result);
    getCard(result);

    faSection2(result.section);

    setTimeout(function () {
        var minAr = $('.noUi-handle-lower .noUi-tooltip').text();
        var maxAr = $('.noUi-handle-upper .noUi-tooltip').text();

        // $('#lower-value').html(minAr + ' м<sup>2</sup>');
        // $('#upper-value').html(maxAr + ' м<sup>2</sup>');

    }, 300);

});


$(document).on('click', '.type_button .bt', function () {
    $('.room_count .rm').addClass('no-rooms');
    $('.room_count .rm').removeClass('active');
    var value1 = $('.first-type').attr('data-flor');
    var value2 = $('.second-type').attr('data-flor');


    if ($('.max_filter .first-type.active').length) {

        result.flor.splice(0, 1, value1);
        // console.log(result.flor);
    } else {
        result.flor.splice(0, 1, " ");
        // console.log(result.flor);
    }

    if ($('.max_filter .second-type.active').length) {
        result.flor.splice(1, 1, value2)

        // console.log(result.flor);
    } else {
        result.flor.splice(1, 1, " ")
        // console.log(result.flor);
    }
    result.room = ['', '', '', '', ''];
    result.area = [30, 200];
    getCard(result);


    setTimeout(function () {
        var minAr = $('.noUi-handle-lower .noUi-tooltip').text();
        var maxAr = $('.noUi-handle-upper .noUi-tooltip').text();

        // $('#lower-value').html(minAr + ' м<sup>2</sup>');
        // $('#upper-value').html(maxAr + ' м<sup>2</sup>');

    }, 300);
});

$(document).on('click', '.filter_room .rm', function () {
    var rm1 = $('.room-1').attr('data-room');
    var rm2 = $('.room-2').attr('data-room');
    var rm3 = $('.room-3').attr('data-room');
    var rm4 = $('.room-4').attr('data-room');
    var rm5 = $('.room-5').attr('data-room');

    if ($('.room-1').hasClass('active')) {
        result.room.splice(0, 1, rm1)
    } else {
        result.room[0] = '';
    }

    if ($('.room-2').hasClass('active')) {
        result.room.splice(1, 1, rm2)
    } else {
        result.room[1] = '';
    }

    if ($('.room-3').hasClass('active')) {
        result.room.splice(2, 1, rm3)
    } else {
        result.room[2] = '';
    }

    if ($('.room-4').hasClass('active')) {
        result.room.splice(3, 1, rm4)
    } else {
        result.room[3] = '';
    }

    if ($('.room-5').hasClass('active')) {
        result.room.splice(4, 1, rm5)
    } else {
        result.room[4] = '';
    }
    getCard(result);
});


// $(document).ready(function() {
//
//
//     var $elems = $('.elem').length;
//     if ($elems > 0) {
//         // setTimeout(function() {
//         var result = {
//             section: '1',
//             flor: ['', ''],
//             area: [30, 200],
//             room: ['', '', '', '', '']
//         };
//         result.section = $('.elem.active').attr('data-section');
//         getCard(result);
//
//     }
// });

//---------------------------page vertical slider
var minWidth = document.documentElement.clientWidth;
if (minWidth > 1023) {
    var clientSlider;
    if ($('.page__scroll').length) {
        $(document).on('mousewheel', function (e) {

            e.preventDefault();
            var delta = e.deltaY;
            pageSlider(delta);
        });

        $(document).on('touchstart', function (e) {

            clientSlider = e.changedTouches[0].pageY
        })
        $(document).on('touchend', function (e) {
            // e.preventDefault();
            // console.log(clientSlider, e.changedTouches[0].pageY)
            if (clientSlider - 30 > e.changedTouches[0].pageY) {
                pageSlider(-1)
            }
            else if (clientSlider + 30 < e.changedTouches[0].pageY) {
                pageSlider(1)
            }
        });
        $(document).on("keydown", function (e) {
            // if (!scrolling) {
            if (e.which === 38) {
                pageSlider(1);
            } else if (e.which === 40) {
                pageSlider(-1);
            }
            // }
        });

    }

    var scroll = $(document).scrollTop();
    var pause = false;

// var pause = true;
    function pageSlider(delta) {
        if (!pause) {

            var elem = $('.scroll_slide.active');
            if (delta > 0 && elem.prev().length) {
                
                pause = true;
                $('.scroll_slide').removeClass('active');
                setTimeout(function () {
                    elem.prev().addClass('active');
                    if ($('.footer').hasClass('active')) {
                        $('.footer').removeClass('active');
                        
                    }
                    setTimeout(function () {
                        pause = false;
                    }, 1500)

                    $('.active .scroll-bottom').addClass('vs');

                    if (player && playerLoad) {
                        // console.log(player)
                        player.pauseVideo();
                        closeVideo();
                    }

                }, timerSpeed)
            }
            else if (delta < 0 && elem.next().length) {
                
                pause = true;
                $('.scroll_slide').removeClass('active');
                setTimeout(function () {
                    elem.next().addClass('active');
                    if ($('.last_slide').hasClass('active')) {
                        $('.footer').addClass('active');
                    }
                    setTimeout(function () {
                        pause = false;
                    }, 1500)

                    $('.active .scroll-bottom').removeClass('vs');


                    if (player && playerLoad) {
                        // console.log(player)
                        player.pauseVideo();
                        closeVideo();
                    }
                }, timerSpeed)
            }
        }

    }
}

if ("onhashchange" in window) {
    window.onhashchange = function () {
        hashChange()
    }
}
$(document).ready(function () {

    $('body').removeClass('no-anim');
    if ($('.apr_info').length) {
        var currentApr = window.location.href.split('/').pop();
        $('.plan1 ~ .plan1col.active a').each(function () {
            var aprLink = $(this).attr('href');
            if (aprLink == ('./' + currentApr)) {
                $(this).addClass('active');
            }
        })
        $('.plan2 ~ .plan2col.active a').each(function () {
            var aprLink = $(this).attr('href');
            if (aprLink == ('./' + currentApr)) {
                $(this).addClass('active');
            }
        })
    }

    hashChange()


    if ($('.last_slide').hasClass('active')) {
        $('.footer').addClass('active');
    }




})


function hashChange() {
    switch (window.location.hash.replace(/-/gi, '')) {
        case '#sectionA':
            result.section = 1;
            getCard(result);
            faSection(1);
            activeSection();
            break;
        case '#sectionB':
            result.section = 2;
            getCard(result);
            faSection(2);
            activeSection();
            break;
        case '#sectionV':
            result.section = 3;
            getCard(result);
            faSection(3);
            activeSection();
            break;
        case '#sectionG':
            result.section = 4;
            getCard(result);
            faSection(4);
            activeSection();
            break;
        case '#sectionD':
            result.section = 5;
            getCard(result);
            faSection(5);
            activeSection();
            break;
        default:
            '#sectionA';
    }
}

function faSection(current) {

    $('.max_filter .elem').removeClass('active');
    $(".max_filter .elem[data-section='" + current + "']").addClass('active');

    $('.min_filter .elem').removeClass('active');
    $(".min_filter .elem[data-section='" + current + "']").addClass('active');
    setTimeout(function () {
        $('.plans-standart').slick('slickGoTo', current - 1, true);
    }, 1000)

}


function faSection2(current) {

    switch (current) {
        case '1':
            window.location.hash = '#section-A';
            result.section = 1;
            getCard(result);
            faSection(1);
            activeSection();
            break;
        case '2':
            window.location.hash = '#section-B';
            result.section = 2;
            getCard(result);
            faSection(2);
            activeSection();
            break;
        case '3':
            window.location.hash = '#section-V';
            result.section = 3;
            getCard(result);
            faSection(3);
            activeSection();
            break;
        case '4':
            window.location.hash = '#section-G';
            result.section = 4;
            getCard(result);
            faSection(4);
            activeSection();
            break;
        case '5':
            window.location.hash = '#section-D';
            result.section = 5;
            getCard(result);
            faSection(5);
            activeSection();
            break;
        default:
            1;
    }

}

