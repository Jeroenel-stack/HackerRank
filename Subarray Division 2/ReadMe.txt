Algorithm

Input:

s = array of integers (chocolate squares)

d = target sum (Ron's birth day)

m = length of segment (Ron's birth month)

Step 1: Initialize count = 0.

Step 2: Loop through each starting index i of the array s:

Take a slice of length m:
→ arr = s.slice(i, i + m)

Compute its sum using .reduce((a, v) => a + v).

If sum equals d, increment count.

Step 3: After the loop, return count.