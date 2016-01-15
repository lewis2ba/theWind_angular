"use strict";

(function(){
  angular
  .module("turbine")
  .controller("TurbineIndexController",[
    "TurbineFactory",
   TurbineIndexControllerFunction])

  function TurbineIndexControllerFunction(TurbineFactory){
    this.turbines = TurbineFactory.query()
    var totalCapacity = 0;
    this.turbines.$promise.then(function(turbines){
      turbines.forEach(function(turbine){
        // console.log(rated_capacity)
        totalCapacity += turbine.rated_capacity

      })
      var usCapacity = 4093000000000
      var offset = (totalCapacity/usCapacity)*100
      console.log(totalCapacity)
      $('#turbineStatistics').append("<h3>Users of the Wind are offsetting "+totalCapacity+" kilowatts of capacity with wind energy! Thats about " + offset + "% of the US' total installed capacity!</h3>")
    })
  }
}())
