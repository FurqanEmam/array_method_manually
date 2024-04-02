const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

/* const newArray = arrayOne.concat(arrayTwo);

concat() simply merge two array into one.
 Returns a new array that combines the elements of the original array with other arrays or values.

console.log(newArray); */

//01.  using spread operator
/* const newArray = [...arrayOne, ...arrayTwo];
console.log(newArray); */

const newArray = [];
//02.  this will work for same length array and wont work for extra array element
for (i = 0, j = 0; i < arrayOne.length && j < arrayTwo.length; i++, j++) {
  // console.log(arrayOne[i]);
  // console.log(arrayTwo[j]);
  newArray.push(arrayOne[i]);
  newArray.push(arrayTwo[j]);
}
console.log(newArray.sort());
