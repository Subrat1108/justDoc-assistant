"use strict";

var app = angular.module('justDoc', ['ngRoute','ngCookies']);

app.controller("mainController", function($http,$scope,$cookieStore){

    $scope.answers = {name : '', age : '', symptoms : {fever : Boolean, headache : Boolean}};

    $scope.submit = function(){
        console.log($scope.answers);
        $http.post('/api/questionaire', $scope.answers).then(function(query){

            console.log(query.data);

        });
    };

});

