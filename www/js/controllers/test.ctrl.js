'use strict';

angular.module('TestModule', []).controller('TestCtrl', [//
'$scope', //
'$log', //
function($scope, //
$log) {
	$log.info("Entro nel controller test");
} ]);
