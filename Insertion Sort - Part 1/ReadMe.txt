Steps:

Loop through array from index 1 to n-1

Let key = arr[i] (current element to insert)

Let j = i - 1 (index of element before key)

Shift elements greater than key to the right

While j >= 0 and arr[j] > key:

arr[j + 1] = arr[j] (shift element to the right)

Print current state of arr

Decrement j

Insert the key at the correct position

arr[j + 1] = key

Print array after insertion (optional final step)

End of loop

Repeat for each element until array is sorted