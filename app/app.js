// Code goes here
'use strict';

function greetingController($scope) {
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


function hotelsController($scope) {

    var hotels = [{
        name: 'Novotel',
        price: 45000,
        location: 'hyderabad'
    },{
        name: 'Leela Palace',
        price: 30000,
        location: 'bangalore'
    },{
        name: 'Taj Vivanta',
        price: 15000,
        location: 'bangalore'
    }];

    $scope.hotels = hotels;

    $scope.addHotel = function(){
        $scope.hotels.push({
            name : 'Ibis',
            price : 21000,
            location : 'ORR'
        });
    }


}
//greetingController(???)