In this Day of the Programmer problem you have Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

Steps:

Initialize a variable

leap = 0 → used to adjust for leap years.

Check which calendar system applies:

Julian calendar (y < 1918)

A year is a leap year if divisible by 4 → leap = -1 (subtract 1 day).

Compute date: day = 13 + leap → print day.09.y.

Gregorian calendar (y > 1918)

A year is a leap year if divisible by 400 OR divisible by 4 but not 100 → leap = -1.

Compute date: day = 13 + leap → print day.09.y.

Transition year (y == 1918)

The 256th day is 26.09.1918 (February had 15 days fewer in Russia).

Output the result

Print the date in the format "dd.mm.yyyy".