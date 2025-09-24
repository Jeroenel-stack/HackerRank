Extracts the hour (hh) from the string.

Checks if the string ends with "AM" or "PM".

Adjusts hours:

"12AM" → "00" (midnight).

"12PM" → "12" (noon).

"PM" hours → add 12.

"AM" hours (other than 12) → stay the same.

Rebuilds the string without "AM"/"PM".