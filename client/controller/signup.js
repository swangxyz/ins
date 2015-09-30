angular.module('Ins')
.controller('SignupCtrl',function($scope, $location, $auth){
	$scope.signup = function(){
		var user = {
			email: $scope.email,
			password: $scope.password
		};
	
		$auth.signup(user)
		.catch(function(response) {
			console.log(response.data);
		})
	}
	
})