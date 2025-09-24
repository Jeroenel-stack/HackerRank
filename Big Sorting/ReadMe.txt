Big Sorting

Key:

We can NOT use numbers to sort, we need to use Strings
Use SORT so we have access to both numbers
NOTE: Sort runs FOREVER, so it loops until the conditions are met and then it stops… so it has auto repeat build in
NOTE: in Sort  A is the second element, B is the first element when sorting
First check to see if the Lengths of numbers is NOT the same, if length is different then return  a.length - b.length, this will put the bigger number at the back… basically here I am trying to move  3 digit numbers to front and 4 digit numbers to back - ones this is done, sort will reloop again to check other conditions
Now create ELSE statement
This else statement by default should return 0 (i.e. both are equal)
Here I need to take the length of the A (i.e. second element) and put it into a FOR loop
If a[i] < b[i] return -1 else if 
If reverse return 1
Note: Return 0, must be outside of the FOR loop, so that if nothing happens inside the for loop… it will return 0… i.e. equal
