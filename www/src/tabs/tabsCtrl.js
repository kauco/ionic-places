angular.module('places')
.controller('tabsCtrl', function($scope, $ionicModal) {


    $scope.openModal = function(){

console.log('hello')


        $ionicModal.fromTemplateUrl('src/modal/my-modal.html', {
          scope: $scope,
          animation: 'slide-in-up'
        }).then(function(modal){
            $scope.modal = modal;
            $scope.modal.show();
        });

    }

});