// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,300,11,3,101,5,6,500,102,600];
//var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words','thisisthelongestwordinthestring'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

// var maxNum = Math.max.apply(Math, numbers);
// console.log(maxNum);


function findMaxArray(items){

//The only problem with this function is if the maxNum is the
//last number in the array. Can't figure that out.  :(

  var maxNum = null;
  var arraySize = items.length;

  console.log(arraySize);

  for(i = 0; i <= arraySize; i++){
    if (maxNum > items[i]){
    }
    else if (items[i] > items[i+1]){
      maxNum = items[i]
    }
  };
 console.log(maxNum);
}

var arrayMax = function (items) {
  var max = null;
  for(var index = 0; index < items.length; index++) {
    if (items[index] > max) {max = items[index]; }
  };
  return max;
};

// ---------------------------
// 2. Find longest string
// ---------------------------

function findLongestString([]){

  //Same freaking problem.
  //If the longestString is the last string in the array then it doesn't
  //get processed. Can't figure that out.  :(

  var longestString = "";
  var arraySize = strings.length;

  for(i = 0; i < arraySize; i++){
    if (longestString.length > strings[i].length){
    }
    else if (strings[i] == undefined || strings[i+1] == undefined)
    {
    }
    else if (strings[i].length > strings[i+1].length)
    {
    longestString = strings[i]
    }
  };
  console.log(longestString);
}


// ---------------------------
// 3. Find even numbers
// ---------------------------



// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
