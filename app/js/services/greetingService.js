angular.module('discoHotel').factory('greetingService',
     function() {
         return {
            getGreeting: function() {
                var time = (new Date()).getHours();

                var tod = 'Good Morning';
                if (time > 9) {
                    tod = 'Good Late Morning';
                }

                if (time > 12) {
                    tod = 'Good Afternoon';
                }
                return tod;
            }
         }
         
     });