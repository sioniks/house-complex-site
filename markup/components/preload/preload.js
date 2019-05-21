$(window).on('load', function() {
    var preloader = document.getElementById('preloader');
    if ( ! get_cookie ( "preloader" ) ) {

        preloader.className += ' active'


        setTimeout(function () {
            $('.preloader-key').addClass('active');
            $('.preloader-key').removeClass('dramm');
            $('.preloader-blick').addClass('fade');
            setTimeout(function () {
                $('.preloader-hole').addClass('big');
            }, 3000);
            setTimeout(function () {
                $("#preloader").removeClass('active');
            }, 3000);
            setTimeout(function () {
                $("#preloader").addClass('hide');
            }, 4500);

            setCookie('preloader', 1 , {
                'expires': 259200
            })
        }, 10000);
    }



});

$(document).on('click', '.preloader-key', function() {
    $(this).addClass('active');
    $(this).removeClass('dramm');
    $('.preloader-text').addClass('fade');
    $('.preloader-blick').addClass('fade');
    setTimeout(function () {
       $('.preloader-hole').addClass('big');
    }, 3000);
    setTimeout(function () {
        $("#preloader").removeClass('active');
    }, 3000);
    setTimeout(function () {
        $("#preloader").addClass('hide');
    }, 4500);


    setCookie('preloader', 1 , {
        'expires': 259200
    })
});

$(document).on('mouseover', '.preloader-key', function() {
    $(this).removeClass('dramm');
});

$(document).on('mouseleave', '.preloader-key', function() {
    $(this).addClass('dramm');
});




function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function get_cookie ( cookie_name )
{
    var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

    if ( results )
        return ( unescape ( results[2] ) );
    else
        return null;
}



//
// setCookie('preloader', "", {
//     expires: -1
// })