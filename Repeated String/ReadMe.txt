Steps

Count 'a' in original string

occurances = number of 'a' in s

Achieved with (s.split("a").length - 1).

Find full repeats of s

max = Math.floor(n / s.length)

This tells how many times the full string s fits inside the first n characters.

Count 'a' from full repeats

Multiply the number of 'a' in s by the number of repeats:

totalAs = occurances * max

Handle leftover substring

Take the remainder of n % s.length.

Slice the first remainder characters from s.

Count 'a' in this substring and add to totalAs.

Return result

Return totalAs.