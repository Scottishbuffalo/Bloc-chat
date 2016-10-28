(function() {
    function RoomCtrl(Room, Message, $scope, $uibModal, $cookies) {
        $scope.rooms = Room.all;
        $scope.currentRoom = null;
        $scope.currentMessages = [];
        $scope.newMessage = {};
        $scope.createRoom = function () {
            console.log("open");
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                resolve: { 
                    rooms: function() {
                        return $scope.rooms;
                    }
                }
            });
        };
        
        $scope.createMessage = function(){
            console.log("createMessage")
            message = $scope.newMessage;
            message.roomId = $scope.currentRoom.$id;
            Message.sendMessage(message);
        }
        
         $scope.setMessages = function(messages){
            console.log("set messages");
            $scope.currentMessages = messages;
        };
        
        $scope.getMessagesByRoom = function(room){
            Message.getByRoomId(room.$id, $scope.setMessages);
        };
        
        $scope.setCurrentRoom = function(room) {
            $scope.currentRoom = room;
            console.log(room.name)
            $scope.getMessagesByRoom(room);
        };
        
    };

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room','Message', '$scope', '$uibModal','$cookies', RoomCtrl]);
})();