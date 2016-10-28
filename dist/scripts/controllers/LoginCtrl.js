(function(){
     function LoginCtrl($scope, $cookies, $uibModalInstance){
         
         $scope.createUserName = function(userName){
             if(userName && userName !== ''){
                 $cookies.currentUser = userName;
                 $uibModalInstance.close();
                 console.log("inside create user name");
             }
             else {
                 $scope.errorMessage = 'Invalid username';
             }
         };
     };
     
     angular 
         .module('blocChat')
         .controller('LoginCtrl', ['$scope', '$cookies', '$uibModalInstance', LoginCtrl]);
 })();