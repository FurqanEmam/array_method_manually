// Original array
let array = [1, 2, 3, 4, 5];

/* array.pop();

pop() method simply removes the last element of an array.
if we want to remove the last element we can do this using length method.
if we just reduce the length number it will delete the last element.

console.log(array);
 */

// array.length = array.length - 1; // Output: 4 ---> means now the array length is 4 while it was 5 we decrement to eliminate the last element.

// console.log(array); // Output: [1, 2, 3, 4]

// make a function on this

function popManual(arr) {
  console.log((arr.length = arr.length - 1)); // Output: 4 ---> means now the array length is 4 when it was 5 we decrement to eliminate the last element.
  console.log(arr); // Output: [1, 2, 3, 4]
}

popManual(array);
