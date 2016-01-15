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
    this.turbine = new TurbineFactory();
    this.create = function(){
          this.turbine.$save(function(){
            $state.go("turbineIndex")
          })
        }
    this.destroy = function(){
        this.turbine.$delete({id: $stateParams.id});
      }
    }
}())
