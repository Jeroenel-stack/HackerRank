function chocolateFeast(n, c, m) { 
    // initial buy
    let bars = Math.floor(n / c)
    let wrappers = bars
    while (wrappers >= m) { 
        // bars
        const additionalBars = Math.floor(wrappers / m)
        bars += additionalBars

        // handle reduction of old wrappers and addition of new wrappers
        wrappers = wrappers % m 
        wrappers += additionalBars
    }
    return bars
}