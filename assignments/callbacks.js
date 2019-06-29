console.log(`Create a higher order function and invoke the callback function to test your work.`);
// You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Pencil', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

console.log(`getLength passes the length of the array into the callback.`);

  // option1
  const getLength = (arr, cb) => cb(arr.length);
  console.log(getLength(items, length => length));

// option2
  function getLength2(array, callback) {
    return callback(array.length); 
  }
  const lengthofArray = getLength2(items, function(length) {
    return length;
  })
  console.log(lengthofArray);

//end========================================

console.log(`====last passes the last item of the array into the callback.===`);

function last(arr, cb) {
  return cb (arr[arr.length - 1]); 
  }
  const lastItem = last(items, function(last) {
    return last
  })
  console.log(lastItem);

//end========================================
console.log(`====sumNums adds two numbers (x, y) and passes the result to the callback`);

function sumNums(x, y, cb) {
  return cb (x + y);
}

const sum = sumNums(3,5, function(sumItems) {
  return sumItems
})
console.log(sum);

//end========================================

console.log(`multiplyNums multiplies two numbers and passes the result to the callback.`)

function multiplyNums(x, y, cb) {
  return cb (x * y)
}

const multi= multiplyNums(3,5, function(multiItems) {
  return multiItems
})
console.log(multi);

// end=========================================

console.log(`contains checks if an item is present inside of the given array/list.

// Pass true to the callback if it is, otherwise pass false.`)
function contains(item, list, cb) {
  for (let i = 0; i < list.length; i++) 
    if (list[i] === item)
     return cb (true);
    else return cb(false);
  }
  const checks= contains(`Vasya`, items, function(checking) {
    return checking
  })
  console.log(checks);


//end========================================

console.log (`* STRETCH PROBLEM *`);

// function removeDuplicates(array, cb) {

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const remove= (arr, cb) => cb(arr.filter((item, index) => arr.indexOf(item) === index));
  console.log(remove(items, filter => filter));

