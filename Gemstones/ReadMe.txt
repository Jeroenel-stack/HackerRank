Steps:

Initialize element count object

o = {} → to track how many rocks each element appears in

Loop through each rock in arr

For each rock string x:

Create a temporary object c = {} → to store unique elements in the rock

For each character ch in x:

c[ch] = 1 (marks element presence in this rock)

Update global count o:

For each ch in c:

If o[ch] is undefined → set o[ch] = 1

Else → increment o[ch] by 1

Count gemstones

Initialize max = 0

For each key ch in o:

If o[ch] >= arr.length → max++ (element is present in all rocks)

Return result

Return max