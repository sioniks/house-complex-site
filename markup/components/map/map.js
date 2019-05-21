$(document).ready(function() {
    var mapMarkers;
    $.ajax({
        url: "/api/get-infrastructure",
        type: "POST",
        dataType: "json",
        data: {
            result
        },
        success: function(data) {
            mapMarkers = data.result;
            return mapMarkers;
        }
    });
    if ($('#maps').length) {
        setTimeout(function() {
            initMaps(mapMarkers);
        }, 1500)
    }


    if ($('#mapsContact').length) {
        initMaps2();
    }


});


function makeMarker(position, icon, title, map) {

}


var minIcon;
if ($(window).width() <= '1440'){
    minIcon = true;
} else {
    minIcon = false;
}



var MyPosition;

function initMaps(mapMarkers) {

    var elem = document.getElementById('maps');
    var center = {lat: 50.538016, lng: 30.235329};
    var rb = {lat: 50.548016, lng: 30.235329};
    var zoom = 13.5;

    // route
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
    //

    var map = new google.maps.Map(elem, {
        zoom: zoom,
        center: center,
        mapTypeControl: false,

        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: false,

        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#cacaca"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ],
    });






    var markers = [];
    // console.log(mapMarkers);
    for (var i = 0; i < mapMarkers.length; i++) {
        var posM = {lat: +mapMarkers[i].latitude, lng: +mapMarkers[i].longitude};
        // console.log(posM);
        if (minIcon) {
            var marker = new google.maps.Marker({
                position: posM,
                map: map,
                type: mapMarkers[i].category,
                content: '<div class="marker_info">' + mapMarkers[i].name + '</div>',
                icon: '/static/img/content/map/min' + mapMarkers[i].category + '.svg',

            });
        } else {
            var marker = new google.maps.Marker({
                position: posM,
                map: map,
                type: mapMarkers[i].category,
                content: '<div class="marker_info">' + mapMarkers[i].name + '</div>',
                icon: '/static/img/content/map/min' + mapMarkers[i].category + '.svg',

            });
        }

        // console.log(marker);
        var infowindow = new google.maps.InfoWindow();
        marker.addListener('click', function () {
            infowindow.setContent(this.content);
            infowindow.open(map, this);
            $('.gm-style-iw').prev().css({'display': 'none'});
            $('.gm-style-iw').next().css({'display': 'none'});
            $('.gm-style-iw').parent().css({'z-index': 'auto'});

        });

        google.maps.event.addListener(infowindow, 'domready', function () {
            $('.gm-style-iw').prev().css({'display': 'none'});
            $('.gm-style-iw').next().css({'display': 'none'});
            $('.gm-style-iw').parent().css({'z-index': 'auto'});
        });
        markers.push(marker);

        // google.maps.event.addListener(markers[i], "click", function (e) {
        //     if ()
        //     var infoBox = new InfoBox({
        //         latlng: this.getPosition(),
        //         map: map,
        //         content: this.content
        //     });
        // });
    }

    if (minIcon) {
        var marker = new google.maps.Marker({
            position: center,
            map: map,
            icon: '/static/img/content/map/minmap_logo-M.svg',
        });
        var markerRb = new google.maps.Marker({
            position: rb,
            map: map,
            icon: '/static/img/content/map/minmap_logo-R.svg',
        });
    } else {
        var marker = new google.maps.Marker({
            position: center,
            map: map,
            icon: '/static/img/content/map/map_logo-M.svg',
        });
        var markerRb = new google.maps.Marker({
            position: rb,
            map: map,
            icon: '/static/img/content/map/map_logo-R.svg',
        });
    }



    markerRb.setMap(map);

    $('.maps-all-js').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $('.maps-type-js').removeClass('active');

            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
        }
        else {
            $('.maps-type-js').addClass('active');
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(map)
            }
        }
        $(this).toggleClass('active');



    });
    $('.maps-type-js').click(function (e) {
        e.preventDefault();
        $('.maps-all-js').removeClass('active');
        $(this).toggleClass('active');
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        eachMarker()
    });
    var eachMarker = function () {
        $('.maps-type-js.active').each(function () {
            var type = $(this).data('marker');
            for (var i = 0; i < markers.length; i++) {
                // console.log(type, markers[i].type)
                if (type == markers[i].type) {
                    markers[i].setMap(map);
                }
            }
        });
    };



}


//========================

function initMaps2() {

    var elem = document.getElementById('mapsContact');
    var center = {lat: 50.538016, lng: 30.235329};
    var zoom = 13.5;

    var map = new google.maps.Map(elem, {
        zoom: zoom,
        center: center,
        mapTypeControl: false,

        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: false,

        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#cacaca"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ],
    });



    var marker = new google.maps.Marker({
        position: center,
        map: map,
        icon: '/static/img/content/map/map_logo-M.svg',
        url: 'https://goo.gl/maps/c6qzG6B8LWs',
    });

    marker.setMap(map);

    google.maps.event.addListener(marker, 'click', function() {window.open(marker.url)});
}


$(document).on('click', '.mobile__button-mdp', function() {
    $(this).toggleClass('active');
    $('.maps_around').toggleClass('active');
})