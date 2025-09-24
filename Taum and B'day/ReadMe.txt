Explanation:
Inputs:

b: Number of black gifts.
w: Number of white gifts.
bc: Cost of one black gift.
wc: Cost of one white gift.
z: Cost to convert one gift type to another.
Logic:

For black gifts, the cost is the minimum of bc (direct cost) or wc + z (convert white to black).
Similarly, for white gifts, the cost is the minimum of wc (direct cost) or bc + z (convert black to white).
Use BigInt to handle large numbers, as the problem may involve very large inputs.
Output:

The total cost is calculated by multiplying the number of gifts by their respective minimum costs.
This solution is efficient and handles edge cases like large inputs gracefully.