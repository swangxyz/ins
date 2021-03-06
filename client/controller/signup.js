angular.module('Ins')
	.controller('SignupCtrl', function ($scope, $location, $auth) {
		$scope.signup = function () {
			var user = {
				email: $scope.email,
				password: $scope.password
			};

			$auth.signup(user)
				.then(function (response) {
					$auth.setToken(response);
					$location.path('/');
				})
				.catch(function (response) {
					$scope.signupForm['email'].$setValidity('server',false);
					//console.log(response.data);
					$scope.errorMessage = {};	
					$scope.errorMessage['email'] = response.data.message;
				});
		};
	});