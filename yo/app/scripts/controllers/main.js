'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
var api = angular.module('yoApp');

api.controller('MainCtrl', function ($scope,$http) {

    //Récupération des personnes
    $http.get("http://localhost:8400/API/rest/persons/").then(function (response) {
        $scope.persons = response.data;
    })

    $scope.addPerson = function (form) {
        $http({
            method: 'POST',
            url: "http://localhost:8400/API/rest/person?firstname="+$scope.firstname+"&name="+$scope.name+"&mail="+$scope.mail,
        }).then(function (result) {
        })
    }

    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});