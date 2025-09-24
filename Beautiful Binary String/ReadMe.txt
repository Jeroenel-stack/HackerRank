Steps

Initialize counter

Set count = 0 → this will store the number of modifications needed.

Traverse the string

Loop with index i from 0 to b.length - 3 (so you can check groups of three characters).

Check for the forbidden pattern

At each position, check if:

b[i] === '0' AND b[i+1] === '1' AND b[i+2] === '0'


If true, then a "010" pattern is found.

Handle the pattern

Increment count (since one modification is required).

Skip ahead by i = i + 2 (because this "010" overlaps only at the last character; skipping avoids double-counting).

Return the result

After the loop, return count.

This is the minimum number of changes needed.