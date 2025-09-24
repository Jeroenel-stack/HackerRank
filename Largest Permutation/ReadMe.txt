Steps:

Create a mapping of values to indices:

For each element arr[i], store its index in an object:
obj[arr[i]] = i

Iterate through the array:

Loop with i = 0 to n-1 or until k swaps are used

Find the desired value for the current position:

max = n - i (the largest remaining number that should be in position i)

maxIndex = obj[max] (current index of that number in the array)

Perform swap if necessary:

If arr[i] !== max:

Swap arr[i] with arr[maxIndex]

Update the object mapping accordingly:

obj[arr[i]] = maxIndex
obj[max] = i


Decrease k by 1

Else, the correct number is already in place → continue

Repeat until you reach the end of the array or k swaps are used.

Return the modified array