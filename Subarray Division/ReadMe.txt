Algorithm

Input: array s, integers d, m.

Step 1: Initialize count = 0.

Step 2: Loop through array s:

For each index i, take a slice of length m → segment = s[i ... i+m-1].

Compute the sum of the segment.

If sum === d, increment count.

Step 3: Return count.