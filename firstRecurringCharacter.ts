//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
function firstRecurringCharacter(input: number[]) {
  const numSet = new Set();

  for (let i = 0; i < input.length; i++) {
    console.log('numSet', numSet);
    if (!numSet.has(input[i])) {
      numSet.add(input[i]);
    } else {
      return input[i];
    }
  }

  return undefined;
}

console.log(firstRecurringCharacter(array));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
