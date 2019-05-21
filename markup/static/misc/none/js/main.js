$.ajax({
    url: "none/setting.json",
    context: document.body
}).done(function (data) {
    init(data);
});
function init(data) {
    console.log(data.name)
    $('h1').html(data.name);
    for (var i = 0; i < data.pagers.length; i++) {
        var array = data.pagers[i];
        if (array.child) {
            var _id = 'var' + i;
        }
        else {
            _id = null;
        }
        var content = contentInit(array, false, _id);
        $('#content').append("<tr class='item'>" + content + "</tr>");
        if (array.child) {
            for (var c = 0; c < array.child.length; c++) {
                var arrayC = array.child[c];
                var content = contentInit(arrayC, true);
                $('#content').append("<tr class='item-child " + _id + "'><td class='dot'></td>" + content + "</tr>");
            }
        }
    }
}
function contentInit(array, child, _id) {
    var number = "<td class='number' >" + array.number + ".</td>";
    if (child) {
        var title = "<td class='title' >" + array.title + "</td>";
        var arrow = '';
    }
    else {
        var title = "<td class='title' colspan='2'>" + array.title + "</td>";
        if (_id) {
            var arrow = "<div class='arrow' data-open='" + _id + "'></div>";
        }
        else {
            var arrow = '';
        }

    }
    var link = "<a class='link' href='" + array.url + "'></a>";
    var frame = "<div class='frame'></div>";
    var content = number + title + "<td class='more'>" + link + frame + arrow + "</td>";
    return content;
}


$(document).on('click', '.arrow', function () {
    $(this).parents('.item').toggleClass('show');
    var open = $(this).data('open');
    $('.' + open).toggle();
});

$(document).on('click', '.frame', function () {
    $('.item, .item-child').removeClass('active');
    $(this).parents('.item, .item-child').addClass('active');
    url = $(this).prev().attr('href');
    $('iframe').attr('src', url);
});
