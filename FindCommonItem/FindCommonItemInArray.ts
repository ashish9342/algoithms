const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['w', 'y', 'x'];

// return true and false

// Brute force
//  BigO => O(a*b) time complexity
// space complexity
// function findCommonItem(array1: string[], array2: string[]) {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; array2.length; i++) {
//       if (array1[i] === array2[j]) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

function findCommonItem2(array1: string[] = [], array2: string[] = []) {
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      console.log(map);
      const item = array1[i];
      map[item] = true;
      // console.log(map);
    }
  }

  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}
// ----------------------------------------------
// Time Complexity BigO => O(a + b)
// space complexity 0(n)

function findCommonItem3(array1: string[] = [], array2: string[] = []) {
  return array1.some(item => array2.includes(item));
}

//  built in functions

console.log(findCommonItem2(array1, array2));
