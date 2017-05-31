(function () {
'use strict';
var mod1 = angular.module('myFirstApp', []);
mod1.controller("lunchCheckerCntrl", ['$scope', lunchCheckerController]);

lunchCheckerController.$inject = ['$scope'];
var emptyMsg = "Please enter data first";
var lowCountMsg = "Enjoy!";
var HighCountMsg = "Too much!";

function lunchCheckerController($scope) {
    $scope.lunchMessage = emptyMsg;

    $scope.checkLunchMenu = function () {
        var lunch_items = $scope.lunch_menu.trim();
        var arrayOfStrings = lunch_items.split(',');
        $scope.splitArray = arrayOfStrings.length;

        var count = 0;
        for(var i = 0; i < arrayOfStrings.length; i++){
            if (arrayOfStrings[i].trim()) {
                count = count + 1;
            }
        }
        $scope.count = count;

        if (count <=0) {
            $scope.lunchMessage = emptyMsg;
        } else if (count > 3) {
            $scope.lunchMessage = HighCountMsg;
        } else {
            $scope.lunchMessage = lowCountMsg;
        }
        //$scope.lunchMessage = arrayOfStrings.length;
      };


}
})();
