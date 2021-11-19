var _ = {
    map: function(arr, callback) {

      for (var i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i])

      }
    },
    reduce: function(arr, callback, memo) {
      var num = 0;
      if(!memo) {
        memo = arr[0];
        num = 1;
      }
      for(var i=num; i < arr.length; i++) {
        memo=callback(arr[i], memo);
      }
      return memo;
    },
    find: function(arr, callback) {

      for(var i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
          return arr[i];

        }
      }
    },

    filter: function(arr, callback) {
      var predicate = [];
      for(var i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
          predicate.push(arr[i]);
        }
      }
      return predicate;
    },
    reject: function(arr, callback) {

      var predicate = [];

      for(var i = 0; i < arr.length; i++) {
        if(!callback(arr[i])) {
          predicate.push(arr[i])

        }
      }
      return predicate;
    }
  }


  
  var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  console.log(evens); 