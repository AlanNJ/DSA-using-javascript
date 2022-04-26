// Problem: Sort the given array using selection sort.
var selectionSort = function (arr) {
	for (i = 0; i <= arr.length - 1; i++) {
		let swapIdx = i;
		for (j = i + 1; j <= arr.length - 1; j++) {
			if (arr[j] < arr[i]) {
				swapIdx = j;
				let temp = arr[swapIdx];
				arr[swapIdx] = arr[i];
				arr[i] = temp;
			}
		}
	}
	console.log(arr);
};
let arr = [5, 4, 3, 2, 1];
selectionSort(arr);

/*

time complextity: O(n^n)
space complexity: O(1)

*/
