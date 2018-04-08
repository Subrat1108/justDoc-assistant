"use strict";

var app = angular.module('justDoc', ['ngRoute','ngCookies','ngMaterial','ngFileUpload']);

app.controller("mainController", function($timeout,$http,$scope,$cookieStore, $mdDialog, $location, $anchorScroll,Upload){


    $scope.answers = {name : '',
                      age : '', 
                      symptoms : {fever : false, 
                                  headache : false, 
                                  nausea : false, 
                                  weakness : false, 
                                  rashes : false}
                     };

    $scope.uploadFiles = function (files) {
        $scope.files = files;
        if (files && files.length) {
            Upload.upload({
                url: '/api/upload',
                data: {
                    files: files,
                    current_user: $scope.id
                }
            }).then( function (response) {
                if (response.status > 0) {
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                $scope.progress = 
                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    };

   


    $scope.check = function(){
    $scope.test1=true;
    $location.hash('myStaticDialog');
    $anchorScroll();
    };

    $scope.getName = function(){
        $scope.test2=true;
    $location.hash('nameButton');
    $anchorScroll();
    };

    $scope.getAge = function(){
        $scope.test3=true;
        $location.hash('ageButton');
    $anchorScroll();
        
    };

    $scope.getSymptoms = function(){
        $scope.test4 = true;
        $location.hash('symptomsButton');
       $anchorScroll();
    };

    $scope.getFiles = function(){
        $scope.test5 = true;
        $location.hash('filesButton');
       $anchorScroll();

       $http.post('/api/questionaire', $scope.answers).then(function(query){
        console.log(query.data);
        $scope.id = query.data;
    });
};

    $scope.toResponse = function(){
            $scope.test6=true;
            $location.hash('outButton');
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

      var func1 =   function(){
            if($scope.files!=null){

                $http.get('/api/upload/'+$scope.id).then(function(response){
    
                    var l = response.data[0].file.length;
                    console.log(l);
                    $scope.fileObject ={};
                    console.log(response.data[0].file[0].filename);
                    for(var i=0;i<l;i++){
                        $scope.fileObject[i] = response.data[0].file[i].filename;
                    };
                    console.log( $scope.fileObject);
                });
            };
        }

        func1();

        


       $scope.ailments = Object.keys(dummyObject);
       $scope.test7=true;
        $('#quesModal').modal('hide');
      }).then(function(){
        $location.hash('slipMid');
        $anchorScroll();
    });


};
    

});

