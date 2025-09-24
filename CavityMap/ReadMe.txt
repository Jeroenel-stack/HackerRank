Steps:

Initialize the grid.

Iterate over each cell in the grid (row i, column j), but only for inner cells (not the border):

Loop from i = 1 to grid.length - 2 (exclude first and last rows).

Inside that loop, iterate j = 1 to grid[i].length - 2 (exclude first and last columns).

Check if the current cell is a cavity:

Let cell = grid[i][j].

Compare cell with its four neighbors:

Above: grid[i-1][j]

Below: grid[i+1][j]

Left: grid[i][j-1]

Right: grid[i][j+1]

If cell is strictly greater than all four neighbors → it’s a cavity.

Mark cavity:

Convert the current row grid[i] into a character array.

Replace grid[i][j] with "X".

Join the row back into a string and update grid[i].

After processing all cells, return the modified grid.