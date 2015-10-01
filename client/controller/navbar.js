angular.module('Ins').controller('NavbarCtrl', function ($scope, $rootScope, $window, $auth) {
	$scope.isAuthenticated = function () {
		return $auth.isAuthenticated();
	};
	$scope.logout = function () {
		$rootScope.currentUser = null;
		$window.localStorage.currentUser = null;
		$auth.logout();
	};
});