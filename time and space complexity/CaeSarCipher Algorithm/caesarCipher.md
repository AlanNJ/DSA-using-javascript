# Caesar Cypher Algorithm 
In the Caesar Cipher problem we are given a string and a number of positions to shift. Our task is to shift each letter in the string that number of positions.

## Steps to achieve our goal state.
1. we will create a string variable with letters from a-z
2. we ill create a new empty string which will hold the result letter after shifting after each iteration completes.
3. Create a for loop which run for every letter to the string respectively.
4. In each iteration,we will get the index of the letter in a string where it lies in the string variable we declared above.
5. Re-assaigns the new index by adding the shift value and adding in a string.

## Why we used % 26 ?
Look,if we have a letter x and the step is given as 10: 

Then what will happen is the final index will be `23+10 = 33 (which is not the last index of the a-z letters `)

So,what modulo 26 does is even it will get divide 33 with 26 and the remainder 9 will be assaigned as the index.


### You can read more about it at:(recommended)

[visit site](https://keithwilliams-91944.medium.com/caesar-cipher-solution-in-javascript-d8221984d61)
