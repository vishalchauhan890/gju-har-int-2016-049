'use strict';

angular.module('gjuHarInt2016049')
	.controller('404Ctrl', function($rootScope, $scope) {
		$rootScope.pageTitle = '404 Error';
		$scope.errorMessage = 'Sorry, but the requested page doesn\'t exist !';
	});