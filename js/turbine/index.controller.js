"use strict";

(function(){
  angular
  .module("turbine")
  .controller("TurbineIndexController",[
    "TurbineFactory",
   TurbineIndexControllerFunction])

  function TurbineIndexControllerFunction(TurbineFactory){
    this.turbines = TurbineFactory.query()
  }
}())
