angular.module('controllers', [])

.controller('NavigationCtrl', function ($scope, $window, scroll, resize) {

  $scope.mobile = true
  $scope.expand = false

  $scope.click = function () {
    $scope.expand = !$scope.expand
  }

  $scope.goto = function (element) {

    $scope.expand = false

    $('html, body').animate({
      scrollTop: angular.element(document.getElementById(element)).prop('offsetTop') - 64
    }, 1000)

  }

  $scope.scroll = function() {

    if ($window.scrollY > $window.innerHeight - 66)
      $scope.down = true
    else
      $scope.down = false

    $scope.$apply()

  }

  $scope.resize = function() {

    if ($window.innerWidth >= 600) {
      $scope.mobile = false
      $scope.expand = false
    }
    else
      $scope.mobile = true

    $scope.$apply()

  }

  angular.element($window).bind('scroll', $scope.scroll).bind('resize', $scope.resize)

})

.controller('MainCtrl', function ($scope, $window) {

  angular.element($window).bind('scroll', function() {

    $scope.degrees = (($window.scrollY / $window.innerHeight - 0.3) ) * 720

    if ( $scope.degrees < 0 ) $scope.degrees = 0
    if ( $scope.degrees > 180 ) $scope.degrees = 180

    $scope.$apply()

  })

})

.controller('InformationCtrl', function ($scope) {

})


.controller('ContactCtrl', function ($scope, $window) {

  $scope.goto = function (link) {
    $window.open('//' + link)
  }

})

.controller('CoworkersCtrl', function ($scope) {

})

.controller('FooterCtrl', function ($scope, $window) {

})
