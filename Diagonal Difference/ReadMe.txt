Steps:

Initialize sums

lTr = 0 → sum of left-to-right diagonal.

rTl = 0 → sum of right-to-left diagonal.

Iterate through rows

For each index i from 0 to n-1:

Add the element at [i][i] to lTr.

Add the element at [i][n-i-1] to rTl.

Compute absolute difference

diff = |rTl - lTr|.

Return result

Return diff.