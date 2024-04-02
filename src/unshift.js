/* const array = [2, 3, 4, 5, 6];
array.unshift(1);
console.log(array); Oytput: [ 1, 2, 3, 4, 5, 6 ]

unshift() method is used add an element to the first index.

/* 

// Original array
let array = [1, 2, 3, 4, 5];
let newElement = 0; // Element to be added at the beginning

// Shift all elements to the right
for (let i = array.length; i > 0; i--) {
  console.log("original array: ", array);
  array[i] = array[i - 1];
  console.log("after unshifting: ", array);
}

// Assign the new element to the first index
array[0] = newElement;

console.log(array); // Output: [0, 1, 2, 3, 4, 5] */

const array = [2, 3, 4, 5];
const newElement = 1;

for (i = array.length; i > 0; i--) {
  console.log(`original array while i=${i}: , ${array}`);
  array[i] = array[i - 1];
  console.log(`array after shifting to right while i=${i}: `, array);
}
console.log("after for loop completed: ", array);

array[0] = newElement;

console.log("ulitimate result after adding new element: ", array);

/* 
original array while i=4: , 2,3,4,5
array after shifting to right while i=4:  [ 2, 3, 4, 5, 5 ]
original array while i=3: , 2,3,4,5,5
array after shifting to right while i=3:  [ 2, 3, 4, 4, 5 ]
original array while i=2: , 2,3,4,4,5
array after shifting to right while i=2:  [ 2, 3, 3, 4, 5 ]
original array while i=1: , 2,3,3,4,5
array after shifting to right while i=1:  [ 2, 2, 3, 4, 5 ]
after for loop completed:  [ 2, 2, 3, 4, 5 ]
ulitimate result after adding new element:  [ 1, 2, 3, 4, 5 ]
*/
