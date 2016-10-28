(function() {
  function Message($firebaseArray, $scope) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId, callback) {
        ref.orderByChild('roomId').equalTo(roomId).on('value', function(snap) {
                callback(snap.val());
            });
      },

      sendMessage: function(message){
        console.log(message.roomId)
        messages.$add({ userName: message.userName,
                        content: message.content,
                        sentAt: firebase.database.ServerValue.TIMESTAMP,
                        roomId: message.roomId
                      });
      },

      bind: function(){
        return messages;
      }
   } 
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();