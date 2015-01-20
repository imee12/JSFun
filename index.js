/*var sum = function(a, b) {
  "use strict";
  /// return ..
}*/

function sumTwo () {
var numbers = [];
var inputnumber1=prompt("Input a number you want to add")
numbers.push(inputnumber1);
var inputnumber2=prompt("Input a second number you want to add to first.");

numbers.push(inputnumber2);

var arrayLength = numbers.length;
var sum = 0;
var i;

for(var i=0; i < arrayLength; i++){
  sum+= parseInt(numbers[i]);

}

console.log("SUM =" + (sum));

}
