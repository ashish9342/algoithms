function alphabetSubsequence(s: string): boolean {
	let chars: string[] = s.split("");
	let charsValue: number[] = [];

	chars.forEach(char => {
		console.log(char.charCodeAt(0));
		charsValue.push(char.charCodeAt(0));
	});
	// console.log(new Set(charsValue).size)
	if (charsValue.length !== new Set(charsValue).size) {
		return false;
	}

	for (let i = 0; i < charsValue.length; i++) {
		if (charsValue[i] >= charsValue[i + 1]) {
			return false;
		}
	}

	return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
