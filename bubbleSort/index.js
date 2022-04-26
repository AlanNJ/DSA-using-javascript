// Problem: Sort the given array in increasing order using bubble sort.

var bubbleSort = function (arr) {
	for (i = 0; i <= arr.length - 1; i++) {
		// loops from first element in the array
		for (j = i + 1; j <= arr.length - 1; j++) {
			// loops from one position up then current i.
			if (arr[i] > arr[j]) {
				// swapping each element if condition gets satisfied
				let temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}
	console.log(arr);
};
let arr = [5, 4, 3, 2, 1];
bubbleSort(arr);

// you can use i <= arr.length -2 for slight optimization as our last element is already sorted.

/*

time complexity: O(n*n -1) = O(n*n)
space complexity : O(n) in worst case schenario

*/
