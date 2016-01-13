(function(){
  angular
  .module("weather")
  .directive("turbineDataForm", function(){
    return{
      templateUrl: 'js/weather/_turbine_data_form.html',
      replace: true,
      scope: {
        formType: '@'
      },
      link: function(scope){
        scope.getTurbineData = function(){
          console.log("clicked")
          console.log(this.weather)
          towerHeight = this.weather.towerHeight
          diameter = this.weather.diameter
          this.calculateWindPower(towerHeight, diameter)
        },
        scope.calculateWindPower = function(towerHeight, diameter){
          console.log(diameter)
          windSpeed = $('#windSpeed').text()
          windSpeed = windSpeed/3.6
          console.log("m/s: " + windSpeed)
          correctedWindSpeed = windSpeed*Math.pow((towerHeight/10),(1/7))
          console.log("m/s: " + correctedWindSpeed)
          efficiency = .37
          radius = diameter/2
          sweptArea = Math.PI * Math.pow(radius,2)
          rho = 1.225
          power = Math.floor((.5 * rho * sweptArea * Math.pow(correctedWindSpeed, 3) * efficiency))
          console.log("sweptArea: "+sweptArea)
          console.log(power+" W")
          $("#powerResults").empty()
          $("#powerResults").append("<h3>Instantaneous Power Estimate: "+ power + "W*</h3>")
        }
      }
    }
  })
}())
