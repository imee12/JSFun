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

/*getAverageTime*/

function race () {

var person=prompt("Do you want matt or mark's average time?");

if(person==="matt"){
var personArray = [
   240,
   210.4,
   235.1,
   208.9,
   197.5,
]}else if(person==="mark") {
var personArray = [
   120,
   110.4,
   135.1,
   108.9,
   97.5
];
}
/*var getAverageTime = function(person) {*/

var arrayLength = personArray.length;
var sum=0;
var i;


for(var i=0; i < arrayLength; i++){
    sum+= parseFloat(personArray[i]);
  }


var getAverageTime = sum/arrayLength;

console.log (getAverageTime);

}

function bank (){

MattsBankAccount = {
  checking: 0,
  savings: 0,
  retirement: 0
};


MattsBankAccount.checking=(100);
MattsBankAccount.savings=(10);
MattsBankAccount.retirement=(1);

var MattsTotal = MattsBankAccount.checking + MattsBankAccount.savings + MattsBankAccount.retirement;

/*console.log(MattsTotal);*/


var RobertosBankAccount = {
  checking: 0,
  savings: 0,
  retirement: 0
};

// RobertosBankAccount.checking=(200);
// RobertosBankAccount.savings =(50);
// RobertosBankAccount.retirement=(19);


var RobertosTotal = RobertosBankAccount.checking + RobertosBankAccount.savings + RobertosBankAccount.retirement;

var getSumofAccounts =
  MattsTotal - RobertosTotal;



console.log(getSumofAccounts);
}

/*console.log (MattsTotal);*/


 function addToBank(account, savings, retirement, checking) {
   account.savings = account.savings + savings;
   account.retirement = account.retirement + retirement;
   account.checking = account.checking + checking;
 }

// function getSumOfAccounts(account) {
//
// }



addToBank(RobertosBankAccount, 200, 50, 19);

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log(sumOfMatts - sumOfRobertos);
