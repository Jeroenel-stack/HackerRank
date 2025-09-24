Steps:

Annotate orders with additional info:

For each order orders[i]:
a. Store the customer number: orders[i][3] = i + 1
b. Compute the completion time: orders[i][2] = arrivalTime + prepTime

Sort orders by completion time:

Use orders.sort((x, y) => x[2] - y[2])

Extract the customer numbers in order:

Return orders.map(order => order[3])