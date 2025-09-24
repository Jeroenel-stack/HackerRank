Steps:

Split the book into page pairs

Define chunkSize = 2.

For pages 0 to n, split into pairs using a helper function (chunkIt):

pagePairs = [[0,1],[2,3],...] 


Initialize counters

countF = 0 → page turns from the front.

countB = 0 → page turns from the back.

Iterate through the pairs from front and back simultaneously

For i = 0 to pagePairs.length - 1:

From front: if pagePairs[i] contains p, stop; otherwise countF++.

From back: if pagePairs[pagePairs.length - i - 1] contains p, stop; otherwise countB++.

Return the minimum

final = min(countF, countB)

Output result

Return final.