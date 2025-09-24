Algorithm

Initialize:

counter = 3 (first cycle length)

time = 1 (starting time of the current cycle)

Loop until the correct cycle is found:

If t is within the current cycle (time ≤ t < time + counter):

Value of counter at t = (time + counter) - t.

Return this value.

Otherwise, move to the next cycle:

time = time + counter (start of the next cycle).

counter = counter * 2 (cycle length doubles).

Output: The counter’s value at time t.