'use strict';

angular.module('AngularBaseCtrl', [ //
'ngRoute',//
'pascalprecht.translate',//
'TestModule'//
]);

angular.module('AngularBaseCtrl').config(
		[ '$translateProvider', function($translateProvider) {

			$translateProvider.useStaticFilesLoader({
				prefix : 'i18n/',
				suffix : '.json'
			});

			$translateProvider.preferredLanguage('en_US');
		} ]);

angular.module('AngularBaseCtrl').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test', {
        templateUrl: 'partials/test.html',
      }).
      otherwise({
        redirectTo: '/test'
      });
  }]);
