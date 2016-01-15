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
        scope.getTurbineDataFromForm = function(){
          towerHeight = this.weather.towerHeight
          diameter = this.weather.diameter
          this.calculateWindPower(towerHeight, diameter)
        },
        scope.getTurbineDataFromSelect = function(){
          specifications = JSON.parse(this.specs.toString())
          this.calculateWindPower(specifications.height, specifications.diameter)
        },
        scope.calculateWindPower = function(towerHeight, diameter){
          var windSpeedInKph = $('#windSpeed').text()
          var windSpeed = windSpeedInKph/3.6
          var correctedWindSpeed = windSpeed*Math.pow((towerHeight/10),(1/7))
          var efficiency = 0.3
          var radius = diameter/2
          var sweptArea = Math.PI * Math.pow(radius,2)
          var rho = 1.225
          var power = Math.floor((0.5 * rho * sweptArea * Math.pow(correctedWindSpeed, 3) * efficiency))
          var avgMnthlyHomeEnergyUse = 911
          var avgMthlyWindEnergy = (power * 24 * 30)/1000
          var percentGenerated = Math.floor(avgMthlyWindEnergy/avgMnthlyHomeEnergyUse*100)
          $("#powerResults").empty()
          $("#powerResults").append("<h3>Instantaneous Power Estimate: "+ power + "W*</h3>")
          $("#powerResults").append("<h4 class ='powerResults'>At a a constant wind speed of "+ windSpeedInKph + "kph a "+towerHeight+"m tall wind turbine with a blade diameter of "+diameter+"m could produce " + avgMthlyWindEnergy + " kWh of energy a month. Which is about " +percentGenerated+"% of an average American home's monthly usage.</h4>")
        }
      }
    }
  })
}())
