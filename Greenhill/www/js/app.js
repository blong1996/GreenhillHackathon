// Ionic greenhill App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'greenhill' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'greenhill.controllers' is found in controllers.js
angular.module('greenhill', ['ionic', 'ngCordova','greenhill.controllers'])

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
    .state('app.exhibition', {
      url: '/exhibition',
      views: {
        'menuContent': {
          templateUrl: 'templates/exhibition.html',
          controller: 'ExhibitionCtrl'
        }
      }
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
    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/Settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })
    .state('app.new-post', {
      url: '/new-post',
      views: {
        'menuContent': {
          templateUrl: 'templates/new-post.html',
          controller: 'NewPostCtrl'
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

  .state('app.shop', {
      url: '/shop',
      views: {
        'menuContent': {
          templateUrl: 'templates/shop.html',
          controller: 'ShopCtrl'
        }
      }
    })

    .state('app.category',{
      url: '/shop/:category',
      views: {
        'menuContent': {
          templateUrl: 'templates/category.html',
          controller: 'ShopCtrl'
        }
      }
    })
    .state('app.subcategory',{
      url: '/shop/:category/:subcategory',
      views: {
        'menuContent': {
          templateUrl: 'templates/subcategory.html',
          controller: 'ShopCtrl'
        }
      }
    })
    .state('app.product',{
      url: '/shop/:category/:subcategory/:product',
      views: {
        'menuContent': {
          templateUrl: 'templates/product.html',
          controller: 'ShopCtrl'
        }
      }
    })
    .state('app.art-demo', {
      url: '/art-demo',
      views: {
        'menuContent': {
          templateUrl: 'templates/Art-demo.html',
          controller: 'ArtDemoCtrl'
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
    .state('app.MarkMiller', {
      url: '/MarkMiller',
      views: {
        'menuContent': {
          templateUrl: 'templates/MarkMiller.html',
          controller: 'MarkMillerCtrl'
        }
      }
    })

    .state('app.cart', {
      url: '/cart',
      views: {
        'menuContent': {
          templateUrl: 'templates/cart.html',
          controller: 'CartCtrl'
        }
      }
    })
    .state('app.events', {
      url: '/events',
      views: {
        'menuContent': {
          templateUrl: 'templates/events.html',
          controller: 'EventsCtrl'
        }
      }
    })
    .state('app.scavenger', {
      url: '/scavenger',
      views: {
        'menuContent': {
          templateUrl: 'templates/scavenger.html',
          controller: 'ScavengerCtrl'
        }
      }
    })
    .state('app.kids-corner', {
      url: '/kids-corner',
      views: {
        'menuContent': {
          templateUrl: 'templates/kids-corner.html',
          controller: 'KidsCornerCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
