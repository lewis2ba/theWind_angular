"use strict";

(function(){
  angular
  .module("turbine")
  .controller("TurbineNewController",[
    "TurbineFactory",
    "$stateParams",
   TurbineNewControllerFunction])

  function TurbineNewControllerFunction(TurbineFactory, $stateParams){
    this.turbine = new TurbineFactory();
        this.create = function(){
          this.turbine.$save()
        }
      }
}())
