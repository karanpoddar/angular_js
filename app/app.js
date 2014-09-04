// Code goes here
'use strict';

function greetingController($scope){
    var time = (new Date()).getHours();
   
    var tod = 'Good Morning';
    if ( time > 9){
        tod = 'Good Late Morning';
    }
    
    if (time > 12){
        tod = 'Good Afternoon';
    }
    //if (  > )
    
    $scope.timeOfDay = tod;
}


function nestedController($scope){
    
}

function testController($scope){

}
//greetingController(???)