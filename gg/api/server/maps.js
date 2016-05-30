if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(latlng);
      });
    }

    var opts = {
      zoom: 16,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), opts);
