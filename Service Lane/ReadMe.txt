Steps

Initialize results

Create an empty array output.

Process each case

For each [start, end] in cases:

Set min = ∞.

Loop from i = start to end:

Update min = min(width[i], min).

Append min to output.

Return results

Return the array output containing the minimum widths for all cases