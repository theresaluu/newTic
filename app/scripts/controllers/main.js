'use strict';
angular.module('newTicApp')
.controller('TicCtrl', ['$scope', 'angularFire', function($scope, angularFire){

    var url =new Firebase('https://newtic.firebaseio.com');
  
    var promise = angularFire(url, $scope, "games");

    promise.then(function(){
      $scope.games= {

        boxes: [[{value: ""}, {value: ""}, {value: ""}], 
      [{value: ""}, {value: ""}, {value: ""}],
      [{value: ""}, {value: ""}, {value: ""}]],

        turn: 1
      };
     
      $scope.play= function(cell){
        console.log("play() works");
        if($scope.games.turn % 2 == 0){
          cell.value="X";

        }
        else{
          cell.value="O";
        }
        $scope.games.turn++;
      };   
    });

  }]);

  

      

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

