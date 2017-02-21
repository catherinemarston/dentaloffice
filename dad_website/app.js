angular.module('dadWebsite', ['ui.router']).config(function ($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home/homeTmpl.html'
  })
  .state('books', {
    url: '/books',
    templateUrl: 'books/bookTmpl.html'
  })
  .state('crisis', {
    url: '/books/CrisisInBaghdad',
    templateUrl: 'books/crisisTmpl.html'
  })
  .state('warthogs', {
    url: '/books/WarthogsUnleashed',
    templateUrl: 'books/warthogsTmpl.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'about/aboutTmpl.html'
  });
  $urlRouterProvider
  .otherwise('/');


});
