(function() {
  'use strict';
  angular
  .module('app')
  .controller('CommonController', function($state, $scope, CommonService) {

    // alias controller. Bind to controller instead of $scope
    var vm = this;

    var getStuff = function() {
      CommonService.getIt().then(function(data) {
        vm.items = data.data;
        $scope.item = null;
      }, function(err) {
        console.log(err);
      });
    };

    vm.postStuff = function(item) {
      CommonService.postIt(item).then(function(data) {
        getStuff();
      }, function(err) {
        console.log(err);
      });
    };

    vm.delete = function(item) {
      CommonService.deleteItem(item).then(function(data) {
        getStuff();
      }, function(err) {
        console.log(err);
      });
    };

    angular.element(document).ready(function() {
      getStuff();
    });

  });
})();
