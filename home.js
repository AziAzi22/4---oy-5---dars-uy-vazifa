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

// function isSortedAndHow(array) {
//   let osish = true
//   let kamayish = true
//   for(let i = 0; i < array.length - 1; i++){
//     if(array[i] < array[i+1]) kamayish = false
//      if(array[i] > array[i+1]) osish = false
//   }
//   if(kamayish) return 'yes, descending'
//   if(osish) return 'yes, ascending'
//   return 'no'
// }
// console.log(isSortedAndHow([1, 3, 8, 4]));
// console.log(isSortedAndHow([1, 2, 3, 4]));
// console.log(isSortedAndHow([4, 3, 2, 1]));

// 3 - masala

// Convert a linked list to a string
// Related Kata
// Although this Kata is not part of an official Series, you may also want to try out Parse a linked list from a string if you enjoyed this Kata.

// Preloaded
// Preloaded for you is a class, struct or derived data type Node ( depending on the language ) used to construct linked lists in this Kata:

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }
// Prerequisites
// This Kata assumes that you are already familiar with the idea of a linked list. If you do not know what that is, you may want to read this article on Wikipedia. Specifically, the linked lists this Kata is referring to are singly linked lists, where the value of a specific node is stored in its data / $data / Data property, the reference to the next node is stored in its next / $next / Next / next_node property and the terminator for a list is null / NULL / None / nil / nullptr / null().

// Task
// Create a function stringify which accepts an argument list / $list and returns a string representation of the list. The string representation of the list starts with the value of the current Node, specified by its data / $data / Data property, followed by a whitespace character, an arrow and another whitespace character (" -> "), followed by the rest of the list. The end of the string representation of a list must always end with null / NULL / None / nil / nullptr / null() ( all caps or all lowercase depending on the language you are undertaking this Kata in ). For example, given the following list:

// new Node(1, new Node(2, new Node(3)))
// ... its string representation would be:

// "1 -> 2 -> 3 -> null"
// And given the following linked list:

// new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
// ... its string representation would be:

// "0 -> 1 -> 4 -> 9 -> 16 -> null"
// Note that null / NULL / None / nil / nullptr / null() itself is also considered a valid linked list. In that case, its string representation would simply be "null" / "NULL" / "None" / "nil" / "nullptr" / @"NULL" / "null()" ( again, depending on the language ).

// For the simplicity of this Kata, you may assume that any Node in this Kata may only contain non-negative integer values. For example, you will not encounter a Node whose data / $data / Data property is "Hello World".

// Enjoy, and don't forget to check out my other Kata Series :D

// link  https://www.codewars.com/kata/582c297e56373f0426000098/train/javascript 

// function stringify(list) {
//   if (!list) return "null";
//   class Node {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
//   }

//   let x = list;
//   let arr = [];
//   while (x) {
//     arr.push(x.data);
//     x = x.next;
//   }
//   return arr.join(" -> ") + " -> null";
// }
