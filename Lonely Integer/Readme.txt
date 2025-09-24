Steps:

Sort the array a in ascending order.

This ensures that duplicate numbers appear next to each other.

Initialize a variable index = 0 to store the position of the lonely integer.

Loop through the sorted array:

For i = 0 to length of array - 1:

Check if the current element sorted[i] is equal to the next element sorted[i+1].

If equal, skip the next element by incrementing i (since both are duplicates).

If not equal, this element is unique. Set index = i.

Return the element at sorted[index].