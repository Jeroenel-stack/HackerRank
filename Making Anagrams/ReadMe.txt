Steps:

Create frequency maps for both strings:

obj1 for s1 → counts occurrences of each character.

obj2 for s2 → counts occurrences of each character.

Compare the frequency maps:

For each character c in obj1:

If c exists in obj2, reduce the count of c in both maps by min(obj1[c], obj2[c]).
(This accounts for the matching characters that don’t need to be deleted.)

Count remaining characters:

Sum all remaining values in obj1 and obj2.

These represent the characters that must be deleted to make the strings anagrams.

Return the sum as the minimum number of deletions.