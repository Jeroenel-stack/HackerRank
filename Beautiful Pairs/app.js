function beautifulPairs(a, b) {
    let map = new Map(), pairCount = 0, allPaired = true;
    a.forEach(num => map.set(num, (map.get(num) || 0) + 1));
    b.forEach(num => {
        let freq = map.get(num);
        if(freq) ++pairCount, map.set(num, --freq);
        else if(allPaired) allPaired = false;
    });
    return allPaired ? --pairCount : ++pairCount;
}