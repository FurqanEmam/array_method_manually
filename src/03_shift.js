const array = [1, 2, 3, 4];

/* array.shift();

shift() method simply removes the first element of an array

console.log(array);
1 will be removed and the output will be [2, 3, 4]
*/

// console.log(array[0]); // Output: 1 ---> this is the first index and its value is 1 so the output is 1

// array[0] = array[0 + 1]; // here we arre assigning the index 0 to 0+1 = 1 meaning we are assigning index 1 value to index 0

// console.log(array[0]); // Output: 2 ---> because we have assigned the second index to first index. If we keep doing this for all the value in the array the first value well removed as it wont have the first index which is 0.

for (let i = 0; i < array.length - 1; i++) {
  console.log("original array : ", array);
  array[i] = array[i + 1];
  console.log("shifted array: ", array);
}
console.log("after closing for loop: ", array);
array.length = array.length - 1;
console.log("ultimate result: ", array);

/* 

original array :  [ 1, 2, 3, 4 ] ---> first execution and logging the original array it holds i = 0
shifted array:  [ 2, 2, 3, 4 ]   ---> after shifting index 0 to 1. So index 0 value 1 was replaced by index 1 value 2 so now new index 0 value is 2.
original array :  [ 2, 2, 3, 4 ] ---> after completing one for loop. now the i value is incremented and i = 1
shifted array:  [ 2, 3, 3, 4 ]   ---> same as before value shifted.
original array :  [ 2, 3, 3, 4 ] ---> showing original value while i = 2
shifted array:  [ 2, 3, 4, 4 ]   ---> value shifted as we desired to do so and the last i = 3 so for loop closed here.
after closing for loop:  [ 2, 3, 4, 4 ] ---> after closing the for loop we have this array but not as we desired. we will have to deal with last value
ultimate result:  [ 2, 3, 4 ] ---> after poping the last value. This is what we wanted.

// array methods makes life easy......

*/
