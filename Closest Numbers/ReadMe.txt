Steps:

Sort the array

Arrange the array elements in ascending order.

Initialize variables

Set finalArr = [].

Set smallest = ∞ (infinity).

Find smallest difference

For each element arr[i] (except the last one):

Compute the absolute difference diff = |arr[i] - arr[i+1]|.

If diff ≤ smallest, update smallest = diff.

Collect pairs with smallest difference

Loop through the array again:

If |arr[i] - arr[i+1]| == smallest, push both arr[i] and arr[i+1] into finalArr.

Return result

Output finalArr.