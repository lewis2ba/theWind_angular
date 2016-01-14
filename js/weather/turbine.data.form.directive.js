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
          console.log("clicked")
          console.log(this.weather)
          towerHeight = this.weather.towerHeight
          diameter = this.weather.diameter
          this.calculateWindPower(towerHeight, diameter)
        },
        scope.getTurbineDataFromSelect = function(){
          console.log(this.specs)
          console.log(this)
          specifications = JSON.parse(this.specs.toString())
          console.log(specifications.diameter)
          console.log(specifications.height)
          this.calculateWindPower(specifications.height, specifications.diameter)
        },
        scope.calculateWindPower = function(towerHeight, diameter){
          console.log(diameter)
          var windSpeedInKph = $('#windSpeed').text()
          var windSpeed = windSpeedInKph/3.6
          console.log("m/s: " + windSpeed)
          var correctedWindSpeed = windSpeed*Math.pow((towerHeight/10),(1/7))
          console.log("m/s: " + correctedWindSpeed)
          var efficiency = .3
          var radius = diameter/2
          var sweptArea = Math.PI * Math.pow(radius,2)
          var rho = 1.225
          var power = Math.floor((.5 * rho * sweptArea * Math.pow(correctedWindSpeed, 3) * efficiency))
          console.log("sweptArea: "+sweptArea)
          console.log(power+" W")
          var avgMnthlyHomeEnergyUse = 911
          var avgMthlyWindEnergy = (power * 24 * 30)/1000
          var percentGenerated = Math.floor(avgMthlyWindEnergy/avgMnthlyHomeEnergyUse*100)
          $("#powerResults").empty()
          $("#powerResults").append("<h3>Instantaneous Power Estimate: "+ power + "W*</h3>")
          $("#powerResults").append("<h4 class ='powerResults'>At a a constant wind speed of "+ windSpeedInKph + "kph a "+towerHeight+"m tall wind turbine with a blade diameter of "+diameter+"m could produce " + avgMthlyWindEnergy + " kWh of energy a month. Which is about " +percentGenerated+"% of an average American home's monthly usage.</h4>")
          this.calculatePayback(avgMthlyWindEnergy)
        },
        scope.calculatePayback = function(energy){
          console.log(energy)
          var kWhCost = .15
          var cost = 55000
          var energy = energy*12
          var paybackPeriod = cost/energy*kWhCost
          console.log(paybackPeriod)
        }
      }
    }
  })
}())
