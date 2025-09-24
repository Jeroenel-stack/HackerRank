function gameOfThrones(s1) {
    var obj = {};
    for (var i = 0; i < s1.length; i++) {
        if (typeof obj[s1[i]] === 'undefined') {
            obj[s1[i]] = 1;
        } else {
            obj[s1[i]] = obj[s1[i]] + 1;
        }
    }
    let c = 0;
    for (var i in obj) {
        if (obj[i] % 2 === 0) {

        } else {
            c++;
        }
    }
     return c<= 1 ? "YES" : "NO";
}