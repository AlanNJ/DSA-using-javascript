var bubbleSort = function (arr) {
	for (i = 0; i <= arr.length - 2; i++) {
		for (j = i + 1; j <= arr.length - 1; j++) {
			if (arr[i] > arr[j]) {
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
