define(['angularAMD', 'ui.router', './common', 'rooms/main'], function (angularAMD) {
    var app = angular.module("app", [
        'ui.router',
        'common',
        'rooms'
    ]);

    /**
     * Configure Angular ngApp with route and cache the needed providers
     */
    app.config(function ($urlRouterProvider, $stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            controller: function($state) {
                $state.go('rooms.list');
            }
        });

        // $routeProvider
        //     .when("/home", angularAMD.route({
        //         templateUrl: 'views/home.html', controller: 'HomeController', navTab: "home"
        //     }))
        //     .when("/pictures", angularAMD.route({
        //         templateUrl: 'views/pictures.html', controllerUrl: 'controller/pictures_ctrl', navTab: "pictures"
        //     }))
        //     .when("/modules", angularAMD.route({
        //         templateUrl: 'views/modules.html', controller: 'ModulesController', navTab: "modules"
        //     }))
        //     .when("/map", angularAMD.route({
        //         templateUrl: 'views/map.html', controller: 'MapController', navTab: "map"
        //     }))
        $urlRouterProvider.otherwise('/');
    });
        
    // Bootstrap Angular when DOM is ready
    return angularAMD.bootstrap(app);

});
