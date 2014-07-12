// lazy loaded
define(['../main'], function (module) {
    'use strict';

    module.controller('roomsChatCtrl', function($scope, room) {
        $scope.room = room;
    });

});
