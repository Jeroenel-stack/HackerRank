Steps:

Initialize maximum tracker

max = -1 → stores the best valid combination.

Iterate through all combinations

For each keyboard in keyboards:

For each drive in drives:

Compute total = keyboard + drive.

If total <= b and total > max, update max = total.

Return result

Return max.