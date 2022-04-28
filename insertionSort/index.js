// Problem: Sort the given array using insertion sort.

function insertionSort(inputArr) {
	for (i = 1; i < inputArr.length; i++) {
		let j = i - 1;
		let current = inputArr[i];
		while (j > -1 && current < inputArr[j]) {
			inputArr[j + 1] = inputArr[j];
			j--;
		}
		inputArr[j + 1] = current;
	}
	return inputArr;
}
console.log(insertionSort([2, 3, 6, 4, 8]));
