function beautifulDays(i, j, k) {
    var sum = 0;
    for (var p = i; p <= j; p++) {
        var r = (p + "").split('').reduce((reversed, character) => character + reversed, '');
        // console.log(p,r,k, Math.abs(p - parseInt(r)));
        if (Math.abs(p - parseInt(r)) % k ===0)
            sum++;
    }
    return sum;
}