'use strict';

var newTic = angular.module('newTicApp', ['firebase'])
  .controller('TicCtrl', [
    '$scope', 
    'angularFire',
    '$cookies',
     function($scope, angularFire, $cookies){

      var myRootRef = new Firebase('https://newtic.firebaseio.com/');
  
      $scope.turn = 1;

      $scope.boxes = [[{value: ""}, {value: ""}, {value: ""}], 
      [{value: ""}, {value: ""}, {value: ""}],
      [{value: ""}, {value: ""}, {value: ""}]];

      angularFire(myRootRef, $scope, "boxes");

      $scope.myRootRef.set($scope.boxes);

      $scope.play= function(cell){
        if($scope.turn % 2 == 0){
          cell.value="X";
        }
        else{
          cell.value="O";
        }
        $scope.turn++;
      }; 

      // $scope.win=function(cell){

      // };

      // $scope.clear=function(cell){

      // };
    }]);

// document.getElementsByClassName("tile").onclick=function(){

//   this.innerHTML(turn); 
  
//   if(turn=="X"){
//   	turn="O"}
//   	else{turn ="X"}
//   document.getElementById("turns").innerHTML= turn;
// };


// document.getElementById("new").onclick=function(){
// 	console.log("up to line 18 works");
//   document.getElementsByClassName("tile").innerHTML("");
// };
// console.log("up to line 20 works");

