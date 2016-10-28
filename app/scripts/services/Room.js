(function(){
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        Room.addRoom = function(room){
            rooms.$add({name: room.name,
                        create_at: firebase.database.ServerValue.TIMESTAMP })
        };

        return Room;
    };

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})()