
angular.module('discoHotel').controller('listingController',
    function($scope, uiConfig, hotelsProvider, votingService) {

        $scope.descLimit = uiConfig.descLimit;


        hotelsProvider.getHotels(function(hotels){

            $scope.hotels = hotels;
        });


        $scope.upVote = function(hotel) {
            votingService.upVote(hotel);
        }

        $scope.downVote = function(hotel) {
            votingService.downVote(hotel);
        }


        $scope.toFeet = function(input) {
            return input * 10.7639;
        }
        
        $scope.orderbyFunction = function(hotel) {
            if(!$scope.sortBy) {
                return hotel.id;
            }
            if (!$scope.sortBy.localeCompare("rating")) {
                if (!hotel.rating) {
                    return 0;
                }
                return hotel.rating;
            }
            else if(!$scope.sortBy.localeCompare("price")) {
                return hotel.price;
            }
            return hotel.id;
        }

    });

