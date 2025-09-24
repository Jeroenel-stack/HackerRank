Steps:

Count character frequencies

Initialize empty object obj

For each character ch in s1:

If obj[ch] is undefined → set obj[ch] = 1

Else → increment obj[ch] by 1

Check odd counts

Initialize c = 0 → counter for characters with odd frequency

For each character count in obj:

If count is odd → increment c

Determine palindrome possibility

If c <= 1 → return "YES"

(At most one character can have an odd count for a palindrome)

Else → return "NO"