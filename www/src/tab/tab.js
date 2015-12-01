angular.module('places')

	.config(function($stateProvider){
		$stateProvider

// setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'src/tab/tabs.html'
  })

    .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'src/tab/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
	});