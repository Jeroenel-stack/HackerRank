function gemstones(arr) {
    var o = {};
    arr.forEach(x => {
        var c = {};
        for (var y in x) {
            c[x[y]] = 1;
        }
        for (var y in c) {
            if (typeof o[y] === 'undefined') {
                o[y] = 1;
            }
            else {
                o[y] = o[y] + 1;
            }
        }
        // console.log(o)
    });
    var max = 0;
    for (var y in o) {
        if(o[y] > arr.length -1)
        {
            max ++;
        }
    }
    // console.log(max);
    return max;
}