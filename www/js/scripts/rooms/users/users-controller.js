// lazy loaded
define(['../main'], function (module) {
    'use strict';

    module.controller('roomsUsersCtrl', function($scope, room) {
        $scope.users = room.users;
    });

});
