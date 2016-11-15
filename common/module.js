(function() {
  'use strict';
  angular
  .module('app', [
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      views: {
        'chewy': {
          templateUrl: 'common/views/home.html',
          controller: 'CommonController as ctrl'
        }
      }
    })
    .state('404', {
      url: '/404',
      views: {
        'chewy': {
          template: '<h3>404 Error. Page not found</h3>'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  });
})();
