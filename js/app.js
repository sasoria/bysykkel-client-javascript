var app = angular.module("app", ['ngResource', 'ngRoute']);
  app.controller("AppController", function($scope, $http, apiService) {
  
  $scope.stations = []
  var stationInfoEndpoint = 'station_information.json'
  var stationStatusEndpoint = 'station_status.json'

  function createStations() {
    var infoStations = apiService.getStations(stationInfoEndpoint)
    var statusStations = apiService.getStations(stationStatusEndpoint)
    const stationBy = id => station => station.station_id === id;

    infoStations.forEach(function(st) {
      var st2 = statusStations.find(stationBy(st.station_id))
      $scope.stations.push({
        name: st.name,
        bikesAvailable: st2.num_bikes_available,
        locksAvailable: st2.num_docks_available
      })
    })
  }
  createStations()
});