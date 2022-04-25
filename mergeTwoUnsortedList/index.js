//Problem: Add two unsorted arrays into one sorted array.
function mergeTwo(list1, list2) {
	let newList = [...list1, ...list2];

	for (i = 0; i <= newList.length - 1; i++) {
		let idx = i;
		for (j = i + 1; j <= newList.length - 1; j++) {
			if (newList[j] < newList[i]) {
				idx = j;
				let temp = newList[idx];
				newList[idx] = newList[i];
				newList[i] = temp;
			}
		}
	}
	return newList;
}
let arr1 = [1, 2, 3, 2, 7, 8, 2, 4, 5, 6];
let arr2 = [4, 5, 6, 7, 8, 9, 4, 2];
console.log(mergeTwo(arr1, arr2));
