$(document).ready(function () {
    if ($('.plan_img:visible').length) {
        $('.plan_color').each(function () {
            var _this = $(this);
            // console.log(_this.siblings('.plan_img').height())
            _this.height(_this.siblings('.plan_img').height())
        })

    }
})

$(document).on('resize', function () {
    if ($('.plan_img:visible').length) {
        $('.plan_color').each(function () {
            var _this = $(this);
            // console.log(_this.siblings('.plan_img').height())
            _this.height(_this.siblings('.plan_img').height())
        })

    }
})
$(document).on('click', function () {
    if ($('.plan_img:visible').length) {
        $('.plan_color').each(function () {
            var _this = $(this);
            // console.log(_this.siblings('.plan_img').height())
            _this.height(_this.siblings('.plan_img').height())
        })

    }
})

$(document).on('click', '.kv-block', function() {
   $(this).siblings('.full__wrap').addClass('active');
});

$(document).on('click', '.full__close', function() {
    $(this).closest('.full__wrap').removeClass('active');
});

$(document).on('click', '.full__wrap', function() {
    $(this).removeClass('active');
});


$(document).on('click', '.img_info', function() {
    $(this).siblings('.full__img_info').addClass('active');
});

$(document).on('click', '.full__close', function() {
    $(this).closest('.full__img_info').removeClass('active');
});

$(document).on('click', '.full__img_info', function() {
    $(this).removeClass('active');
});