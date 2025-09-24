function countingSort(s1) {
    var obj = {};
    for (var i = 0; i < s1.length; i++) {
        if (typeof obj[s1[i]] === 'undefined') {
            obj[s1[i]] = 1;
        } else {
            obj[s1[i]] = obj[s1[i]] + 1;
        }
    }
    var arr= [];
    for(var a in obj) {
        for(var i= 0; i< obj[a];i++ ){
            arr.push(a);
        }
    }
    return arr;
 
}
