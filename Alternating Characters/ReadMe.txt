Steps

Initialize counter

Set deletions = 0.

Iterate through the string

Start from the 2nd character (i = 1) up to the end of the string.

For each character s[i]:

Compare it with the previous character s[i-1].

Check for duplicates

If s[i] == s[i-1] (two same consecutive characters):

Increment deletions by 1 (because one of them must be removed).

Continue until the end of the string.

Return result

Output the value of deletions.