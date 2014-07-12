define([
    '../main'
], function (module) {
    'use strict';

    module.config(function($stateProvider) {
        $stateProvider.state('rooms.list', {
            url: '',
            templateUrl: module.basePath + 'list/rooms-list.html'
        });
    });

});
