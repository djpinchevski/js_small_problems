/*
Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

Examples:
*/
function sumOfSums(array) {
  return array.map(function (element, index1) {
    return array.slice(0, index1 + 1);
  }).map(function (newElement, index2) {
    return newElement.reduce(function (acc1, slice1) {
      return acc1 + slice1;
    })
  }).reduce(function (acc2, slice2) {
    return acc2 + slice2;
  });
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
