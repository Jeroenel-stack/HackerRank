Query 0: The positions of the cats and mouse

Cat  will catch the mouse first, so we print Cat B on a new line.

Query 1: In this query, cats A and B reach C mouse at the exact same time

Because the mouse escapes, we print Mouse C on a new line.

Steps:

Read number of queries q.

Loop through each query:
a. Read integers x, y, and z.
b. Compute distance of Cat A to Mouse: a = |x - z|.
c. Compute distance of Cat B to Mouse: b = |y - z|.

Compare distances:

If a == b: Output "Mouse C" (both arrive at same time).

Else if a > b: Output "Cat B" (Cat B is closer).

Else: Output "Cat A" (Cat A is closer).

Repeat until all queries are processed.