// Code goes here
'use strict';

//new discohotel
angular.module('discoHotel', ['ngRoute'])
.config(['$routeProvider',

    function($routeProvider) {

        $routeProvider.when('/listing', {
            templateUrl: 'partials/listing.html'
        });
      
        $routeProvider.when('/create', {
            templateUrl: 'partials/create.html'
        });
       
        $routeProvider.otherwise( {
            redirectTo: '/listing'
        });
      
    }
]);


angular.module('discoHotel').filter('toFeet', function() {
    return function(input, suffix) {
        suffix = suffix ? suffix : ' ';

        return String(input * 10.7639) + ' ' + suffix;
    }
})

angular.module('discoHotel').filter('toPounds', function() {
    return function(input) {
        return input / 98.58;
    }
})


angular.module('discoHotel').value('uiConfig', {
    descLimit: 50,
    pageSize: 2
});
