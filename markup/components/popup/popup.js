$(document).on('focus blur', '.form__tel', function () {
    $(this).mask('+38 (999) 999-9999', {placeholder: ""});
});

$(document).on('focus blur', '.form_fild', function () {
    $(this).parent().removeClass('has-error');
})
$(document).on('focus blur', '.form_fild', function () {
    $('.form_group').removeClass('active');
    $(this).parent().addClass('active');

});

$(document).on('click', '.form_button', function () {
    $('.form_fild').removeClass('active');
});

$(document).on('click', '.close_button', function () {
    $('.popup_wrapper, .popup_wrapper-contact').removeClass('active');
});

$(document).on('click', '.popup_mask', function () {
    $('.popup_wrapper, .popup_wrapper-contact').removeClass('active');
});

$(document).on('click', '.thank_block .close_button', function () {
    $('.popup_wrapper, .popup_wrapper-contact').removeClass('active');
    $('.thank_block').removeClass('active');
});


$(document).on('click', '.open_form', function () {
    $('.popup_wrapper').addClass('active');
});


$('#popup_form').submit(function (e) {
    e.preventDefault();
    var error = false;

    if ($('#apr__name').length) {
        var e = document.getElementById("apr__name");
        var desc1 = e.textContent || e.innerText;

        var e2 = document.getElementById("section__name");
        var desc2 = e2.textContent || e2.innerText;

        $('#appart_info').val('Секция: ' + desc2 + '. Квартира: ' + desc1);
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
            $('textarea').val('');
            $('.thank_block').addClass('active');
            setTimeout(function () {
                $('.popup_wrapper').removeClass('active');
                $('.thank_block').removeClass('active');
            }, 3000);
        }
    });
});