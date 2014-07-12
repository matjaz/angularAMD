define(['./main'], function (module) {
    'use strict';

    module.controller('roomsCtrl', function($scope, rooms) {
        $scope.rooms = rooms;
    });

});
