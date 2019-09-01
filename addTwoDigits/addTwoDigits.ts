function addTwoDigits(n: any): number {
	return (n % 10) + (n - (n % 10)) / 10;
}

console.log(addTwoDigits(29));
