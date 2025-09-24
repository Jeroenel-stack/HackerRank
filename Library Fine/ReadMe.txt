Steps:

Check if the year is greater than expected

If y1 > y2 → return 10000

Check if the year is the same

If y1 === y2

Check if the month is greater than expected

If m1 > m2 → return 500 * (m1 - m2)

Check if the month is the same

If m1 === m2 and d1 > d2 → return 15 * (d1 - d2)

Otherwise

Book is returned on time or early → return 0