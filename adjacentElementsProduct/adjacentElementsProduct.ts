function adjacentElementsProduct(inputArray: number[]): number {
	let product = inputArray[0] * inputArray[1];
	for (let i = 1; i < inputArray.length - 1; i++) {
		if (product < inputArray[i] * inputArray[i + 1]) {
			product = inputArray[i] * inputArray[i + 1];
		}
	}

	return product;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
