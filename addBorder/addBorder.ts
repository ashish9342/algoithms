function addBorder(picture: string[]): string[] {
	const str = "*****";
	const star = "*";

	const newArr = picture.map(str1 => star + str1 + star);

	console.log(newArr.unshift(str));
	console.log(newArr.push(str));
	return newArr;
}

console.log(addBorder(["abc", "ded"]));

function addBorder1(picture: string[]): string[] {
	const wall = "*".repeat(picture[0].length + 2);

	picture.unshift(wall);
	picture.push(wall);

	for (let i = 1; i < picture.length - 1; i++) {
		picture[i] = "*".concat(picture[i], "*");
	}

	return picture;
}
console.log(addBorder1(["abc", "ded"]));
