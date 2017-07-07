angular.module('ricepo.service.optionService', [])
  .factory('optionFactory',function() {
      var data = {
        "name": "Signature Milk Tea",
         "price": 325,
          "options": [
                              {
                                "name": "Add On",
                                "min": 0,
                                "max": 0,
                                "items": [
                                  {
                                    "name": "bubblebubblebubblebubblebubblebubblebubblebubblebubblebubblebubblebubblebubble",
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
                                      "available": false
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
                                      "price": 20,
                                      "available": true
                                    },
                                    {
                                      "name": "Medium",
                                      "price": 10,
                                      "available": true
                                    }
                                  ]
                              },
                              {
                                "name": "Temp",
                                "min": 3,
                                "max": 3,
                                "items": [
                                   {
                                     "name": "Cold",
                                     "price": 0,
                                     "available": true
                                   },
                                   {
                                     "name": "Hot",
                                     "price": 25,
                                     "available": true
                                   },
                                   {
                                     "name": "Extra Hot",
                                     "price": 50,
                                     "available": true
                                   }
                                 ]
                              },
                              // corner case
                              // {
                              //   "name": "Add",
                              //   "min": 1,
                              //   "max": 0,
                              //   "items": [
                              //     {
                              //       "name": "bubble",
                              //       "price": 50,
                              //       "available": false
                              //     },
                              //     {
                              //       "name": "pudding",
                              //       "price": 50,
                              //       "available": false
                              //     }
                              //   ]
                              // }
                      ]
      }
      return {
        getFoodOptions : function(){
          return data;
        }
      }

  });
