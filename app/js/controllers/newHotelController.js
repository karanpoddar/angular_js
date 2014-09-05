angular.module('discoHotel').controller('newHotelController',

	function($scope, hotelsProvider, $location) {

		$scope.addHotel = function(form, hotel) {
			if (form.$invalid) {
				alert('NOT VALID');
			} else {

				hotelsProvider.addHotel(hotel);

				$location.url('/listing');
			}
		}
	});