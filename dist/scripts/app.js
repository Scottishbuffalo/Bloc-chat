(function() {
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url:'/',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/home.html'
            })

            .state('modal',{
                url:'/',
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html'
            })

             .state('login', {
                 url: '/login',
                 controller: 'LoginCtrl as login',
                 templateUrl: '/templates/login.html'
            });
    }

    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            console.log("open");
            $uibModal.open({
                templateUrl: '/templates/login.html',
                controller: 'LoginCtrl',
                size: 'sm',
                backdrop: 'static',
                keyboard: false
            });
        }
    }


    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();