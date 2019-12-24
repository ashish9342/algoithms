const arr1 = [1, 4, 6, 9];
const arr2 = [2, 5, 7, 8, 9, 10, 12];
// [1,2,4,5,6,7,8,9]

function mergeSortedArray(arr1: number[] = [], arr2: number[] = []) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  const mergedArray = [];
  let i = 1;
  let j = 1;
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item);
    if (!arr2Item || arr1Item <= arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
}
// mergeSortedArray(arr1, arr2);

console.log(mergeSortedArray(arr1, arr2));
