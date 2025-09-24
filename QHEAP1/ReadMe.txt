Steps
1. Initialize Data Structure

Create a MinHeap with an empty array h.

2. Define MinHeap Operations

Parent Index

For a node at index i:

parent(i) = (i - 1) // 2   if i > 0
parent(0) = null


peek()

Return h[0] (the root, which is the minimum).

add(x)

Append x to the end of h.

Bubble up: while x is smaller than its parent, swap them.

Stop when heap property is restored or x reaches root.

remove(x)

Find index i of value x in array h.

Replace h[i] with the last element in the heap and remove the last element.

Bubble up: if h[i] is smaller than its parent, swap until correct.

Bubble down: if h[i] is larger than its smallest child, swap until correct.

minChild(i)

Compute left child l = 2i + 1, right child r = 2i + 2.

If no children → return null.

If only left exists → return l.

Otherwise, return index of the smaller child (h[l] < h[r] ? l : r).