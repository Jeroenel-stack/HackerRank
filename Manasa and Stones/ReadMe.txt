* Create a set representing all possible values the current rock can have. This is initialized with the first rock, 0.
* Iterate through n rocks (including first rock of 0)
        * Store temporary set
        * For each values in last set:
            * Calculate both possible values for next stone and add them to temporary set
        * Reassign outer set to the temporary set
    * The main set contains all possible values the last stone can have. Convert to list and sort