"use strict";

(function(){
  angular
  .module("theWind", [
    "ui.router",
    "weather",
    "turbine"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("weatherIndex", {
      url: "/",
      templateUrl:
      "js/weather/index.html",
      controller: "WeatherIndexController",
      controllerAs: "WeatherIndexViewModel"
    })
    .state("turbineIndex", {
      url:"/turbines",
      templateUrl: "js/turbine/index.html",
      controller: "TurbineIndexController",
      controllerAs: "TurbineIndexViewModel"
    }).
    state("turbineNew",{
      url: "/turbines/new",
      templateUrl: "js/turbine/new.html",
      controller: "TurbineNewController",
      controllerAs: "TurbineNewViewModel"
    })
  }
}())
