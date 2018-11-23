console.log('jaaa!!')

angular.module('pu', ['ui.router', 'controllers', 'services', 'duScroll'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('web', {
    url: '/web',
    views: {
      'navigation': {
        templateUrl: 'partials/navigation.html',
        controller: 'NavigationCtrl'
      },
      'main': {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      },
      'information': {
        templateUrl: 'partials/information.html',
        controller: 'InformationCtrl'
      },
      'contact': {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      },
      'coworkers': {
        templateUrl: 'partials/coworkers.html',
        controller: 'CoworkersCtrl'
      },
      'footer': {
        templateUrl: 'partials/footer.html',
        controller: 'FooterCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/web')

})
