$(document).on('mouseenter', '.genplan_link', function () {
    var currentSec = $(this).attr('data-section');

    $('.black__info[data-section="' + currentSec + '"]').addClass('active');
});

$(document).on('mouseleave', '.genplan_link', function () {
    var currentSec = $(this).attr('data-section');

    $('.black__info[data-section="' + currentSec + '"]').removeClass('active');

});



$(document).on('click', '.genplan_link', function (e) {
    e.preventDefault();
    if ($(this).hasClass('disable')) {
        e.preventDefault();
        if (innerWidth < 1200) {
            $('.genplan_link').removeClass('hover');

            var currentSec = $(this).attr('data-section');

            setTimeout(function () {
                console.log(currentSec)
                $('.black__info').removeClass('active')
                $('.black__info[data-section="' + currentSec + '"]').addClass('active');
            },100)

            $(this).addClass('hover');
        }
    } else {
        if (innerWidth > 1200) {
            var keyS = $(this).attr('data-section');
            var link = $("a[data-section='" + keyS + "']").attr("href");
            window.location = link;
        }
        else {
            if($(this).hasClass('hover')) {
                var keyS = $(this).attr('data-section');
                var link = $("a[data-section='" + keyS + "']").attr("href");
                window.location = link;
            }
            else {
                $('.genplan_link').removeClass('hover');

                var currentSec = $(this).attr('data-section');

                setTimeout(function () {
                    console.log(currentSec)
                    $('.black__info').removeClass('active')
                    $('.black__info[data-section="' + currentSec + '"]').addClass('active');
                },100)

                $(this).addClass('hover');
            }
        }
        // console.log(key);
        // console.log(link);
    }
    $('.black__info').removeClass('active');
});

