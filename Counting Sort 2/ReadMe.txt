Steps:

Initialize a frequency map

Create an empty object obj = {}.

Count frequencies

Loop through each element of s1.

If the element is not yet in obj, set its value to 1.

Otherwise, increment its value by 1.

Reconstruct sorted array

Create an empty array arr = [].

Loop through each key a in obj (keys will be strings, so convert if necessary).

For each key, push it into arr as many times as its frequency (obj[a]).

Return result

Return the sorted array arr.