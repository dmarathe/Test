angular.module('ricepo.controllers.option', [])
    .controller('optionController', ['$scope', 'optionFactory', function($scope,optionFactory){
      $scope.options = optionFactory.getFoodOptions();
      $scope.selectedItems = [];
      $scope.total = $scope.options.price;
      $scope.add = function(option,item){
        option.selectedItems = option.selectedItems || [];
        item.count = (item.count || 0) + 1;
        option.selectedItems.push(item);
        $scope.total += item.price;
        if((option.max !== 0) && (option.selectedItems.length > option.max)){
          option.selectedItems[0].count--;
          $scope.total -= option.selectedItems[0].price;
          option.selectedItems.splice(0,1);
        }
        console.log("oops");

      };

      $scope.remove = function(option,item,$event){
        item.count = (item.count || 1) - 1;
        $scope.total -= item.price;
        //remove recently added element from an array.

        //
        if ($event.stopPropagation) {
          $event.stopPropagation();
        }
        console.log(option.selectedItems);
      };

      $scope.complete = function(){
      //check each item from selected items for min
      };
  }]);
