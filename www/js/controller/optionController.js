angular.module('ricepo.controllers.option', [])
    .controller('optionController', ['$scope', 'optionFactory', function($scope,optionFactory){
      $scope.options = optionFactory.getFoodOptions();

  }]);
