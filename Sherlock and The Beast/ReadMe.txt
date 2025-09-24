Explanation of Logic:

If n is less than 3 → no decent number possible → print -1.

Start with all digits as 5’s (threes = n) and try to make it divisible by 3.

If not divisible by 3, subtract groups of 5 until divisible.

If after subtraction, threes < 0 → no solution → print -1.

Otherwise, print the decent number with maximum 5’s followed by 3’s.