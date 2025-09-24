Steps:

Convert the string s into an array of characters.

Initialize a counter changedLetters = 0 to track altered letters.

Split the string into groups of 3 characters (since each SOS is 3 letters):

Loop from index i = 0 to s.length - 1 with step size 3

Slice s[i:i+3] and store each triplet in an array finalArr.

Check each triplet against "SOS":

For each triplet:

If first character ≠ 'S', increment changedLetters

If second character ≠ 'O', increment changedLetters

If third character ≠ 'S', increment changedLetters

Return changedLetters as the total number of altered letters