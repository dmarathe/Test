angular.module('ricepo.controllers.option', [])
    .controller('optionController', ['$scope', 'optionFactory', function($scope,optionFactory){

      $scope.init = function(){
        $scope.options = optionFactory.getFoodOptions();
        $scope.disabledCheckout = false;
        $scope.total = $scope.options.price;
        $scope.validate();

      }
      //check if minimum items are available
      $scope.validate = function(){
        _.forEach($scope.options.options, function(value,key){
          var count = 0;
          _.forEach(value.items, function(value,key){
            if(value.available){
              count++;
            }
          });
          if(count < value.min ){
            $scope.disabledCheckout = true;
            //alert("sorry can not place your order");
            return false;
          }
        })
      }
      $scope.add = function(option,item){
        option.selectedItems = option.selectedItems || [];
        item.count = (item.count || 0) + 1;
        option.selectedItems.push(item);
        $scope.total += item.price;
        // check if minimun items are added if so=> remove first item from list
        if(option.max  && (option.selectedItems.length > option.max)){
          option.selectedItems[0].count--;
          $scope.total -= option.selectedItems[0].price;
          option.selectedItems.splice(0,1);
        }
      };

      //remove requested item from list.
      $scope.remove = function(option,item,$event){
        item.count= (item.count || 1) - 1;
        $scope.total -= item.price;
        //remove recently added element from an array
        option.selectedItems.splice(_.lastIndexOf(option.selectedItems, item), 1);
        if ($event.stopPropagation) {
          $event.stopPropagation();
        }
      };

      //Check if minimum required items are added in list
      $scope.complete = function(){
          var error = [];
          var output = [];
        //check each item from selected items for min
        _.forEach($scope.options.options, function(value,key){
            value.selectedItems = value.selectedItems || [];
            if(value.selectedItems.length < value.min){
              error.push("Please choose atleast " + value.min + " item for " + value.name);
            }else{
              _.forEach(value.selectedItems, function(value,key){
                output.push(value.name);
              });
            }
        });
        if(error.length){
          alert(error.join("\n"));
        }else{
          alert("Your order details are follows: " + output.join("-"));
        }

      };
      $scope.init();
  }]);
