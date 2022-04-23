function findChar(string, pattern) {
	let count = 0;
	for (i = 0; i < string.length; i++) {
		for (j = 0; j < pattern.length; j++) {
			let patChar = pattern[j];
			if (patChar !== string[i + j]) {
				break;
			}
			if (j === pattern.length - 1) {
				count += 1;
			}
		}
	}
	console.log(count);
}
findChar("alaalan", "ala");
