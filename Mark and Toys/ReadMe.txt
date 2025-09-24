Steps:

Sort the prices array in ascending order:

Ensures that you buy cheaper toys first to maximize quantity.

Initialize a counter (implicit in the loop via index i) for the number of toys bought.

Loop through each price in the sorted array:

Subtract the current price from the remaining budget k.

Check if the budget k has become negative:

If k < 0, return the number of toys bought so far (i).

If the loop finishes without exceeding budget, return the total number of toys (prices.length).