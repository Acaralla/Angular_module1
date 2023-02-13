(function () {
'use strict';

angular.module('Ex1App', [])
.controller('Ex1Controller', Ex1Controller);
Ex1Controller.$inject = ['$scope'];
function Ex1Controller($scope) {
  
  $scope.testLanch = function () {
    $scope.msg = "";

    var strLanch = $scope.lanch;
    console.log(strLanch);

    if ((strLanch=="") || 
        (strLanch == "list comma separated dishes you usually have for lunch") ||
        (strLanch === undefined)
        ){
      //  empty string
      $scope.msg ="Please enter data list with , as separator";
    } else {


        var myArray = strLanch.split(",");
        var number = myArray.length;
        for (var i = 0; i < myArray.length; i++) {
          if (myArray[i] == ""){
            number = number -1;
          }
        }

      if (number == 0 )
        $scope.msg ="Please enter data list with , as separator";
      else if (number < 4 )
        $scope.msg ="Enjoy!";
       else
        $scope.msg ="Too much!";
    }

    console.log($scope.msg);

  };
}

})();
