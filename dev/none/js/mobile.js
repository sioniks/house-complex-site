$.ajax({
    url: "none/setting.json",
    context: document.body
}).done(function (data) {
    init(data);
});
function init(data) {

    $('h1').html(data.name);
    for (var i = 0; i < data.pagers.length; i++) {
        var array = data.pagers[i];
        $('.div').append('<iframe src="' + array.url + '"></iframe>')
        if (array.child) {
            for (var c = 0; c < array.child.length; c++) {
                var arrayC = array.child[c];
                $('.div').append('<iframe src="' + arrayC.url + '"></iframe>')
            }
        }

    }
}