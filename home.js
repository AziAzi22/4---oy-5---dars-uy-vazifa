// 1 - masala 


// KISS stands for Keep It Simple Stupid. It is a design principle for keeping things simple rather than complex.

// You are the boss of Joe.

// Joe is submitting words to you to publish to a blog. He likes to complicate things.

// Define a function that determines if Joe's work is simple or complex.

// Input will be non emtpy strings with no punctuation.

// It is simple if: the length of each word does not exceed the amount of words in the string (See example test cases)

// Otherwise it is complex.

// If complex:

// return "Keep It Simple Stupid"
// or if it was kept simple:

// return "Good work Joe!"
// Note: Random test are random and nonsensical. Here is a silly example of a random test:

// "jump always mostly is touchy dancing choice is pineapples mostly"


// function isKiss( words ){
//   // Have Fun!
//   words = words.split(" ")
//   const  G = words.length
//   for(const w of words){
//     if (w.length > G) {
//       return "Keep It Simple Stupid";
//     }
//   }
//   return "Good work Joe!"
// }
// console.log(isKiss("Keep It Simple Stupid ja ja ja ja aja ja"));
// console.log(isKiss("Keep It Simple Stupid"));


// 2 - masala

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.

// It is guaranteed that there will always be a unique valid answer. More precisely:

// there will be no arrays with less than 2 elements
// there will be no arrays where all elements are equal


function isSortedAndHow(array) {
  let osish = true
  let kamayish = true
  for(let i = 0; i < array.length - 1; i++){
    if(array[i] < array[i+1]) kamayish = false
     if(array[i] > array[i+1]) osish = false
  }
  if(kamayish) return 'yes, descending'
  if(osish) return 'yes, ascending'
  return 'no'
}
console.log(isSortedAndHow([1, 3, 8, 4]));
console.log(isSortedAndHow([1, 2, 3, 4]));
console.log(isSortedAndHow([4, 3, 2, 1]));


