function workbook(n, k, arr) {
    var count = 0, page = 1;

    for(var problems of arr){
        for(var i = 1; i <= problems; i++){
            if(i == page)
                count++;
            if(i % k == 0)
                page++;
        }
        if(problems % k != 0)
            page++;
    }

    return count;

}