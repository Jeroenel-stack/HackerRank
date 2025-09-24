Algorithm:

Initialize positions:

pos1 = x1
pos2 = x2
possible = false


Simulate jumps (loop for a reasonable number of steps or until they meet):

for i = 0 to 10000:
    pos1 = pos1 + v1
    pos2 = pos2 + v2
    if pos1 == pos2:
        possible = true
        break


Return result:

if possible:
    return "YES"
else:
    return "NO"
