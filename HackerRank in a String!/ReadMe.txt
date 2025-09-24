Steps:

Initialize variables

string = "hackerrank" → target subsequence

c = 0 → index pointer for string

Loop through characters of str

For each character ch in str:

If ch === string[c] → increment c (move to next character in target)

Check if subsequence is complete

If c === string.length → return "YES"

Else → return "NO"