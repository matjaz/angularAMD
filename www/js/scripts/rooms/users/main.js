define(['../main', 'angularAMD', 'ui.router'], function(module, angularAMD) {
    'use strict';

    module.config(function($stateProvider) {
        $stateProvider.state('rooms.chat.users', angularAMD.route({
            url: '/users',
            templateUrl: module.basePath + 'users/rooms-users.html',
            controller: 'roomsUsersCtrl',
            deps: [
                './users-controller'
            ]
        }));
    });

});
