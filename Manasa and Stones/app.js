function stones(n, a, b) {
    let possValues = new Set([0])
    let i = 0
    while(i < n - 1) { // Starting with 1 default "0" rock 
    // Messy time complexity; each iteration processes more elements 
    // 2^0 + 2^1 + 2^2 + ... + 2^n
    // http://en.wikipedia.org/wiki/Geometric_progression
    // 0 ((2^n) - 1) / (2 - 1)) => 0(2^n - 1)
    const nextValues = new Set
    for (const val of possValues) {
        const aVal = val + a
        nextValues.add(aVal)

        const bVal = val + b
        nextValues.add(bVal)
    }
    possValues = nextValues
    i++
    }

const output = Array.from(possValues)

output.sort((a, b) => a - b)


return output
}