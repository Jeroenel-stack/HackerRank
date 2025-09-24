Steps:

Sort the array in descending order of calories:

This ensures the highest-calorie cupcakes are eaten first, minimizing the exponential multiplier effect.

Initialize a counter count = 0 to track total miles walked.

Loop through each cupcake in the sorted array:

For the i-th cupcake:

Multiply its calorie value by 
2
𝑖
2
i
 (exponential factor based on the order eaten).

Add this value to count.

Return the total count as the minimum miles Marc must walk.