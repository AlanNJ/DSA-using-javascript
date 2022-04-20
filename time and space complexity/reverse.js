// Problem: Reversing the given string

document.body.addEventListener("load", reverse("John"));

// Method 1.(By using split,join and reverse methods)
function reverse(string) {
	let stringArray = string.split(""); //splits string into array like: ["J","o","h","n"]
	let reversedArray = stringArray.reverse(); //reveseds that array: ["n", "h","o","j"]
	let reversedString = reversedArray.join(); //joins that array and returns a combined string :nhoj

	// this could have been done in one liner also like:
	let reversedString2 = string.split("").reverse().join("");
	console.log(reversedString);
}

// Method 2.(Without using any default methods)
function reverse(string) {
	let reversed = "";
	for (let j = string.length - 1; j >= 0; j--) {
		//starting from 0,this statement executes untill the length of a string is greater or equal to 0
		reversed = reversed + string[j]; //concatinates an element to a string each time the value of j decreases by 1.
	}
	console.log(reversed);
}

//Now comming into both the approaches time complexity,you might think the first one is good solution as its statement runs only one time:
//But no !!
//actually,reverse method uses for loop behind the schene like method 2.
//So,Both have time complexity O(n), and space complexity O(1) as the input and output are same in length
