angular.module('antitheft', ['ui.router', 'controllers', 'services', 'duScroll'])

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

// angular.element(document).ready(function () {
//
//   $(window).scroll(function () {
//     $('.r').each(function (i) {
//
//       console.log(i)
//
//         var bottom_of_object = $(this).position().top + $(this).outerHeight();
//         var bottom_of_window = $(window).scrollTop() + $(window).height() * 0.7;
//
//         /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
//         // bottom_of_window = bottom_of_window - $(window).height() * 0.6;
//
//         if( bottom_of_window > bottom_of_object ) $(this).animate({'opacity':'1'}, 500)
//
//     })
//   })
//
// })
