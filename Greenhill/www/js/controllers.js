angular.module('greenhill.controllers', [ 'ionic','ngCordova'])


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
  .controller('ShopCtrl', function ($scope) {
    $scope.categories = [
      { title: 'Jewelry + Wearables',
        url:'img//theshop/wearable-cover.jpg',
        subcategories: [{
          title: 'Jewelry',
          url:'img//theshop/jewelry-cover.png',
          products: [{
            title: 'Kristen Shearon of Havok Designs - Cocoon Earrings',
            url: 'img//theshop/jewelry1.png',
            price: '$30.00',
            description:''
          },
            {
              title: 'Havok Designs - Maple + Cherry Remix Cuff Links',
              url: 'img//theshop/jewelry2.png',
              price: '$26.50',
              description:''
            },
            {
              title: 'Havok Designs - Walnut + Maple Remix Cuff Links',
              url: 'img//theshop/jewelry3.png',
              price: '$26.50',
              description:''
            },
            {
              title: 'Kristen Shearon of Havok Designs - Wolf Necklace',
              url: 'img//theshop/jewelry4.png',
              price: '$50.00',
              description:''
            }]
        }, {
          title: 'Fiber + Leather',
          url:'img//theshop/wearable-cover.jpp',
          products: [{
            title: 'Kristen Shearon of Havok Designs - Slim Wallet',
            url: 'img//theshop/wearable1.jpg',
            price: '$35.00',
            description:''
          },
            {
              title: 'Meredith Bridges of Nomad Travel Gear-Dopp Kit',
              url: 'img//theshop/wearable2.jpg',
              price: '$75.00',
              description:''
            },
            {
              title: 'Afternoon Owl Designs - Denim Twist Infinity Scarf',
              url: 'img//theshop/wearable3.jpg',
              price: '$48.00',
              description:''
            },
            {
              title: 'Meredith Bridges of Nomad Travel Gear - Journal',
              url: 'img//theshop/wearable4.jpg',
              price: '$55.00',
              description:''

            }]
        }]
      },
      { title: '2-D',
        url:'img//theshop/2d-maincover.jpg',
        subcategories: [{
          title: 'Two Dimensional',
          url:'img//theshop/2d-cover.jpg',
          products: [{
            title: 'Anne Tilley - Those Eyes Frida Kahlo',
            url: 'img//theshop/2d1.jpg',
            price: '$300.00',
            description:''
          },
            {
              title: 'Pete Sack - Very Close',
              url: 'img//theshop/2d2.jpg',
              price: '$150.00',
              description:''
            },
            {
              title: 'Brandon Cordrey - Contrast & Balance, 2014',
              url: 'img//theshop/2d3.jpg',
              price: '$300.00',
              description:''
            },
            {
              title: 'Brandon Cordrey - Eloquent, 2014',
              url: 'img//theshop/2d4.jpg',
              price: '$300.00',
              description:''
            }]
        }]
      },
      { title: 'Objects',
        url:'img//theshop/objects-maincover.jpg',
        subcategories: [{
          title: 'Clay',
          url:'img//theshop/objects-claycover',
          products: [{
            title: 'Courtney Martin - Sectional Server',
            url: 'img//theshop/objects-clay1',
            price: '$98.00',
            description:''
          },
            {
              title: 'Courtney Martin - Med. Mug',
              url: 'img//theshop/objects-clay2',
              price: '$35.00',
              description:''
            },
            {
              title: 'Michael Hamlin-Smith 5-Tube Foam Flower Brick',
              url: 'img//theshop/objects-clay3',
              price: '$185.00',
              description:''
            },
            {
              title: 'Porter Halyburton - Pedestal Bowl',
              url: 'img//theshop/objectsclay4',
              price: '$50.00',
              description:''
            }]
        },
          {
            title: 'Glass',
            url:'img//theshop/objects-glass-maincover.jpg',
            products: [{
              title: 'Hayden Dakota Wilson - Tipsy Glasses',
              url: 'img//theshop/objects-glass1.jpg',
              price: '$30.00',
              description:''
            },
              {
                title: 'Hayden Dakota Wilson - Scotch Set',
                url: 'img//theshop/objects-glass2.jpg',
                price: '$325.00',
                description:''
              },
              {
                title: 'Amber Marshall - Glass With Dark Blue Dot',
                url: 'img//theshop/objects-glass3.jpg',
                price: '$30.00',
                description:''
              },
              {
                title: 'Amber Marshall - Glass With Lime Dot',
                url: 'img//theshop/objects-glass4.jpg',
                price: '$30.00',
                description:''
              }]
          },

          {
            title: 'Metal',
            url:'img//theshop/objects-metalcover.jpg',
            products: [{
              title: 'Nathan Blank - Gestural Candlesticks',
              url: 'img//theshop/objects-metal1.jpg',
              price: '$595.00',
              description:''
            }]
          },
          {
            title: 'Fiber',
            url:'img//theshop/objects-fiber2.jpg',
            products: [{
              title: 'Daphne Cohan of High Fiber - Black Napkins',
              url: 'img//theshop/objects-fiber1.jpg',
              price: '$32.00',
              description:''
            },
              {
                title: 'Daphne Cohan of High Fiber - Teal Veggies Napkins',
                url: 'img//theshop/objects-fiber2.jpg',
                price: '$32.00',
                description:''
              }]
          },
          {
            title: 'Wood',
            url:'img//theshop/objects-woodcover.jpg',
            products: [{
              title: 'Chuck Waldrop - Natural Edge Closed Form',
              url: 'img//theshop/objects-maincover.jpg',
              price: '$72.00',
              description:''
            },
              {
                title: 'Havok Designs - Northern Star Ornament',
                url: 'img//theshop/objects-wood1.jpg',
                price: '$10.00',
                description:''
              },
              {
                title: 'Havok Designs - Walnut Hexagon Edge Cherry Bowl',
                url: 'img//theshop/objects-gwood2.jpg',
                price: '$30.00',
                description:''
              },
              {
                title: 'H. Eckess Jones - Natural Edge Cherry',
                url: 'img//theshop/objects-wood4.jpg',
                price: '$100.00',
                description:''
              }]
          },
        ]
      },
      { title: 'Books + Paper',
        url:'img//theshop/Books&paper-maincover.jpg',
        subcategories: [{
          title: 'Books and Paper',
          url:'img//theshop/Books&Paper-cover.jpg',
          products: [{
            title: 'Jayme Hennel - Joy, Peace, Love & Cookies',
            url: 'img//theshop/Books&Paper1.jpg',
            price: '$4.50',
            description:''
          },
            {
              title: 'Jayme Henel - Happy Holidays',
              url: 'img//theshop/Books&Paper2.jpg',
              price: '$4.50',
              description:''
            },
            {
              title: 'Jayme Hennel - A Very Merry Christmas 2015',
              url: 'img//theshop/Books&Paper3.jpg',
              price: '$4.50',
              description:''
            },
            {
              title: 'Jayme Hennel - Im Coming in Hot',
              url: 'img//theshop/Books&Paper4.jpg',
              price: '$4.50',
              description:''
            }]
        }]
      }
    ];

    $scope.clickedCategory = function(cat) {
      $scope.cat = cat;
    }

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

  // Exhibition Controller
  .controller('ExhibitionCtrl', function ($scope, $state) {
  })

  // Events Controller
  .controller('EventsCtrl', function ($scope, $state) {
  })

  // Scavenger Controller
  .controller('ScavengerCtrl', function ($scope , $cordovaBarcodeScanner) {
    $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function (imageData) {
        alert(imageData.text);
        console.log("Barcode Format -> " + imageData.format);
        console.log("Cancelled -> " + imageData.cancelled);
      }, function (error) {
        console.log("An error happened -> " + error);
      });
    };

    })


  // MarkMiller Controller
  .controller('MarkMillerCtrl', function ($scope, $state) {
  })

  // Login Controller
  .controller('LoginCtrl', ['$scope', '$state',
    function ($scope, $state) {

      $scope.loginWithFacebook = function () {
        $state.go('app.profile');
      };

      // hard login
      $scope.login = function () {
        $state.go('app.profile');
      };


      $scope.register = function () {
        $state.go('app.profile');

      };
      // registers new Firebase user
    }])


  // Profile Controller
  .controller('ProfileCtrl', function ($scope, $state, $stateParams) {


  });


