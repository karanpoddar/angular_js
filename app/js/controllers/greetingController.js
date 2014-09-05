
angular.module('discoHotel').controller('greetingController',

    function($scope) {
        var time = (new Date()).getHours();

        var tod = 'Good Morning';
        if (time > 9) {
            tod = 'Good Late Morning';
        }

        if (time > 12) {
            tod = 'Good Afternoon';
        }
        //if (  > )


        $scope.greeting = {
            timeOfDay: tod,
            companyName: 'Walmart Labs'
        }

        $scope.showGreeting = true;


    }
);
