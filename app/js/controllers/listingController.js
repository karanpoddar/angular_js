
angular.module('discoHotel').controller('listingController',
    function($scope, uiConfig, hotelsProvider, votingService) {

        $scope.descLimit = uiConfig.descLimit;


        var hotels = hotelsProvider.getHotels();


        $scope.upVote = function(hotel) {
            votingService.upVote(hotel);
        }

        $scope.downVote = function(hotel) {
            votingService.downVote(hotel);
        }

        $scope.hotels = hotels;

       

        $scope.toFeet = function(input) {
            return input * 10.7639;
        }

    });

