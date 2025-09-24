Algorithm

Input: Two integers a and b where a ≤ b.

Step 1: Compute the smallest integer greater than or equal to √a
→ lower = ceil(√a)

Step 2: Compute the largest integer less than or equal to √b
→ higher = floor(√b)

Step 3:

If lower > higher, then there are no perfect squares → return 0.

Otherwise, the count of perfect squares is:

count = higher - lower + 1


Output: Return count.