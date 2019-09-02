function almostIncreasingSequence(sequence: number[]): boolean {
	let count = 0;
	for (let i = 0; i < sequence.length; i++) {
		if (sequence[i] < sequence[i + 1]) {
			count++;
			if (sequence[i] <= sequence[i - 2] && sequence[i + 1] < sequence[i - 1]) {
				return false;
			}
		}
	}
	return count <= 1;

	// other solution
	// let elemsOutOfOrder = 0;

	// for (let i = 0; i < sequence.length - 1; i++) {
	// 	const left = sequence[i];
	// 	const right = sequence[i + 1];
	// 	if (left > right) {
	// 		elemsOutOfOrder++;
	// 	}
	// 	if (elemsOutOfOrder > 1) return false;
	// }

	// return true;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([]));
console.log(almostIncreasingSequence([1]));
console.log(almostIncreasingSequence([1, 2]));
console.log(almostIncreasingSequence([1, 2, 3]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));
console.log(almostIncreasingSequence([0, -2, 5, 6]));
console.log(almostIncreasingSequence([1, 1]));
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]));
console.log(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]));
console.log(almostIncreasingSequence([1, 2, 2, 3]));
console.log(almostIncreasingSequence([1, 2, 1, 2]));
