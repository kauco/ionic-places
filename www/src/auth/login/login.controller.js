angular.module('places')
	.controller('LoginCtrl', function($scope, $ionicLoading,$ionicModal,LoginService) {


		$scope.login=function(){
			LoginService.login($scope.email,$scope.password).then(function(){
				console.log("success");
			});
		};


		$scope.openSignUp= function(){

			//
			// $ionicModal.fromTemplateUrl


			$ionicModal.fromTemplateUrl('src/auth/signup/signup.modal.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.modal = modal;
				$scope.modal.show();
			});
		}

	});


