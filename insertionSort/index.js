// Problem: Sort the given array using insertion sort.

function insertionSort(inputArr) {
	for (i = 1; i < inputArr.length; i++) {
		let j = i - 1; // triggering the element before current element in loop
		let current = inputArr[i]; // setting our second element to check elements befor it
		while (j > -1 && current < inputArr[j]) {
			//runs for every element befor the current
			inputArr[j + 1] = inputArr[j]; // replaces small element to its position
			j--;
		}
		inputArr[j + 1] = current; // set the sorted element to its original position
	}
	return inputArr;
}
console.log(insertionSort([2, 3, 6, 4, 8]));

/*

time complexity: O(n^2) worst case
space complexity : O(1)

Note: Though it has quadratic time complexity,it outperforms even bubble and merge sort when the number of input is less like 20,30
*/
