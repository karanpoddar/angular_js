/*global angular*/

'use strict';


angular.module('discoHotel').factory('hotelsProvider',
    function($http, $timeout, $q) {

        return {
            getHotels: function() {

                var deferred = $q.defer();

                $http.get('https://api.parse.com/1/classes/Hotel', {
                    headers: {
                        'X-Parse-Application-Id': '',
                        'X-Parse-REST-API-Key': '',
                    }

                }).success(function(hotels) {

                    $timeout(function() {
                        deferred.resolve(hotels.results);
                    }, 500);

                }).error(function(error) {
                    //alert(error);

                    deferred.reject('could not find hotels');
                });

                return deferred.promise;

            },
            addHotel: function(hotel) {
                //hotels.push(hotel);

                $http.post('https://api.parse.com/1/classes/Hotel', hotel, {
                    headers: {
                        'X-Parse-Application-Id': '',
                        'X-Parse-REST-API-Key': '',
                    }

                });

            }

        };
    });



//greetingController(???)