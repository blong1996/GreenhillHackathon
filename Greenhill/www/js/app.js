// Ionic greenhill App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'greenhill' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'greenhill.controllers' is found in controllers.js
angular.module('greenhill', ['ionic', 'greenhill.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl:"templates/login.html",
      controller: 'LoginCtrl'
    })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.art', {
      url: '/art',
      views: {
        'menuContent': {
          templateUrl: 'templates/art.html',
          controller: 'ArtCtrl'
        }
      }
    })
    .state('app.artists', {
      url: '/artists',
      views: {
        'menuContent': {
          templateUrl: 'templates/artists.html',
          controller: 'ArtistsCtrl'
        }
      }
    })

    .state('app.store', {
      url: '/store',
      views: {
        'menuContent': {
          templateUrl: 'templates/store.html',
          controller: 'StoreCtrl'
        }
      }
    })
    .state('app.kids-corner', {
      url: '/store',
      views: {
        'menuContent': {
          templateUrl: 'templates/kids-corner.html',
          controller: 'KidsCornerCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/profile');
});
