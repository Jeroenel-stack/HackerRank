Steps:

Initialize counter

cnt = 0

Convert number to digits

Convert n to string → str

Split str into array of characters → arr

Iterate over each digit

For each digit d in arr:

Convert d to number → digit

If digit != 0 and n % digit === 0, increment cnt

Return result

Return cnt