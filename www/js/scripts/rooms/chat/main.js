define([
    '../main',
    'angularAMD'
], function (module, angularAMD) {
    'use strict';

    module.config(function($stateProvider) {
        $stateProvider.state('rooms.chat', angularAMD.route({
            url: '/:id',
            templateUrl: module.basePath + 'chat/rooms-chat.html',
            controller: 'roomsChatCtrl',
            deps: [
                './rooms-chat-controller',
                '../rooms-service'
            ],
            resolve: {
                room: function($stateParams, eoRooms) {
                    return eoRooms.get($stateParams.id);
                }
            }
        }));
    });

});
