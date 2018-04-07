"use strict";

var app = angular.module('justDoc', ['ngRoute','ngCookies','ngMaterial']);

app.controller("mainController", function($http,$scope,$cookieStore, $mdDialog, $location, $anchorScroll){


    $scope.answers = {name : '', age : '', symptoms : {fever : false, headache : false}};

    $scope.submit = function(){
        console.log($scope.answers);
        $http.post('/api/questionaire', $scope.answers).then(function(query){
        console.log(query.data);
        $scope.id = query.data;
        $scope.test5=true;
        $location.hash('thanks');
        $anchorScroll();
        });

         
    };

    $scope.check = function(){
    //     $scope.buttonStatus = true;
    //     $mdDialog.show({
    //     contentElement: '#myStaticDialog',
    //     parent: angular.element(document.body)
    $scope.test1=true;
    $location.hash('myStaticDialog');
    $anchorScroll();

    //   });
    };

    $scope.getName = function(){
        // $mdDialog.show({
        //     contentElement: '#getName',
        //     parent: angular.element(document.body),
        //   });
        $scope.test2=true;
        $location.hash('getName');
    $anchorScroll();
    };

    $scope.getAge = function(){
        // $mdDialog.show({
        //     contentElement: '#getAge',
        //     parent: angular.element(document.body),
        //   });
        $scope.test3=true;
        $location.hash('getAge');
    $anchorScroll();
    };

    $scope.getSymptoms = function(){
        // $mdDialog.show({
        //     contentElement: '#getSymptoms',
        //     parent: angular.element(document.body),
        //   });
        $scope.test4 = true;
        $location.hash('getSymptoms');
       $anchorScroll();
    };

$scope.out = function(){

    $scope.userAnswers = {};

     $http.get('/api/questionaire/'+$scope.id).then(function(response){
        $scope.userAnswers = response.data;
        console.log($scope.userAnswers[0].name);

        var dummyObject ={};

        for(var k in $scope.userAnswers[0].symptoms){

            if($scope.userAnswers[0].symptoms[k]==true)

            dummyObject[k]=$scope.userAnswers[0].symptoms[k];

        } ;


       $scope.ailments = Object.keys(dummyObject);


        $('#quesModal').modal('hide');
      });

};
    

});

