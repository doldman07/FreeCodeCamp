// JavaScript source code
var app = angular.module('WeatherApp', []);

app.controller('WeatherCtrl', function ($scope, $http) {

    $http.get("http://ip-api.com/json")
     .success(function (location) {
         $scope.city = location.city;
         $scope.regionName = location.regionName;
         $scope.countryCode = location.countryCode;

         var appid = "&APPID=92219ff0902ebb5b35ef79cb8bce75e8";

         var URL = "http://api.openweathermap.org/data/2.5/weather?lat=" + location.lat + "&lon=" + location.lon + appid;

         $http.get(URL).success(function (data) {
             $scope.description = data.weather[0].description;
             $scope.speed = (2.237 * data.wind.speed).toFixed(1);
             $scope.temp = data.main.temp.toFixed(1);
             $scope.ftemp = (($scope.temp * 9) / 5 - 459.67).toFixed(0);
             $scope.ctemp = ($scope.temp - 273).toFixed(0);
             $scope.icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";


             switch ($scope.description) {
                 case 'clear sky': {
                     $scope.weatherBackground = {
                         "background": "url('http://www.fabiovisentin.com/photography/photo/25/sky-wallpaper-06282.jpg')",
                         "background-size": "cover"
                     };
                     break;
                 }
                 case "broken clouds": {
                     $scope.weatherBackground = {
                         "background": "url('http://media.kids-myshot.nationalgeographic.com/2012/11/50b593863c91024122011180_large_medium.jpg')",
                         "background-size": "cover"
                     };
                     break;
                 }
                 case "few clouds": {
                     $scope.weatherBackground = {
                         "background": "url('http://farm1.staticflickr.com/3/6539633_eb09b30942_z.jpg')",
                         "background-size": "cover"
                     };
                     break;
                 }
                 case "mist": {
                     $scope.weatherBackground = {
                         "background": "url('http://freebigpictures.com/wp-content/uploads/2009/09/mist.jpg')",
                         "background-size": "cover"
                     };
                     break;
                 }
                 case "rain": {
                     $scope.weatherBackground = {
                         "background": "url('http://wallpoper.com/images/00/42/15/64/rain-window_00421564.jpg')",
                         "background-size": "cover"
                     };
                     break;
                 }
                 case "scattered clouds": {
                     $scope.weatherBackground = {
                         "background": "url('http://il4.picdn.net/shutterstock/videos/5577650/thumb/1.jpg')",
                         "background-size": "cover"
                     };
                     break;
                 }
                 case "shower rain": {
                     $scope.weatherBackground = {
                         "background": "url('http://www.ukweatherforecast.co.uk/wp-content/uploads/2014/05/rain.jpg')",
                         "background-size": "cover"
                     };
                     break;
                 }
                 case "snow": {
                     $scope.weatherBackground = {
                         "background": "url('http://www.picturesofwinter.net/snow-2929.jpg')",
                         "background-size": "cover"
                     };
                     break;
                 }
                 case "thunderstorm": {
                     $scope.weatherBackground = {
                         "background": "url('http://farmersalmanac.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg')",
                         "background-size": "cover"
                     };
                     break;
                 }
                 default:
                     $scope.weatherBackground =
                       {
                           "background": "url('http://upload.wikimedia.org/wikipedia/commons/8/89/Cumulus_cloud.jpg')",
                           "background-size": "cover"
                       };
                     break;
             }

         });
     });
});
