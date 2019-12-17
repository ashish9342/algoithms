const arr = [1, 2, 3, 4, 5, 6];
const sum = 10;

// function hasPairSum(arr: number[] = [], sum: number) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// Time Complexity : Big(O) n^2
// Space Complexity : Big(O) 1

// -----------------------------------------
function hasPairSum(arr: number[] = [], sum: number) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return true;
    }
    set.add(sum - arr[i]);
  }
  return false;
}

// -----------------------------------------
//  built in function
// function hasPairSum(arr: number[] = [], sum: number) {
//   for (let i = 0; i < arr.length; i++) {
//     let diff = sum - arr[i];
//     if (arr.includes(diff)) {
//       return true;
//     }
//   }
//   return false;
// }

console.log(hasPairSum(arr, sum));
