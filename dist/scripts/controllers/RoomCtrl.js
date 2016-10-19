(function() {
    function RoomCtrl(Room, $scope) {
        $scope.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room','$scope', RoomCtrl]);
})();