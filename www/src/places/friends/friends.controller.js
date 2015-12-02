angular.module('places')
	.controller('FriendsCtrl', function($scope, $ionicLoading,FriendsService, $http) {
			$http.get('api/friends.json')
				.then(function(result){
					$scope.friends = result.data;


					return result.data;

				})


	});
