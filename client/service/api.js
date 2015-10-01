angular.module('Ins').factory('API', function ($http) {

  $serverUrl = "https://ins-server.herokuapp.com";
  return {
    getFeed: function () {
      return $http.get($serverUrl+'/api/feed');
    },
    getMediaById: function (id) {
      return $http.get($serverUrl+'/api/media/' + id);
    },
    likeMedia: function (id) {
      return $http.post($serverUrl+'/api/like', { mediaId: id });
    }
  }
});