angular.module('Flatcasts', ['ngResource', 'youtube-embed', 'ui.router', 'templates', 'angularUtils.directives.dirPagination'])
  .config(function ($stateProvider, $urlRouterProvider, paginationTemplateProvider) {
    paginationTemplateProvider.setPath('pagination/mine.tpl.html');

    if (current_user === null) {
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'index2.html',
        controller: 'LecturesCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html'
      })
    } else {
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'index.html',
        controller: 'LecturesCtrl'
      })
      .state('lecture', {
        url: '/lectures',
        templateUrl: 'lectures/index.html'
      })
      .state('create', {
        url: '/lectures/create',
        templateUrl: 'lectures/create.html'
      })
      .state('show', {
        url: '/lectures/:id',
        controller: 'LectureCtrl as lecture',
        templateUrl: 'lectures/show.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html'
      })
    }

    $urlRouterProvider.otherwise('/');
  })
