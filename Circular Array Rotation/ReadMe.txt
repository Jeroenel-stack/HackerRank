After the first rotation, the array is [3, 1, 2].
After the second (and final) rotation, the array is [2, 3, 1].
We will call this final state array b = [2, 3, 1]. For each query, we just have to get the value of b[queries[i]].

queries[0] = 0, b[0] = 2.
queries[1] = 1, b[1] = 3.
queries [2]= 2, b[2] = 1.

Steps:

Rotate the array

Repeat the following process k times:

Remove the last element of a.

Insert that element at the beginning of a.

After this, array a is rotated k times to the right.

Process queries

Initialize an empty result array ar.

For each index in queries:

Find the element at that index in the rotated array a.

Append it to ar.

Return result

Output the array ar containing all the query results.