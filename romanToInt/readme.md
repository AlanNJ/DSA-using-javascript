# Converting the Roman values to Number.

Roman characters includes characters like I,V,X,L,C,D,M and they have specific values associated with them.
Their respective values is:

`roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 } `

## Difficult part:

Normally,there will be no issue if we assign values for each letters respective of their values in the above object.
But,if any smaller term is in front,then it will have a different value like:

`IV = 4, IX=9, XC=90 `

So,We should also check the order also.

## Steps to achieve our goal state.

1. Create one object which contains key,value pair of the roman characters with their value
2. Declare a number variable which will hold our result as 0 initially.
3. Create a for loop for the roman string.
4. For each element,check whether its next element is greater then its previous.
5. Then create a sequence of if statements like in program and assign the combination value of the two combined romans.
6. If none of the condition matches,simply pass the solo value.

## This can be done using `switch cases also`
