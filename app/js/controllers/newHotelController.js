
angular.module('discoHotel').controller('newHotelController', function($scope, hotelsProvider, $location){

     $scope.addHotel = function(hotel) {
            hotelsProvider.addHotel(hotel);
         $location.url('listing');
    }
});
