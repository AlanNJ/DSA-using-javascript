# Sorting the given array in increasing order using Insertion Sort.

Insertion sort algorithm is highly intuitive, stable, in-place, and of comparison-type having quadratic time complexity.

### Before starting,I recommend you to go through this site and visualize how bubble sort works.(recommended)

[visit site](https://visualgo.net/en/sorting?slide=1-1)

## Steps to achieve our goal state.

1. First trigger the second element in an array by running a for loop upto its last element.
2. Now set the element before it in one variable.
3. Start comparing the element with every element before it,for single iteration,replace only smaller number to its original position.
4. When the while loop dont match the condition,simply replace the most recent greater element to the position of the element which was compared.

## Note:

It is not a good approact to sort higher number of inputs present in an array as the time complexity it has is quadratic.
Sorting Algorithms like quick sort and merge sort outperforms then as they have logarithmic time complexity.
