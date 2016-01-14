"use strict";

(function(){
  angular
    .module( "turbine" )
    .factory( "TurbineFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction( $resource ){
    return $resource( "http://localhost:3000/turbines/:id", {}, {
      update: { method: "PUT" }
    });
  }
}());
