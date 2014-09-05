
angular.module('discoHotel').controller('greetingController',

    function($scope,greetingService) {
        
        $scope.greeting = {
            timeOfDay: greetingService.getGreeting(),
            companyName: 'Walmart Labs'
        }
        $scope.showGreeting = true;

    }
);
