$(document).on('mousewheel touchend keyup', function () {
    if ($('.contact2__slide').length) {
        prevSlide();
    }
})


$(document).ready(function () {
    if ($('.contact2__slide').length) {
        timerSpeed = 0;
        prevSlide();
    }

    

});
var minWidth = document.documentElement.clientWidth;
if (minWidth > 1023) {
    $(document).on('focus', '.form__name', function () {
        setTimeout(function () {
            prevSlide();
        },10)
        pageSlider(-1);

    });
};



function prevSlide() {
    $('.scroll_slide').removeClass('second-top second-bottom');
    $('.scroll_slide.active').prevAll('.scroll_slide').addClass('second-top');
    $('.scroll_slide.active').next('.scroll_slide').addClass('second-bottom');

    
}

$('#contact_form').submit(function (e) {
    e.preventDefault();
    var error = false;

    if ($('#apr__name').length) {
        var e = document.getElementById("apr__name");
        var desc1 = e.textContent || e.innerText;

        var e2 = document.getElementById("section__name");
        var desc2 = e2.textContent || e2.innerText;

        $('#appart_info').val('Секция: ' + desc1 + '. Квартира: ' + desc2);
    }


    $(this).find('.form_group').each(function () {
        if ($(this).hasClass('required')) {
            var input = $(this).find("input");
            if (input.val() == '') {
                input.parent().addClass('has-error');
                error = true;
            }
            else {
                input.parent().removeClass('has-error');
            }
        }
        if ($(this).hasClass('email')) {
            var input = $(this).find("input");
            if (!validateEmail(input.val())) {
                input.parent().addClass('has-error');
                error = true;
            }
            else {
                input.parent().removeClass('has-error');
            }
        }

        if ($(this).find("input.form__tel").length) {
            var tel = $(this).find("input");
            if (tel.val().length < 15) {

                tel.parent().addClass('has-error');
                error = true;
            }
            else {
                tel.parent().removeClass('has-error');
            }
        }
    });
    if (error == true) {
        return false;
    }


    var _data = $(this).serialize();


    $.ajax({
        url: '/api/feedback',
        type: "POST",
        data: _data,
        dataType: "json",
        success: function () {
            $('input, textarea').val('');
            $('.popup_wrapper-contact').addClass('active')
            setTimeout(function () {
                $('.popup_wrapper-contact').removeClass('active')
            }, 3000)
        }
    });
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[­[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

