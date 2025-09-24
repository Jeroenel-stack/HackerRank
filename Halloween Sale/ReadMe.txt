Steps:

Initialize variables

sum = 0 → total money spent

count = -1 → counter for number of games bought

Loop while sum <= s

Add current price to sum

Use p < m ? m : p → price cannot go below m

Decrease price: p -= d

Increment count

Return result

Return count → total games bought before exceeding s