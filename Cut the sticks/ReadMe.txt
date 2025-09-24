Steps:

Initialize variables:

distanceFromSeaLevel = 0 → current altitude (relative to sea level).

totalValleys = 0 → counter for valleys.

Convert path to array:

pathToArray = path.split('').

Iterate over steps in the path:

For each step el in pathToArray:

If step is "U", increment altitude → distanceFromSeaLevel++.

If step is "D", decrement altitude → distanceFromSeaLevel--.

After updating altitude, check:

If distanceFromSeaLevel === 0 and the step was "U", then one valley is completed → increment totalValleys++.

Return result:

Return totalValleys.