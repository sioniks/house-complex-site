// Inject YouTube API script

var player, player2;
var playerLoad;
var playerSlide;

function reinitYoutube() {
    console.log('youtube')
    player2 = new YT.Player('vidSlide', {
        events: {
            // // call this function when player is ready to use
            'onReady': onPlayerReady2,
            'onStateChange': onPlayerStateChange2
        }
    });
}
function onPlayerReady2(event) {
    playerLoad = true;
    var playButton2 = document.getElementById("playYoutube");
    var closeBtn = document.getElementById("video__close");
    playButton2.addEventListener("click", function () {
        event.target.playVideo();
        closeBtn.style.display = 'block';
    })
}

function onPlayerStateChange2(event) {
    var playButton2 = document.getElementById("playYoutube");
    if (event.data == YT.PlayerState.PAUSED) {
        playButton2.style.display = 'block';
    } else if (event.data == YT.PlayerState.PLAYING) {
        playButton2.style.display = 'none';
    }
}



if ($('#vid').length) {

    // console.log(321,onYouTubePlayerAPIReady)
    function onYouTubePlayerAPIReady() {
        console.log(123)
        // create the global player from the specific iframe (#video)
        player = new YT.Player('vid', {
            events: {
                // call this function when player is ready to use
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        reinitYoutube()
    }

    function onPlayerReady(event) {
        playerLoad = true;
        // bind events
        var playButton = document.getElementById("videoPlay");
        var videoBlock = $('.video__slide');
        var tehinfoBlock = $('.tehinfo__slide');
        var videoOver = $('.video__overslide');
        let downBtn = $('.scroll-bottom');
    
        if ($('.video__slide.active').length) {
            playButton.addEventListener("click", function () {
                downBtn.removeClass('vs');
                // console.log(videoBlock)
                videoBlock.find('.right_half').addClass('full');
                setTimeout(function () {
                    videoBlock.find('.left_half').addClass('full');
                }, 50)
                event.target.playVideo();
                playButton.style.display = 'none';
                videoOver.removeClass('visible');
                
            });


        } else if ($('.tehinfo__slide.active').length) {
            playButton.addEventListener("click", function () {

                // console.log(videoBlock)
                tehinfoBlock.find('.left_half').addClass('full');
                setTimeout(function () {
                    tehinfoBlock.find('.right_half').addClass('full');
                }, 50)
                event.target.playVideo();
                playButton.style.display = 'none';
                videoOver.removeClass('visible');
            });

        }


    }

    function onPlayerStateChange(event) {
        var videoBlock = $('.video__slide');
        var tehinfoBlock = $('.tehinfo__slide');
        var playButton = document.getElementById("videoPlay");
        var closeBtn = document.getElementById("video__close");
        var videoOver = $('.video__overslide');
        

        if (event.data == YT.PlayerState.PAUSED) {
            // setTimeout(function() {
            // playButton.style.display = 'block';
            // videoOver.addClass('visible');
            // $('.left_half').removeClass('full');
            // $('.right_half').removeClass('full');
            // }, 500);
            //

            // console.log('pause');

        } else if (event.data == YT.PlayerState.PLAYING) {

            if ($('.video__slide.active').length) {
                videoBlock.find('.left_half').addClass('full');
                setTimeout(function () {
                    videoBlock.find('.right_half').addClass('full');
                }, 200)
            } else if ($('.tehinfo__slide.active').length) {
                tehinfoBlock.find('.right_half').addClass('full');
                setTimeout(function () {
                    tehinfoBlock.find('.left_half').addClass('full');
                }, 200)
            }
            playButton.style.display = 'none';
            videoOver.removeClass('visible');
            
            closeBtn.style.display = 'block';
            // console.log('play');

        } else if (event.data == YT.PlayerState.ENDED) {
            setTimeout(function () {
                playButton.style.display = 'block';
                videoOver.addClass('visible');
                
                $('.left_half').removeClass('full');
                $('.right_half').removeClass('full');
            }, 50)

            // console.log('stop');

        }

    }
}

function closeVideo() {
    var playButton = document.getElementById("videoPlay");
    var closeBtn = document.getElementById("video__close");
    var videoOver = $('.video__overslide');
    playButton.style.display = 'block';
    closeBtn.style.display = 'none';
    videoOver.addClass('visible');
    $('.left_half').removeClass('full');
    $('.right_half').removeClass('full');

};


$(document).on('click', '.video__overslide', function () {
    player.pauseVideo();
});


let downBtn = $('.scroll-bottom');
$(document).on('click', '.video__close', function () {
    player.pauseVideo();
    downBtn.addClass('vs');
    closeVideo();
    $(this).hide();
});




