/*global angular*/

'use strict';


angular.module('discoHotel').factory('hotelsProvider',
    function($http, $timeout) {

        return {
            getHotels: function(callback) {


                $http.get('data/hotels.json').success(function(hotels){

                    $timeout(function(){
                        callback(hotels.results);
                    }, 500);
                    
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