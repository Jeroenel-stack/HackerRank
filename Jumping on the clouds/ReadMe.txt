Here is the solution:
There are a couple of cases to consider like: at first how many times can this full string, s be repeated in n letters. That is getting the full string return in the number of times the letters occur.

Another case could be that the string s, can be cut off at a certain point and we do not get the full string.

So let's consider the first case, getting the full string return without it being cut off at some point.

For that; to find the occurrences of the letter a in the string, we can use the split method to get the array of letter a and use the length method to get the number of occurrence of the letter a

let occurrencesOfAs = (s.split(“a”).length — 1);
This gives us the occurrence of letter a in the string but we have to also multiply it by the number of times this full string appears in the number of repeats, and to get that we take the number n of repeats and divide by the length of the string and multiply by the occurrences of letter a…

so;

totalAs = Math.floor(n/(s.length) ) * occurencesOfAs;
then we do need to consider the case where the string gets cut off at some point, that is we do not get the full string. And for that, we use the modulo operator.

let remStringLength = n % s.length;
Then we can use the slice method to get the actual string remaining and use the split method to return the number of letter a if there are any in the remaining string and add it to the totalAs:

so;

totalAs += (s.slice(0, remStringLength).split(“a”).length — 1);
then we return total

return totalAs;