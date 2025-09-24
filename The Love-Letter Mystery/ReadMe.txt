Algorithm

Input: A string s.

Step 1: Initialize operations = 0.

Step 2: Loop through the first half of the string (i = 0 to s.length/2):

Take the ith character from the start → char = s[i].

Take the corresponding character from the end → alternate = s[s.length - (1 + i)].

Compute their ASCII values (charCodeAt).

If they are not the same, add the difference in values to operations.
→ operations += |char - alternate|

Step 3: Return operations.