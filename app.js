/**
 * Created by Lawliet on 12-Feb-17.
 */
var myninjaapp = angular.module('myNinjaApp', []);

myninjaapp.controller('NinjaController', ['$scope', function ($scope) {

    $scope.addNinja = function () {
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            available: true,
        });

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
    };

    $scope.removeNinja = function (ninja) {
        var removeNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removeNinja, 1);
    };

    $scope.message = "Hey dude!";
    $scope.ninjas = [
        {
            name: "Jafar",
            belt: "red",
            available: true
        },
        {
            name: "Alim",
            belt: "blue",
            available: true
        },
        {
            name: "Habibi",
            belt: "green",
            available: true
        }
    ];

}]);