function initMap() {
    var pos = {
        lat:51.506393, 
        lng: -0.131192
    }
    var opt = {
        center: pos,
        zoom:15
    };

    var map = new google.maps.Map(document.getElementById("map"), opt);
    var marker = new google.maps.Marker({
        position: pos,
        map: map
    });
    }

//     // Create a marker and set its position.
//     var marker = new google.maps.Marker({
//       map: map,
//       position: myLatLng,
//       title: 'Hello World!'
//     });
//   }