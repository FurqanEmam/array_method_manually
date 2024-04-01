// declaring my array
const array = [1, 2, 3, 4];

// push method add a new element at the end of an array.
// array.push(5);
console.log(array);

/* array.length method gives us an integer value and total number of element we have in our array. For array variable it will give us 4 as it has 4 element. And the last index will be 3 so we can assign our new value at the end and it will always be same as array.length value. So lets assign our new value to array.length. And it will do the same job like push method. */

console.log(array.length); // Output: 4

array[array.length] = 5;

console.log(array); // Output: [ 1, 2, 3, 4, 5 ]

// lets make a function that always takes an array and add a new element at the end of that array it taken. Without using push() method.

function pushElement(arr, newElement) {
  arr[arr.length] = newElement;
  console.log(arr);
}
pushElement(array, 6); // Output: [ 1, 2, 3, 4, 5, 6 ]
