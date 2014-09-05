// Code goes here
'use strict';

//new discohotel
angular.module('discoHotel', [])


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
