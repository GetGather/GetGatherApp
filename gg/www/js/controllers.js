// var Asteroid = require("asteroid");

angular.module('getGather.controllers', ['ionic', 'getGather.services'])

  .controller('DiscoverCtrl', ['$scope', '$timeout', 'User', function($scope, $timeout, User){
    $scope.events = [
       {
         "name": "Show",
         "tagline": "no Estádio",
         "thumbnail": "http://blogs.diariodonordeste.com.br/puxaofole/wp-content/uploads/2015/04/dois.jpg"
       },
       {
         "name": "Futebol",
         "tagline": "Foot no Park",
         "thumbnail": "http://www.ricaperrone.com.br/wp-content/uploads/2014/06/campo.jpg",
       },
       {
         "name": "Corrida de Bike",
         "tagline": "Eixao",
         "thumbnail": "http://tudoparahomens.com.br/wp-content/uploads/2014/05/Pedalando-620x400.jpg",
       }
     ];

     // Current Event

     $scope.currentEvent = angular.copy($scope.events[0]);

     // Favorite or Skip event

     $scope.sendFeedback = function(bool) {

       if (bool) {
         User.addEventToFavorites($scope.currentEvent);
       }

       $scope.currentEvent.rated = bool;
       $scope.currentEvent.hide = true;
       $timeout(function(){
          var randomEvent = Math.round(Math.random() * ($scope.events.length - 1));
           $scope.currentEvent = angular.copy($scope.events[randomEvent]);
       }, 250);

     };

  }])

  .controller('FavoritesCtrl', ['$scope', 'User', function($scope, User){
    $scope.favorites = User.favorites;
    $scope.removeEvent = function(event, index) {
      User.removeEventFromFavorites(event, index);
    }
  }])

  .controller('SplashCtrl', ['$scope', function($scope){

  }])

  .controller('TabsCtrl', ['$scope', function($scope){

  }]);
