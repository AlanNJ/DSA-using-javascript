// Problem:Split the given array into two parts with first as array of elements upto given size and other as elements.
// Approach:
// 1.Divide the array upto the size provided and store it in new array
// 2.Storing the remaining elements into another array
// 3.Merging the two array together

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
size = 4;
document.body.addEventListener("load", chunkalgo(array, size));

function chunkalgo(array, size) {
	let subArray = [];
	let finalArray = [];
	for (let i = 0; i <= array.length - 1; i++) {
		if (i < size) {
			//runs for the elemnts upto index equal to size provided
			subArray.push(i);
		} else {
			finalArray.push(i);
		}
	}
	finalArray = [[...subArray], ...finalArray]; //spread operator (ES6)
	console.log(finalArray);
}

// here statement inside for loop will execute as much as the size of an array,so in a worst case scenario,the no of inputs will be n.Hence,
// Time complexity:O(n)
// Space complexity: O(1)
