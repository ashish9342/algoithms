function addTwoDigits(n: any): number {
	return (n % 10) + (n - (n % 10)) / 10;
}

console.log(addTwoDigits(29));

function addTwoDigits1(n: any): number {
	const num = n.toString().split("");
	console.log(num);
	return num.reduce((a: string, b: string) => parseInt(a) + parseInt(b));
}

console.log(addTwoDigits1(29));
