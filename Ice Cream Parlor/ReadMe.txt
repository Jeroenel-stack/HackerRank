Keys to success:

There is always Unique solution - i.e. only 2 items in the array will result in the total cost
You have to return INDEX of items that meet the criteria, based on 1 BASED indexing, so the solution will be Index + 1, of 2 elements

Steps:

Loop through array arr with index i

For each i, loop through array with index j

Check if i !== j (distinct flavors)

Check if arr[i] + arr[j] === m

If yes → return [i + 1, j + 1] (1-based indices)

End of function

The function returns as soon as a valid pair is found