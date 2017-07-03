angular.module('ricepo.service.optionService', [])
  .factory('optionFactory',function() {
      var data = {
        "name": "Signature Milk Tea",
         "price": 325,
          "options": [
                              {
                                "name": "Add On",
                                "min": 1,
                                "max": 0,
                                "items": [
                                  {
                                    "name": "bubble",
                                    "price": 50,
                                    "available": true
                                  },
                                  {
                                    "name": "pudding",
                                    "price": 50,
                                    "available": true
                                  }
                                ]
                              },
                              {
                                "name": "Tea",
                                "min": 1,
                                "max": 1,
                                "items": [
                                    {
                                      "name": "milk tea",
                                      "price": 0,
                                      "avilable": true
                                    },
                                    {
                                       "name": "green milk tea",
                                      "price": 0,
                                      "available": true
                                    }
                                  ]
                              },
                              {
                                 "name": "Size",
                                "min": 1,
                                "max": 1,
                                "items": [
                                    {
                                      "name": "Large",
                                      "price": 0,
                                      "available": true
                                    },
                                    {
                                      "name": "Medium",
                                      "price": 0,
                                      "available": false
                                    }
                                  ]
                              }
                      ]
      }
      return {
        getFoodOptions : function(){
          return data;
        }
      }

  });