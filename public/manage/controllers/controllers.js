// controller.js
var managesController = angular.module('manages');

managesController.controller('ManagerCtr',[
	'$scope',
	function($scope) {
		$scope.hello = "Hello";
		$scope.submit = function(){
			console.log($scope.user);
		}
	}
]);