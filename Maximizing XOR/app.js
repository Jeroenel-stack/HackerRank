function maximizingXor(l, r) {
    let rightIncrement = l;
    let start = l;
    let max = Number.MIN_VALUE;
    while (l <= r) {
        //  console.log(l,rightIncrement)
        if ((l ^ rightIncrement) > max) {
            max = l ^ rightIncrement;
        }
        if (rightIncrement === r) {
            l++;
            rightIncrement = start;
        }
        rightIncrement++;
    }
    return max;
}
console.log(maximizingXor(10, 15)) // 7
console.log(maximizingXor(11, 100)) // 127
console.log(maximizingXor(1, 2)) // 3
console.log(maximizingXor(8, 16)) // 31
console.log(maximizingXor(1, 1000000000)) // 1073741823
