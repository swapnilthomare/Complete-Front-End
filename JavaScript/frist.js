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


  /* Array*/

var arr = [1,2,3,4];
var arr2 = new Array(5,4,3,2,1);

var arr3 = new Array(2);

console.log(arr);
console.log(arr2);






var arr = [2,3,4,5,6,7];

for(var i = 0; i <= arr.length; i++){
  console.log(arr[i])
}


var arr = [2,3,4,5,6,7];

function print(element){
  console.log(element);
}

arr.forEach(print);