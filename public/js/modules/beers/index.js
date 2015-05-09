(function(){

  'use strict';

  angular.module('myApp.Beer', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/beers', {
        templateUrl: 'expose/beers/list',
        controller: 'BeerListController'
      })
      .when('/beers/create', {
        templateUrl: 'expose/beers/create',
        controller: 'BeerCreateController'
      })
      .when('/beers/:id', {
        templateUrl: 'expose/beers/show',
        controller: 'BeerGetController'
      })
      .when('/beers/:id/edit', {
        templateUrl: 'expose/beers/edit',
        controller: 'BeerUpdateController'
      });
  }])

  .controller('BeerListController', BeerListController)
  .controller('BeerCreateController', BeerCreateController)
  .controller('BeerGetController', BeerGetController)
  .controller('BeerUpdateController', BeerUpdateController);

  function BeerListController ($scope, $http) {

    var url = 'http://localhost:3000/api/beers/'
      , method = 'GET'
      ;

    $scope.title = 'Listagem das cervejas';
    $scope.reverse = false;
    $scope.predicate = 'name';

    $scope.ordenar = function(predicate) {
      $scope.predicate = predicate;
      $scope.reverse = !$scope.reverse
    }

    $http({
      url: url,
      method: method
    })
    .success(function(data){
      console.log('Data: ', data);
      $scope.beers = data;
      $scope.msg = 'Listagem completa.';
    })
    .error(function(err){
      console.log('Erro: ', err);
      $scope.msg = 'ERROOOOOO na listagem.';
    });

    $scope.remove = function(beer) {

      if(confirm('Deseja mesmo remover a cerveja ' + beer.name + '?')) {
        var method = 'DELETE'
          , _url = url + beer._id
        ;
        $http({
          url: _url,
          method: method
        })
        .success(function(data){
          console.log('Data: ', data);
          $scope.beer = data;
          $scope.msg = 'Remoção completa.';

          var index = $scope.beers.indexOf(beer);
          $scope.beers.splice(index, 1);

        })
        .error(function(err){
          console.log('Erro: ', err);
          $scope.msg = 'ERROOOOOO na consulta.';
        });
      }
    }
  };

  function BeerGetController ($scope, $http, $routeParams) {

    var url = 'http://localhost:3000/api/beers/' + $routeParams.id
      , method = 'GET'
      ;

    $scope.title = 'Consulta de cerveja';

    $http({
      url: url,
      method: method
    })
    .success(function(data){
      console.log('Data: ', data);
      $scope.beer = data;
      $scope.msg = 'Consulta completa.';
    })
    .error(function(err){
      console.log('Erro: ', err);
      $scope.msg = 'ERROOOOOO na consulta.';
    });
  };

  function BeerCreateController($scope, $http) {

    var url = 'http://localhost:3000/api/beers'
      , method = 'POST'
      ;
    $scope.create = function(beer) {
      $http({
        url: url
      , method: method
      , data: beer
      })
      .success(function(data){
        console.log('Data: ', data);
        $scope.msg = 'Cadastro completo.';
      })
      .error(function(err){
        console.log('Erro: ', err);
        $scope.msg = 'ERROOOOOO no cadastro.';
      });
    }
  };

  function BeerUpdateController ($scope, $http, $routeParams) {

    var url = 'http://localhost:3000/api/beers/' + $routeParams.id
      , method = 'GET'
      ;

    $scope.title = 'Consulta de cerveja';

    $http({
      url: url,
      method: method
    })
    .success(function(data){
      console.log('Data: ', data);
      $scope.beer = data;
      $scope.msg = 'Consulta completa.';
    })
    .error(function(err){
      console.log('Erro: ', err);
      $scope.msg = 'ERROOOOOO na consulta.';
    });

    $scope.update = function(beer) {
      
      var method = 'PUT';
      $http({
        url: url,
        method: method,
        data: beer
      })
      .success(function(data){
        console.log('Data: ', data);
        $scope.beer = data;
        $scope.msg = 'Consulta completa.';
      })
      .error(function(err){
        console.log('Erro: ', err);
        $scope.msg = 'ERROOOOOO na consulta.';
      });
    }
  };

  BeerListController.$inject = ['$scope', '$http'];
  BeerCreateController.$inject = ['$scope', '$http'];
  BeerGetController.$inject = ['$scope', '$http', '$routeParams'];
  BeerUpdateController.$inject = ['$scope', '$http', '$routeParams'];

})();








