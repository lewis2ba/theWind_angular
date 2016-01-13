"use strict";

(function(){
  angular
  .module("theWind", [
    "ui.router",
    "weather"
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
  }
}())
