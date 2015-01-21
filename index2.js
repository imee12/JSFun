
var sum = function(a, b) {
   return a + b;

}

console.log(sum(8, 11));


//var person = (matt, mark);

var matt = {
  finishingTime1: 240,
  finishingTime2: 210.4,
  finishingTime3: 235.1,
  finishingTime4: 208.9,
  finishingTime5: 197.5
};

//MattTotal = (matt.finishingTime1 + matt.finishingTime2 + //matt.finishingTime3 + matt.finishingTime4 + matt.finishingTime5)

var mark = {
  finishingTime1: 120,
  finishingTime2: 110.4,
  finishingTime3: 135.1,
  finishingTime4: 108.9,
  finishingTime5: 97.5
};


var getAverageTime = function(person) {
  var totaltime = 0;
  //get all numbers from object keys

  for (var finishingTime in person) {

    //add all the numbers up
      totaltime = totaltime + person[finishingTime];

  }
//find out how many numbers there are
//turn this into an array and then get length
var totalraces = Object.keys(person).length;
// divid my totaltime by number of races
var avgTime = totaltime/ totalraces

  return avgTime
}

console.log(getAverageTime(matt));
console.log(getAverageTime(mark));





//MarkTotal = (mark.finishingTime1 + mark.finishingTime2 + //mark.finishingTime3 + mark.finishingTime4 + mark.finishingTime5)
//person.property gives the value
//var totalTimes =0;

//iterateie through the object keys




//Object.keys(person).forEach()

//var arrayLength = matt.length
/*var sum = 0;
var i;

var getAverageTime = function(person) {

  for(var i=0; i < arrayLength; i++){
    sum+= parseFloat(person[i]);
  }
  var getAverageTime = sum/arrayLength;
}

console.log(getAverageTime(matt));
console.log(getAverageTime(mark));


var MattsBankAccount = {
  checking: 0,
  savings: 0,
  retirement: 0
};

var RobertosBankAccount = {
  checking: 0,
  savings: 0,
  retirement: 0
};

function addToBank(account, savings, retirement, checking) {
  account.savings = account.savings + savings;
  account.retirement = account.retirement + retirement;
  account.checking = account.checking + checking;
}

function getSumOfAccounts(account) {

  // return ...
}

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log(sumOfMatts - sumOfRobertos);
*/

var MattsBankAccount = {
  checking: 0,
  savings: 0,
  retirement: 0
};

var RobertosBankAccount = {
  checking: 0,
  savings: 0,
  retirement: 0
};

function addToBank(account, savings, retirement, checking) {
  "use strict";
  account.savings = account.savings + savings;
  account.retirement = account.retirement + retirement;
  account.checking = account.checking + checking;
}

function getSumOfAccounts(account) {
  "use strict";
  return (account.savings + account.retirement + account.checking);
}

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log(sumOfMatts - sumOfRobertos);


var i = 0;
while (i < 100) {


  console.log(i);

  i++;

};

while (i<100) {
  if(i%3=i){
  console.log((i) + "Fizz");
}else if(i%5=i){
  console.log((i) +"Buzz");
} else if(i%3 && i%5=i) {
  console.log((i) + "FizzBuzz")
}
  i++;
}
}
