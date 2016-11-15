(function() {
  'use strict';
  angular
  .module('app')
  .factory('CommonService', function($http) {

    var collection = 'storage';
    var api = 'http://api-name/' + collection;

    var getIt = function () {
      return $http.get(api);
    };

    var postIt = function(item) {
      return $http.post(api,item);
    };

    var deleteItem = function(item) {
      var url = api + '/' + item._id;
      return $http.delete(url);
    };

    return {
      getIt: getIt,
      postIt: postIt,
      deleteItem: deleteItem
    };
  });
})();
