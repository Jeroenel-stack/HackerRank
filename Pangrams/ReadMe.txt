Steps:

Convert to lowercase

Change all characters in the string s to lowercase to make the check case-insensitive.

Remove spaces

Eliminate all spaces from the string since they don’t matter in checking letters.

Extract characters

Break the string into an array of characters.

Remove duplicates

Store only unique characters (e.g., using a Set).

Sort characters (optional)

Arrange the unique characters in ascending order. (Not necessary for correctness, but your code does this.)

Count unique letters

Check how many unique characters remain.

Check alphabet size

If the number of unique letters equals 26, then the string contains all letters from 'a' to 'z'.

Otherwise, some letters are missing.

Return result

If unique letters = 26 → return "pangram".

Else → return "not pangram".