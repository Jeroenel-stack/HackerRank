Steps

Base case

If array length ≤ 1 → return array (already sorted).

Choose pivot

Select first element pivot = ar[0].

Partition

Initialize left = [], right = [].

Loop through remaining elements:

If ar[i] < pivot → push into left.

Else → push into right.

Recursive sort

Recursively call quickSort(left) and quickSort(right).

Combine results

Return [quickSort(left), pivot, quickSort(right)] concatenated.