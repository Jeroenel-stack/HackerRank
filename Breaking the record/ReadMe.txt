Algorithm: Breaking Records

Input: An array of scores where the first score is the initial record.
Output: An array [hRes, lRes] where:

hRes = number of times the highest score record is broken.

lRes = number of times the lowest score record is broken.

Initialize variables

Set low to the first score.

Set high to the first score.

Set hRes = 0 (count for breaking high scores).

Set lRes = 0 (count for breaking low scores).

Iterate through remaining scores
For each score in the list (excluding the first one):

If score < low:

Update low = score.

Increment lRes by 1.

Else if score > high:

Update high = score.

Increment hRes by 1.

Otherwise:

Do nothing.

Return results

Output [hRes, lRes].