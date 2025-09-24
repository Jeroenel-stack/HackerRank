MY SIMPLE, COMPACT O(n) JAVASCRIPT SOLUTION WITH EXPLANATION:

1) for the start assume that all elements are paired: create the variable allPaired and initialize it as true; also initialize a variable pairCount with value 0;

2) create a map and iterate over a, filling the map with numbers in a as keys and their frequencies – as values;

3) count all possible pairs – iterate over b and do the following for each num in it: retrieve the quantity of its frequencies from the map, and here 2 variants are possible:

• freq is truthy (a number 1 or above): then increment pairCount and decrement num's value in the map;

• freq is falsey (undefined if num does not occur in a and 0 if it occurs in a less frequently than in b) – set allPaired to false if it is true;

4) and here is the most interesting thing: you should change exactly(!) one element in an array: so, if all elements are paired, this operation will decrease the number of pairs, else – increase; so, decrement or increment pairCount before returning depending on the value of allPaired.