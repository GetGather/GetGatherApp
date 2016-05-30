angular.module('getGather.services', [])
.factory('User', function(){

  var o = {
    favorites: []
  };

  function addEventToFavorites(event) {
    if(!event) return false;
    o.favorites.unshift(event);
  }

  function removeEventFromFavorites(event, index) {
    if(!event) return false;
    o.favorites.splice(index, 1);
  }

  o.addEventToFavorites = function(event) {
    addEventToFavorites(event);
  };

  o.removeEventFromFavorites = function(event, index) {
    removeEventFromFavorites(event, index);
  };

  return o;
})

.factory('Maps', function(){
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

      function placeMarker(location) {

        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
      }

      this.markerObserve = Markers.find({}).observe({
       added: function(m) {
           placeMarker(m.location);
       }
   });
});
