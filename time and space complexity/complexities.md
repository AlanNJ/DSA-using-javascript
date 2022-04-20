
# Time and Space Complexities.

## 1. Time complexity.
Time complexity is nothing but the actual number of time the perticular statement runs inside an algorithm.

It is represented by a Big O notation like O(n).

### Importance of Time complexity.
This helps in managing the time taken by our algorithm to execute and reach the goal state.

Lesser the time complexity,higher the effeciency of the algorithm.

### Types of time complexity.
Based on the best time complexity,the following are ordered.
    
1.Constant Time Complexity: O(1) :This means to find our goal state,we only have to execute the statement once.

2.Logarithmic Time Complexity: O(log n): This is considered as the fastest computing algorithms and its time is equivalent to the logarithm of number of inputs given.(Any value with log will be lesser then its real value)

3.linearithmic time Complexity: o(nlog n): This is mostly used in algorithms like merge sort as for one statement it will provide the logarithmic execution with the added complexity of input pivot element.

4.Quadratic Time Complexity: O(n²): For every input provided,it will loop through its one element and performs operation equal to the square of the input.This is experienced in nested for loops.

5.Exponential Time Complexity: O(2^n): This will generally add double number of operations even for 1 change in input which will cause more number of operation.It is not considered as good time complexity.
    
    
 

### You can read more about it at:(recommended)

[visit site](https://towardsdatascience.com/essential-programming-time-complexity-a95bb2608cac)





## 2.Space complexity.
It is the amount of memory that is to be alloted by the system to perform that perticular algorithm.

It is also denoted by Big O notation.

If there are n inputs and n outputs,the space complexity will be O(1) as both are same.As output increases,it will take higher space complexity.

### You can read more about it at:(recommended)

[visit site](https://www.geeksforgeeks.org/g-fact-86/)

## Note: 
For constant value of n,the time complexity will always be 1. `eg: O(100) = O(1)`

For any constant operation with n,it will have no effect and only n will be counted on time complexity.

Like:  `O(n/2) = O(n)` ,O(n+1) = O(n)

For any higher operation,if there exist something lesser value of n with n^2,then the smaller term will be neglected.

Like: `O(n^2+n) = O(n^2)`


## Reference:

Space complexity is not that important as compared to time complexity there is not often the case arrives we run out of memory as we have higher RAM.
But time complexity is vey cruical in every algorithm as it takes power from the CPU to run.

A best real world example will be whenever you will work with array containing millions of element and you apply algorithms with worst time complexity like `O(2n^2)`,your fans at the back of the laptop will start rotating faster and you will hear an ugly fan noise.
