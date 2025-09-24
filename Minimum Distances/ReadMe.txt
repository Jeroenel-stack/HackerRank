Steps:

Initialize min with the length of the array:

min = a.length


This will store the minimum distance found.

Loop through all pairs of elements:

for i = 0 to a.length-1:
    for j = i+1 to a.length-1:
        if a[i] === a[j]:
            distance = j - i
            if distance < min:
                min = distance


Check if a duplicate was found:

if min === a.length:
    return -1


Return the minimum distance:

return min