define([
    'angular',
    'angularAMD',
    'ui-router',
    './list/main',
    './chat/main',
    './users/main'
], function (angular, angularAMD) {
    'use strict';

    var module = angular.module('rooms', ['ui-router']);
    var basePath = module.basePath = require.toUrl('rooms/');

    return module.config(function ($stateProvider, $translateProvider) {

        $stateProvider.state('rooms', angularAMD.route({
            url: '/rooms',
            'abstract': true,
            templateUrl: basePath + 'rooms.html',
            controller: 'roomsCtrl',
            deps: [
                // lazy load those files before resolving other resolves and creating controller
                './rooms-service',
                './rooms-controller'
            ],
            resolve: {
                // lazy loaded eoRooms service
                rooms: function(eoRooms) {
                    return eoRooms.search();
                }
            }
        }));

    });

});
