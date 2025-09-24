Steps:

Initialize counter

Set count = 0.

Iterate over all pairs

For i from 0 to n-1:

Let el = ar[i].

For j from i+1 to n-1:

Let sum = el + ar[j].

If sum % k === 0, increment count.

Return result

Return count.