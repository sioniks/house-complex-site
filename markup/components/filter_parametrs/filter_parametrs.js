$(document).ready(function() {
    var range = document.getElementById('area_slider');
    if ($('.area_slider').length > 0) {
        noUiSlider.create(range, {
            connect: true,
            start: [30, 200],
            tooltips: true,
            range: {
                'min': 30,
                'max': 200
            }
        });

        // var nodes = [
        //     document.getElementById('lower-value'), // 0
        //     document.getElementById('upper-value')  // 1
        // ];
        // range.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
        //     nodes[handle].innerHTML = values[handle] + ' м<sup>2</sup>';
        //
        // });

        range.noUiSlider.on('change', function () {

            var areaIndex1 = $('.noUi-handle-lower').attr('aria-valuetext');
            var areaIndex2 = $('.noUi-handle-upper').attr('aria-valuetext');

            result.area = [+areaIndex1, +areaIndex2];

            var $container = $('#apr_grid');

            var $tempalte = $('#cart_tmpl');
            $.ajax({
                url: "api/sections",
                type: "POST",
                dataType: "json",
                data: {
                    result,
                },
                success: function (data) {
                    // var data2 = data.area;
                    // var mini = +data2.min;
                    // var maxi = +data2.max;
                    //
                    // range.noUiSlider.updateOptions({
                    //     start: [mini, maxi]
                    // });


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


        });
    }

    setTimeout(function () {
        var minAr = $('.noUi-handle-lower .noUi-tooltip').text();
        var maxAr = $('.noUi-handle-upper .noUi-tooltip').text();

        // $('#lower-value').html(minAr + ' м<sup>2</sup>');
        // $('#upper-value').html(maxAr + ' м<sup>2</sup>');

    }, 300);
});


$(document).on('click', '.max_filter .elem', function(e) {
    e.preventDefault();
    $('.rm').removeClass('active');
    $('.max_filter .elem').removeClass('active');
    $(this).addClass('active');
    var current = $(this).attr('data-section');

    $('.min_filter .elem').removeClass('active');
    $(".min_filter .elem[data-section='" + current + "']").addClass('active');

    $('.plans-standart').slick('slickGoTo', current-1, true);

    $('.max_filter .bt').removeClass('active');

});

$(document).on('click', '.min_filter .elem', function(e) {
    e.preventDefault();
    $('.rm').removeClass('active');
    $('.max_filter .elem').removeClass('active');
    $(this).addClass('active');

    $('.min_filter .elem').removeClass('active');
    $(this).addClass('active');

    var current = $(this).attr('data-section');

    $('.max_filter .elem').removeClass('active');
    $(".max_filter .elem[data-section='" + current + "']").addClass('active');

    $('.plans-standart').slick('slickGoTo', current-1, true);
});

$(document).on('click', '.bt', function() {
    $(this).toggleClass('active');
});

$(document).on('click', '.rm', function() {
    $(this).toggleClass('active');
});

var range = document.getElementById('area_slider');

$(document).on('click', '.clean_button', function() {

    $('.max_filter .bt').removeClass('active');
    // $('.bt').removeClass('active');
    $('.rm').removeClass('active');
    range.noUiSlider.set([30, 200]);


    // var result = {
    //     section: '1',
    //     flor: ['', ''],
    //     area: [70, 150],
    //     room: ['', '', '', '', '']
    // };

    result.section = $('.elem.active').attr('data-section');
    result.flor = ['', ''];
    result.area = [30, 200];
    result.room = ['', '', '', '', ''];


    getCard(result);

});


$(document).on('click', '.min_filter .bt', function() {
    $('.min_filter .bt').removeClass('active');
    $(this).addClass('active');
});

$(document).on('click', '.min_filter .first-type', function() {
    $('.plans-10').removeClass('active');
    $('.plans-standart').addClass('active');
});

$(document).on('click', '.min_filter .second-type', function() {
    $('.plans-10').addClass('active');
    $('.plans-standart').removeClass('active');
});

