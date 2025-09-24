Steps:

Iterate through the array from index 1 to n-1

key = arr[i] → the element to insert

j = i - 1 → index of the element just before key

Shift elements greater than key to the right

While j >= 0 and arr[j] > key:

arr[j + 1] = arr[j] → move element one position to the right

j = j - 1

Insert the key at the correct position

arr[j + 1] = key

Print the array after inserting the key

Repeat for each element until the array is fully sorted