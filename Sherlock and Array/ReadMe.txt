Sherlock and Array

You can NOT use Arrays and .reduce() to compare sums, cause 2 tests will fail = too slow
FORMULA FOR SUCCESS:
create a TOTAL = which the sum of ALL elements in the array
create SUM, which adds Array elements 1 by 1 as we for...loop them
if at any point: SUM === (Total Array Sum) - SUM - arr[i] ... both sides are balanced, so exit out of the function with return 'YES'
else return 'NO'
