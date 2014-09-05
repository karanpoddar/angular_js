/*global angular*/

'use strict';


angular.module('discoHotel').factory('hotelsProvider',
    function($http) {

        return {
            getHotels: function(callback) {
                $http.get('data/hotels.json').success(function(hotels){
                    callback(hotels.results);
                }).error(function(error){
                    alert(error);
                });

            },
            addHotel : function(hotel){
                //hotels.push(hotel);
            }

        };
    });



//greetingController(???)