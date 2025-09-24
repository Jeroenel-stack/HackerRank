Steps:

Sort the sticks in ascending order:

sticks.sort((a,b) => a-b);


Sorting helps easily pick the largest sticks last, to maximize perimeter.

Initialize an empty array final to store valid triangles.

Loop through the sticks to form consecutive triplets:

for i = 0 to sticks.length - 3:
    a = sticks[i]
    b = sticks[i+1]
    c = sticks[i+2]


Check the triangle inequality for each triplet:

if (a + b > c && a + c > b && b + c > a):
    final.push([a,b,c])


Select the triangle with the maximum perimeter:

Since sticks are sorted in ascending order, the last valid triangle in final will have the largest perimeter.

Return the result:

if (final.length > 0)
    return final[final.length-1]
else
    return [-1]