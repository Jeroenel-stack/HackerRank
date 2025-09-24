Steps:

Initialize variables

n = s.length

isFunny = true

Loop through string

For i from 1 to n-1:

Compute leftDiff = |s[i] - s[i-1]|

Compute rightDiff = |s[n-i] - s[n-i-1]|

If leftDiff !== rightDiff, set isFunny = false and break the loop

Return result

If isFunny is true → return "Funny"

Else → return "Not Funny"