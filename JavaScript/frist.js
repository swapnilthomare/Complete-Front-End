/*function expression*/

/* Named function declearation*/

var factorial = function fact(n){
    var ans = 1;
    for(var i = 1; i <= n; i++){
      ans = ans * i;
    }
    return ans;
  }
  
  console.log(factorial(5))

  /*ananymos function declearation */

  var factorial2 = function (n){
    var ans = 1;
    for(var i = 1; i <= n; i++){
      ans = ans * i;
    }
    return ans;
  }
  
  console.log(factorial2(5))