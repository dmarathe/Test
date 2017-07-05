angular.module('ricepo.filter.option', [])
  .filter('d', function(){
    return function(cents){
      return(cents/100).toFixed(2);
    };
  })
