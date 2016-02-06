angular.module('greenhill.controllers', [])


  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});


  })
  // Artists Controller
  .controller('ArtistsCtrl', function () {
  })

  // Art Controller
  .controller('ArtCtrl', function ($scope) {
  })
  // ArtDemo Controller
  .controller('ArtDemoCtrl', function ($scope, $state) {

  })

  // Home Controller
  .controller('HomeCtrl', function ($scope, $state) {
  })

  // Settings Controller
  .controller('SettingsCtrl', function ($scope, $state) {
  })

  // NewPost Controller
  .controller('NewPostCtrl', function ($scope, $state) {
  })

  // Store Controller
  .controller('CartCtrl', function ($scope, $state) {
  })

  // KidsCorner Controller
  .controller('KidsCornerCtrl', function ($scope, $state) {
  })

  // Events Controller
  .controller('EventsCtrl', function ($scope, $state) {
  })

  // Scavenger Controller
  .controller('ScavengerCtrl', function ($scope, $state) {
  })
  // MarkMiller Controller
  .controller('MarkMillerCtrl', function ($scope, $state) {
  })

  // Login Controller
  .controller('LoginCtrl', ['$scope', '$state',
    function ($scope, $state) {

      $scope.loginWithFacebook = function () {
        $state.go('app.home');
      };

      // hard login
      $scope.login = function () {
        $state.go('app.home');
      };


      $scope.register = function () {
        $state.go('app.home');

      };
      // registers new Firebase user
    }])


  // Profile Controller
  .controller('ProfileCtrl', function ($scope, $state, $stateParams) {


  });


