angular.module('Ins').controller('HomeCtrl', function($scope,$window,$rootScope,$auth){
	$scope.isAuthenticated = function(){
		return $auth.isAuthenticated();
	};
	$scope.linkInstagram = function(){
		$auth.link('Instagram').then(function(response) {
			$window.localStorage.currentUser = JSON.stringify(response.data.user);
			$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
		})
	};
});