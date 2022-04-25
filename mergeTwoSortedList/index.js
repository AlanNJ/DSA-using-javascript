// Problem: Merget the two sorted list in a single list

function mergeTwo(list1, list2) {
	let newArray = [];
	let index1 = 0;
	let index2 = 0;
	while (index1 < list1.length && index2 < list2.length) {
		if (list1[index1] < list2[index2]) {
			newArray.push(list1[index1]);
			index1++;
		} else {
			newArray.push(list2[index2]);
			index2++;
		}
	}
	while (index1 < list1.length) {
		newArray.push(list1[index1]);
		index1++;
	}
	while (index2 < list2.length) {
		newArray.push(list2[index2]);
		index2++;
	}

	return newArray;
}
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [4, 5, 6, 7, 8, 9];
console.log(mergeTwo(arr1, arr2));

/*

 time complexity:O(n)
 space complexity: o(2) = O(1)
 
*/
