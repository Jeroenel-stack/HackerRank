Steps:

Initialize an empty list arr to store topic counts.

Loop over each pair of people (i, j) where i < j:

Set count = 0.

For each position k in the binary strings:

If topic[i][k] is '1' or topic[j][k] is '1', then increment count.

After checking all topics, add count to arr.

Find the maximum value in arr and store it as max.

Initialize maxCount = 0.

For each number in arr:

If the number equals max, increment maxCount.

Return [max, maxCount].