'use strict';
console.log("line 2 works");
angular.module('newTicApp', ['firebase'])
.controller('TicCtrl', function($scope, angularFire){
    console.log("line 5 works");

    var url =new Firebase('https://newtic.firebaseio.com/');

    angularFire(url, $scope, "boxes").then(function(){

      $scope.boxes = [[{value: ""}, {value: ""}, {value: ""}], 
      [{value: ""}, {value: ""}, {value: ""}],
      [{value: ""}, {value: ""}, {value: ""}]];

      $scope.turn = 1;
    
      // $scope.myRootRef.set($scope.boxes);

      $scope.play= function(cell){
        console.log("play() works");
        if($scope.turn % 2 == 0){
          cell.value="X";
        }
        else{
          cell.value="O";
        }
        $scope.turn++;
      };   
    });
  });

  

      

      // $scope.win=function(cell){

      // };

      // $scope.clear=function(cell){

      // };


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

