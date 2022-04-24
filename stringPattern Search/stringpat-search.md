# String Pattern Search Algorithm.
In this Algorithm,we are given two inputs as arguments:One pattern and another string like:

pattern: "lol"

string: "lololol"

## Goal:
To find the occurance of pattern in a string.

## Steps to achieve our goal state.
1. Declare a count variable as initial value as 0 to store the no of repetaion.
2. Firstly,We will loop throught each letter in a string.
3. Inside it,we will create another for loop for the characters in pattern.
4. Create a for loop which run for every letter to the string respectively.

when the first loop occours,it will check whether the characters at index 0 is same for both the inputs.
If its not,it will simply break the for loop for that character.

5. iF both the character matches,it will check for another character in a string which matches to the second letter of the pattern.
6. During the loop,if the value of i for pattern matches to its length,we will increment the count variable by 1.
