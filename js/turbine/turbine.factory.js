"use strict";

(function(){
  angular
    .module( "turbine" )
    .factory( "TurbineFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction( $resource ){
    return $resource( "https://the-wind.herokuapp.com/turbines/:id", {}, {
      update: { method: "PUT" }
    });
  }
}());
