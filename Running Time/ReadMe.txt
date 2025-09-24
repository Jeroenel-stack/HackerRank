Steps

Initialize counters

n = 0 → total shifts counter.

Loop through array

For each index i from 1 to arr.length - 1:

Store current element as key = arr[i].

Set j = i - 1.

Shift elements

While j ≥ 0 and arr[j] > key:

Increment shift counter n++.

Move element arr[j] to position arr[j+1].

Decrement j.

Insert key

Place key in correct position → arr[j+1] = key.

Repeat until array is sorted

Return result

Return total number of shifts n.