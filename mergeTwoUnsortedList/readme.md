# Merging two unsorted arrays into one sorted array.

You can check only once for the elements if the elements were sorted in both the arrays,but the problem with unsorted arrays is that you have to check for every elements for one elements.

## Steps to achieve our goal state.

1. First concat the given two arrays into one.
2. Create a for loop which triggers elements from first index.
3. Assign id variable for the each iteration with first index
4. Create another for loop which triggers elements from second index.
5. Check if the element at index first is greater then the element on next index.
6. If so the case,change id variable to the next element.
7. Create a temporary variable and Assign it with the element to be swapped
8. Change their respective values like in index.js.
