function serviceLane(n, width, cases) {
    const output = []
    
    for (const [start, end] of cases) { // 0(c); c = number of cases
        let min = Infinity
        for(let i = start; i <= end; i++) { // 0(n); n = length of width array
            const w = width[i] 
            min = Math.min(min, w)
            }
            output.push(min)
        }
    return output
    // Total Time Complexity: O(c) * O(n) = O(c*n)
}