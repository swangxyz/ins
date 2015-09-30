angular.module('Ins',['environment']).factory('API', function ($http,envServiceProvider) {
  envServiceProvider.set('development');
  //envService.set('production');
  $serverUrl = envServiceProvider.read('serverUrl');
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