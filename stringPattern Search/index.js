//PRoblem: Find the number of occourance of a given pattern in a string.

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

/*
time complexity: O(n^2)
space complexity: O(2) = O(1)


*/
