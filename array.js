// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,300,11,3,101,5,6,500,102];
var strings = ['this','is','a','collection','of','words'];
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

function findMaxArray([]){

  var maxNum = "";
  var arraySize = numbers.length;

  for(i = 0; i <= arraySize; i=i+1){
    if (maxNum > numbers[i]){

    }
    else if (numbers[i] > numbers[i+1]){
      maxNum = numbers[i]
      console.log(maxNum)
      // console.log(i)
    }
  };

 console.log(maxNum);

}



// ---------------------------
// 2. Find longest string
// ---------------------------




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
