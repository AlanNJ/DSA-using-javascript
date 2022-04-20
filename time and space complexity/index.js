// Problem: find the time and space complexity following problem.
// 1.Find the sum of two numbers(inputs)
// 2.Print how many times the statement runs for the given input in loops.

document.body.addEventListener("load", sum(4, 4), iterator(10));

// 1
function sum(a, b) {
	console.log(a + b);
}

// here the sumb function with two inputs(arguments) will only execute once and gives the result declared in console.log which is 8
// time complexity: O(1)
// space complexity: O(1/2) = O(1) :the number of output is half the number of inputs

// 2
function iterator(n) {
	for (let i = 0; i <= n; i++) {
		console.log("this is " + i + " iteration");
	}
}

// here the for loop runs untill the value of n matches the input starting from 0.
// as n increases,the number of times the statement has to executes will also increases.
// time complexity : O(n)
// space complexity : O(10) = O(1)
