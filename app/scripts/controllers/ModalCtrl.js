(function () {
    function ModalCtrl($scope, $uibModalInstance, Room) {
        
        $scope.addRoom = function(room){
            Room.addRoom(room);
        };
        
        $scope.createRoom = function(){
            $scope.addRoom($scope.room);
            $uibModalInstance.close();
        };
        
        $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl])
})();
