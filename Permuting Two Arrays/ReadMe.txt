Steps:

Sort A ascending

Sort array A in increasing order so smaller numbers come first.

Sort B descending

Sort array B in decreasing order so larger numbers come first.

Initialize result

Set a variable fStr = "YES" (assume it’s possible).

Check each pair

Loop through indices i = 0 to A.length - 1:

Compute A[i] + B[i].

If the sum is less than k:

Set fStr = "NO".

Return result

Print and return fStr.