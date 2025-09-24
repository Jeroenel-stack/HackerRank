Steps:

Count occurrences of each character

Create obj = {} → stores counts of each character

Loop through b:

If character not in obj → set count = 1

Else → increment count

Check for unique ladybugs

Loop through keys in obj:

If key is not '_' and count = 1 → return "NO" (single ladybug cannot be happy)

Check if empty spaces exist

If b contains '_' → return "YES" (ladybugs can be rearranged)

Check current happiness for no empty spaces

Loop from index 1 to b.length - 1:

If b[i] === b[i-1] or b[i] === b[i+1] → continue

Else → return "NO" (unhappy ladybug cannot be moved)

All checks passed

Return "YES"