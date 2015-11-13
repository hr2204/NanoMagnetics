'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.test = function(){
    	console.log("did it!");
    }
  })

.controller('ToDoCtrl', ['$scope', function($scope, $http) {
    $scope.tasklist = [];
    
    $scope.addTask = function() {
        if(event.keyCode == 13 && $scope.taskName) {
            $scope.tasklist.push({"name": $scope.taskName, "completed": false});   
            $scope.taskName = "";
            $scope.priority = 'normal';
        }
    }

    $scope.deleteTask = function(index) {
        $scope.tasklist.splice(index, 1);
    }
   
    $scope.saveModal = function(){
    	//console.log('did it!');
    	//$scope.tasklist = [];
    	var itm = document.getElementById("target");
    	var cln = itm.cloneNode(true);
    	cln.id ="";
    	document.getElementById("displayTodos").appendChild(cln);
    }

}])
.controller('displayTodoCtr', ['$scope', function($scope, $http) {
  
    $scope.test = function(){
    	console.log("did it!");
    }

}]);