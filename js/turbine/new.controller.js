"use strict";

(function(){
  angular
  .module("turbine")
  .controller("TurbineNewController",[
    "TurbineFactory",
    "$stateParams",
    "$state",
   TurbineNewControllerFunction])

  function TurbineNewControllerFunction(TurbineFactory, $stateParams, $state){
    console.log("?!")
    this.turbine = new TurbineFactory();
    console.log(this.turbine)
    this.create = function(){
          this.turbine.$save(function(){
            $state.go("turbineIndex")
          })
        }
      }
}())
