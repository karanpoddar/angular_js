
angular.module('discoHotel').controller('newHotelController', function($scope, hotelsProvider){

     $scope.addHotel = function(hotel) {
            hotelsProvider.addHotel(hotel);

            //$scope.hotel = {};
        }
});
