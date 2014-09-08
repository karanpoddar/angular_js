/*global angular*/

'use strict';


angular.module('discoHotel').factory('hotelsProvider',
    function($http, $timeout, $q) {

        return {
            getHotels: function() {

                var deferred = $q.defer();

                $http.get('data/hotels.json').success(function(hotels){

                    $timeout(function(){
                        deferred.resolve(hotels.results);
                    }, 500);
                    
                }).error(function(error){
                    //alert(error);

                    deferred.reject('could not find hotels');
                });

                return deferred.promise;

            },
            addHotel : function(hotel){
                //hotels.push(hotel);
            }

        };
    });



//greetingController(???)
