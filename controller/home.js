angular.module('Ins').controller('HomeCtrl', function($scope,$window,$rootScope,$auth,API){
	if ($auth.isAuthenticated() && ($rootScope.currentUser && $rootScope.currentUser.username)) {
		API.getFeed().success(function (data) {
			$scope.photos = data;
		});
	};
	$scope.isAuthenticated = function(){
		return $auth.isAuthenticated();
	};
	$scope.linkInstagram = function(){
		$auth.link('interest').then(function(response) {
			$window.localStorage.currentUser = JSON.stringify(response.data.user);
			$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
			API.getFeed().success(function(data){
				$scope.photos = data;
			}).fail(function(data){
				console.log(data);
			})
			
		})
	};
});