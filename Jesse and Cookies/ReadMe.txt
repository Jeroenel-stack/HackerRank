Steps:

Create a min-heap h from array A

Ensures we can quickly access the least sweet cookie.

Initialize counter iters = 0

Repeat while the smallest cookie is less than k:
a. Check if there are at least 2 cookies

If h.arr.length < 2 → return -1 (cannot mix further)
b. Remove the smallest cookie: least = h.removeTop()
c. Mix it with the next smallest cookie:

newSweetness = least + 2 * h.arr[0]

Update the heap with the new value at the root: h.update(0, newSweetness)
d. Increment operation counter: iters += 1

When the smallest cookie ≥ k, return iters