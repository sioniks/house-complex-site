$(document).ready(function () {

    if ($('#min-slider').length) {
        var $currentYear = $('.year_btn.active').attr('data-year');

        activeYear.year = $currentYear;
        activeYear.month = 1;

        getMonth(activeYear);
        setTimeout(function () {
            // console.log(123)
            getSlide(resultSlide);
        }, 1000)

    }

});


var resultSlide = {
    year: '',
    month: '',
};


$(document).on('click', '.month_btm', function () {
    $('.big-slider').slick('destroy');
    $('.min-slider').slick('destroy');
    $('#big-slider').empty();
    $('#min-slider').empty();

    $('.month_btm').removeClass('active');
    $(this).addClass('active');

    setTimeout(function () {
        getSlide(resultSlide);

    }, 500)




});


$(document).on('click', '.year_btn', function () {
    $('.big-slider').slick('destroy');
    $('.min-slider').slick('destroy');
    $('#big-slider').empty();
    $('#min-slider').empty();


    $('.year_btn').removeClass('active');
    $(this).addClass('active');


    var $currentMonth = $('.month_btm:last-of-type').attr('data-month');
    var $currentYear = $('.year_btn.active').attr('data-year');


    activeYear.year = $currentYear;
    resultSlide.year = $currentYear;
    resultSlide.month = $currentMonth;

    getMonth(activeYear);


    setTimeout(function () {
        getSlide(resultSlide);

    }, 500)


});


function getSlide(resultSlide) {

    var $container1 = $('#min-slider ');
    var $container2 = $('#big-slider ');
// $container.empty();


    var $minSlide = $('#minSl');

    var $maxSlide = $('#maxSl');
    var $videoSlideMin = $('#videoSlmin');
    var $videoSlideMax = $('#videoSlmax');


    var $currentMonth = $('.month_btm.active').first().attr('data-month');
    var $currentYear = $('.year_btn.active').attr('data-year');

    resultSlide.year = $currentYear || '2018';
    resultSlide.month = $currentMonth || '1';

    $.ajax({
        url: "/api/get-construction-course",
        type: "POST",
        dataType: "json",
        data: resultSlide,
        success: function (data) {
            data = data.result;
            // console.log(data);
            var i = 0;
            $container1.empty();
            $container2.empty();

            // console.log(data.video.length);

            if (data.video.length) {
                $videoSlideMin.tmpl({'video': data.video}).appendTo('#min-slider ');
                $videoSlideMax.tmpl({'video': data.video}).appendTo('#big-slider ');
                reinitYoutube();
            }
            for (; i < data.images.length; i++) {
                // console.log(data.images[i]);

                $minSlide.tmpl({'images': data.images[i]}).appendTo('#min-slider ');
                $maxSlide.tmpl({'images': data.images[i]}).appendTo('#big-slider ');
            }
            // setTimeout(function() {
            $('.big-slider').slick({
                // infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.min-slider',
                prevArrow: $('.super-nav .prev'),
                nextArrow: $('.super-nav .next')
            });
            $('.min-slider').slick({
                // infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true,
                arrows: true,
                asNavFor: '.big-slider',
                focusOnSelect: true,
                prevArrow: $('.super-nav .prev'),
                nextArrow: $('.super-nav .next')
            });
            // }, 500);


            $('#sliderDate').text(data.day);
            $('#sliderMonth').text(data.month_text);
            $('#sliderDesc').html(data.desc);
            setTimeout(function () {
                if ($('.month_btm').length <= 1) {
                    $('.monthListW .next').hide();
                    $('.monthListW .prev').hide();
                } else {
                    $('.monthListW .next').show();
                    $('.monthListW .prev').show();

                }
            }, 100)

            // if(cb) cb(data);

            if ($('.min_history-slide:not(.slick-cloned)').length <= 4) {
                $('.super-nav').hide();
            } else {
                $('.super-nav').show();
            }
        }
    });


}

var activeYear = {
    year: '2018'
};


function getMonth(activeYear) {
    var $list = $('#monthList ');
    // var $listD = $('#dropdown-month ');

    var $month = $('#button-month');
    // var $monthD = $('#label-month');
    $.ajax({
        url: "/api/get-month",
        type: "POST",
        dataType: "json",
        data: activeYear,
        success: function (data) {
            data = data.result;
            // console.log(data);
            var i = 0;
            $list.empty();
            // $listD.empty();
            for (; i < data.length; i++) {


                var m = data[i].month;
                // console.log(m);
                switch (m) {
                    case '1':
                        m = 'Січень';
                        break;
                    case '2':
                        m = 'Лютий';
                        break;
                    case '3':
                        m = 'Березень';
                        break;
                    case '4':
                        m = 'Квітень';
                        break;
                    case '5':
                        m = 'Травень';
                        break;
                    case '6':
                        m = 'Червень';
                        break;
                    case '7':
                        m = 'Липень';
                        break;
                    case '8':
                        m = 'Серпень';
                        break;
                    case '9':
                        m = 'Вересень';
                        break;
                    case '10':
                        m = 'Жовтень';
                        break;
                    case '11':
                        m = 'Листопад';
                        break;
                    case '12':
                        m = 'Грудень';
                        break;
                    default:
                        m = '1';
                }


                $month.tmpl({'month': m, 'monthN': data[i].month}).appendTo('#monthList');
                // $monthD.tmpl({'month': m, 'monthN': data[i].month}).appendTo('#dropdown-month');

                $('.month_btm').removeClass('active');
                $('.month_btm').first().addClass('active');
            }

        }
    });
}


if ($('.by_year').length > 0) {
    var buttonIndex = 1;
    showButton(buttonIndex);


    function plusButton(n) {
        showButton(buttonIndex += n);
    }

    if ($('.year_btn').length <= 1) {
        $('.year_btn').siblings('.next').hide();
        $('.year_btn').siblings('.prev').hide();
    } else {
        $('.year_btn').siblings('.next').show();
        $('.year_btn').siblings('.prev').show();

    }


    function showButton(n) {
        var i;

        var buttons = document.querySelectorAll(".year_btn");
        if (n > buttons.length) {
            buttonIndex = 1
        }
        if (n < 1) {
            buttonIndex = buttons.length
        }

        $('.year_btn').removeClass('active');

        // buttons[buttonIndex-1].classList.add('active');
        $(buttons[buttonIndex - 1]).addClass('active');
    }

    $(document).on('click', '.by_year .prev', function () {


        $('.big-slider').slick('destroy');
        $('.min-slider').slick('destroy');
        $('#big-slider').empty();
        $('#min-slider').empty();


        // var $currentMonth = $('.month_btm:last-of-type').attr('data-month');
        var $currentYear = $('.year_btn.active').prev().attr('data-year');
        var $lastYear = $('.year_btn').last().attr('data-year');


        activeYear.year = $currentYear || $lastYear;
        resultSlide.year = $currentYear || $lastYear;

        resultSlide.month = 1;

        getMonth(activeYear);


        setTimeout(function () {


            getSlide(resultSlide);

            if ($('.month_btm').length <= 1) {
                $('.monthListW .next').hide();
                $('.monthListW .prev').hide();
            } else {
                $('.monthListW .next').show();
                $('.monthListW .prev').show();

            }

        }, 500);

        plusButton(-1);
    });

    $(document).on('click', '.by_year .next', function () {
        $('.big-slider').slick('destroy');
        $('.min-slider').slick('destroy');
        $('#big-slider').empty();
        $('#min-slider').empty();


        // var $currentMonth = $('.month_btm:last-of-type').attr('data-month');
        var $currentYear = $('.year_btn.active').next().attr('data-year');
        var $lastYear = $('.year_btn').first().attr('data-year');


        activeYear.year = $currentYear || $lastYear;
        resultSlide.year = $currentYear || $lastYear;
        resultSlide.month = 1;

        getMonth(activeYear);


        setTimeout(function () {

            getSlide(resultSlide);

            if ($('.month_btm').length <= 1) {
                $('.monthListW .next').hide();
                $('.monthListW .prev').hide();
            } else {
                $('.monthListW .next').show();
                $('.monthListW .prev').show();

            }

        }, 500)


        plusButton(+1);


    });

}


//=========================
if ($('.by_month').length > 0) {
    setTimeout(function () {
        var buttonIndex2 = 1;
        showButton2(buttonIndex2);


        function plusButton2(n) {
            showButton2(buttonIndex2 += n);
        }


        function showButton2(n) {
            var i;

            var buttons2 = document.querySelectorAll(".month_btm");
            if (n > buttons2.length) {
                buttonIndex2 = 1
            }
            if (n < 1) {
                buttonIndex2 = buttons2.length
            }

            $('.month_btm').removeClass('active');

            console.log(buttons2.length);
            console.log(buttonIndex2);

            // buttons2[buttonIndex2-1].classList.add('active');
            $(buttons2[buttonIndex2 - 1]).addClass('active');

        }


        $(document).on('click', '.monthListW>.prev', function () {

            console.log(4444444);


            $('.big-slider').slick('destroy');
            $('.min-slider').slick('destroy');
            $('#big-slider').empty();
            $('#min-slider').empty();


            var $currentMonth = $('.month_btm:first-of-type').attr('data-month');
            var $currentYear = $('.year_btn.active').attr('data-year');


            activeYear.year = $currentYear;
            resultSlide.year = $currentYear;

            resultSlide.month = $currentMonth;
            console.log($currentMonth);


            setTimeout(function () {


                getSlide(resultSlide);


            }, 500);

            plusButton2(-1);
        });

        $(document).on('click', '.monthListW>.next', function () {
            $('.big-slider').slick('destroy');
            $('.min-slider').slick('destroy');
            $('#big-slider').empty();
            $('#min-slider').empty();

            console.log(5555555);


            var $currentMonth = $('.month_btm:first-of-type').attr('data-month');
            var $currentYear = $('.year_btn.active').attr('data-year');


            activeYear.year = $currentYear;
            resultSlide.year = $currentYear;
            resultSlide.month = $currentMonth;

            console.log($currentMonth);


            setTimeout(function () {

                getSlide(resultSlide);


            }, 500)


            plusButton2(+1);


        });
    }, 500)

}




