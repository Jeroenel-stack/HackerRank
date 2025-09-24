Algorithm

Input: String s.

Step 1: Initialize cost = 0.

Step 2: Track which unique characters have been used.

You can use a Set to store characters.

Step 3: For each character c in s:

If c is not in the set:

Add c to the set.

Increase cost by 1.

Else → skip (free copy).

Step 4: Return cost.