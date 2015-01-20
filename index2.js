
var sum = function(a, b) {
  a + b;

}

console.log(sum(8, 11));

var person = ("matt", "mark");

var matt = {
  finishingTime1: 240,
  finishingTime2: 210.4,
  finishingTime3: 235.1,
  finishingTime4: 208.9,
  finishingTime5: 197.5
};

var mark = {
  finishingTime1: 120,
  finishingTime2: 110.4,
  finishingTime3: 135.1,
  finishingTime4: 108.9,
  finishingTime5: 97.5
};



var arrayLength = person.length;
var sum = 0;
var i;

var getAverageTime = function(person) {

  for(var i=0; i < arrayLength; i++){
    sum+= parseFloat(person[i]);
  }
  var getAverageTime = sum/arrayLength;
}

console.log(getAverageTime(matt));
console.log(getAverageTime(mark));
