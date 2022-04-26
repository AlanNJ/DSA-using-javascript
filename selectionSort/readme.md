# Sorting the given array in increasing order using Selection sort.

Selection sort is another sorting technique in which we find the minimum element in every iteration and place it in the array beginning from the first index. Thus, a selection sort also gets divided into a sorted and unsorted subarray.

### Before starting,I recommend you to go through this site and visualize how bubble sort works.(recommended)

[visit site](https://visualgo.net/en/sorting?slide=1-1)

## Steps to achieve our goal state.

1. First trigger the first element in an array by running a for loop upto its last element.
2. For the second element,create a for loop starting form one position up then the first element as j=i+1
3. While the loop runs first time,we will have our fist and second element.
4. Now compare if the second element is greater then the first,if so the case,simply swap the elements like in program.
5. When our both the loops completes,you will get the sorted array.

## Note:

Its same like bubble sort but it adds the smallest element to the first place in an array whereas bubble sort adds greater element to the last.
