'use strict';

angular.module('newTicApp')
  .controller('TicCtrl', function($scope){
    $scope.turn = 1;

    $scope.play= function(cell){
      if($scope.turn % 2 == 0){
        cell.value="X";
      }
      else{
        cell.value="O";
      }
      $scope.turn++;
    }; 

    $scope.boxes = [[{value: ""}, {value: ""}, {value: ""}], 
    [{value: ""}, {value: ""}, {value: ""}],
    [{value: ""}, {value: ""}, {value: ""}]];
  });

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

