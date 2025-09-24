Steps:

Initialize variables

initialLength = B.length

initialSum = sum(B)

Iterate through the array

For each index i from 0 to initialLength - 1:

If B[i] is odd and i < initialLength - 1:

Give 1 loaf to B[i] → B[i] += 1

Give 1 loaf to neighbor B[i+1] → B[i+1] += 1

Check if all are even

If any B[i] is odd, return "NO"

Calculate loaves given

updatedSum = sum(B)

loavesGiven = updatedSum - initialSum

Return result

Return loavesGiven