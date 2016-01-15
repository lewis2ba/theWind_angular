(function(){
  angular
  .module("weather")
  .directive("weatherDataForm", [
    '$http',
    function($http){
      return{
        templateUrl: 'js/weather/_weather_data_form.html',
        replace: true,
        scope: {
          formType: '@'
        },
        link: function(scope){
          scope.getWeatherData = function(){
            var city = this.weather.city
            var state = this.weather.state
            $http({
              method: "GET",
              url: 'http://api.wunderground.com/api/14da815aa9cb1bfe/conditions/q/' + state + '/' + city + '.json'
            }).then(function(response){
              $('#windResults').empty()
              $('#windResults').append("<h3>Current Wind Speed in: "+city+" "+state+" <span id='windSpeed'>"+response.data.current_observation.wind_kph+"</span> kph</h3>")

              if($("#turbineDataForm"))
              {
                $("#turbineDataForm").css("visibility", 'visible')
                $("#turbineSpecs").css("visibility", 'visible')
              }

            })
          }

        }
      }
    }
  ])
}())
