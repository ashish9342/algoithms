function allLongestStrings(inputArray: string[]): string[] {
	let longestWordLength = 0;
	let newArr = [];

	inputArray.forEach(word => {
		longestWordLength < word.length
			? (longestWordLength = word.length)
			: longestWordLength;
	});

	inputArray.forEach(word => {
		if (word.length === longestWordLength) {
			newArr.push(word);
		}
	});

	return newArr;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
