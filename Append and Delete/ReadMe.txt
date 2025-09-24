Steps

Initialize

Convert s and t into arrays (sArr, tArr).

Set count = 0 (to track the length of the common prefix).

Find the longest common prefix

Loop through both strings starting from index 0.

As long as s[i] === t[i], increment count.

Stop when characters differ.

Compute remaining operations

sMinusCount = s.length - count → characters to delete from s.

tMinusCount = t.length - count → characters to append to match t.

Total minimum required operations = sMinusCount + tMinusCount.

Check feasibility

Let STK = k - (sMinusCount + tMinusCount) → leftover operations after making s into t.

Cases:

Case 1: If sMinusCount + tMinusCount > k → Not enough operations → return "No".

Case 2: If sMinusCount + tMinusCount == k → Exactly enough → return "Yes".

Case 3: If sMinusCount + tMinusCount < k:

If STK is even → Extra operations can be “wasted” by deleting + appending same character → return "Yes".

If STK is odd → Cannot balance → return "No".

Special Case: If s.length + t.length <= k → You can delete all of s and rebuild t fully → return "Yes".