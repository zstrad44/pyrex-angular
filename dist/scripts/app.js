angular
  .module('pyrexApp', [
    'ui.router',
    'ngMeta',
    'ngAnimate',
    'angular-typed',
    'slickCarousel',
    'ngSanitize'
  ])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', 'ngMetaProvider', function($urlRouterProvider, $stateProvider, $locationProvider, ngMetaProvider) {
    // Remove hashbang
    // Uncomment for production!!! _-_-_-_-_____--__-_--__--_
    var affix = "| Pyrex Designs | Gilbert Web Development";
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true,
        rewriteLinks: true,
    });
    // Redirect 404
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('master', {
        templateUrl: '/templates/master.html',
        abstract: true,
        controller: 'MasterCtrl'
      })
      .state('home', {
        data: {
             meta: {
               'title': 'Pyrex Designs | Gilbert Web Development',
               'description': 'Integrated Management Solutions (ims-trident) provides unique data management solutions for specialty courts, medical practices and toxicology laboratories.',
               'canonical': 'http://pyrexdesigns.com/',
               'robots': 'follow, index',
             }
        },
        url: '/',
        parent: 'master',
        templateUrl: '/templates/home.html',
        controller: 'HomeCtrl'
      })
      .state('services', {
        url: '/services',
        parent: 'master',
        templateUrl: '/templates/services.html',
        controller: 'ServicesCtrl',
        data: {
             meta: {
               'title': 'Services ' + affix,
               'description': 'Current customers and clients of Integrated Management Solutions. See why so many chose iMs-Trident.',
               'canonical': 'http://pyrexdesigns.com/services',
               'robots': 'follow, index',
             }
        }
      })
      .state('portfolio', {
        url: '/portfolio',
        parent: 'master',
        templateUrl: '/templates/portfolio.html',
        controller: 'PortfolioCtrl',
        data: {
             meta: {
               'title': 'Portfolio ' + affix,
               'description': 'Current portfolio of Integrated Management Solutions. Together we can make a difference.',
               'canonical': 'http://pyrexdesigns.com/portfolio',
               'robots': 'follow, index',
             }
        }
      })
      .state('pricing', {
        url: '/pricing',
        parent: 'master',
        templateUrl: '/templates/pricing.html',
        controller: 'PricingCtrl',
        data: {
             meta: {
               'title': 'Pricing ' + affix,
               'description': 'Current pricing of Integrated Management Solutions. Together we can make a difference.',
               'canonical': 'http://pyrexdesigns.com/pricing',
               'robots': 'follow, index',
             }
        }
      })
      .state('contact', {
        url: '/contact',
        parent: 'master',
        templateUrl: '/templates/contact.html',
        controller: 'ContactCtrl',
        data: {
             meta: {
               'title': 'Contact ' + affix,
               'description': 'Have a question about iMs-Trident? Give us a call or send us a message, we\'re happy to help.',
               'canonical': 'http://pyrexdesigns.com/contact',
               'robots': 'follow, index',
             }
        }
      });

// Uncomment for production!!! _-_-_-_-_____--__-_--__--_
      $locationProvider.html5Mode(true);
  }])
   .run(function(ngMeta) {
         ngMeta.init();
  });
