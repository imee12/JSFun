/*var sum = function(a, b) {
  "use strict";
  /// return ..
}*/
/*
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

}*/

/*getAverageTime*/

/*function averageTime () {*/
var person =("matt", "mark");

var mattArray = [
   240,
   210.4,
   235.1,
   208.9,
   197.5,
];


/*
var mark = {
  finishingTime1: 120,
  finishingTime2: 110.4,
  finishingTime3: 135.1,
  finishingTime4: 108.9,
  finishingTime5: 97.5
};*/

/*var getAverageTime = function(person) {*/

var arrayLength = mattArray.length;
var sum=0;
var i;

/*var combo = {*/
for(var i=0; i < arrayLength; i++){
    sum+= parseFloat(mattArray[i]);
  }
    /*var getAverageTime = combo/arrayLength;*/

var getAverageTime = sum/arrayLength;


/*}*/
