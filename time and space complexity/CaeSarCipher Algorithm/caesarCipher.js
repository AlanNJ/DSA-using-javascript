// Caesar Cipher Algorithm

function caesarCipher(string, step) {
	let letters = "abcdefghijklmnopqrstuvwxyz";
	let result = "";
	for (let i = 0; i <= string.length - 1; i++) {
		let idx = letters.indexOf(string[i]);
		let new_letter = letters[(idx + step) % 26];
		result += new_letter;
	}
	console.log(result);
}

// It works for special symbols,characters as well.

function caesarCipher(string, step) {
	let letters = "abcdefghijklmnopqrstuvwxyz";
	let result = "";
	for (let i = 0; i <= string.length - 1; i++) {
		let idx = letters.indexOf(string[i]);
		if (idx == -1) {
			//indexOf always gives -1 index value for special characters and symbol
			result += string[i];
			continue; //this will terminate the loop for its current iteration blocking the below code
		}
		let new_letter = letters[(idx + step) % 26];
		result += new_letter;
	}
	console.log(result);
}
caesarCipher("alan!", 10);

/*
time complexity: O(n)
space complexity : O(2) = O(1) (We are creating a new string to store our result)

*/
