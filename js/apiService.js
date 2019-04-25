app.factory("apiService", function($http, $q) {
  var base_url = 'http://gbfs.urbansharing.com/oslobysykkel.no/'

  return {
    getStations: function(api_endpoint) {
      var xhReq = new XMLHttpRequest();
      xhReq.open("GET", base_url+api_endpoint, false)
      xhReq.setRequestHeader("Content-type", "text/plain")
      xhReq.send(null)
      
      return JSON.parse(xhReq.responseText).data.stations
    }
  }
})
