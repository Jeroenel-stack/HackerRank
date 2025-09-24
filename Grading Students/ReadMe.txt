Steps:

Loop through each grade el in grades:

If el < 38 → no rounding, keep el as is

Else → calculate the next multiple of 5:

nextMultiple = Math.floor(el / 5) * 5 + 5

If nextMultiple - el < 3 → round up → return nextMultiple

Else → keep original grade → return el

Return adjusted grades array