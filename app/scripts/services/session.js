'use strict';

angular.module('comicaltournamentApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
