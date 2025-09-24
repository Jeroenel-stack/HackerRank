function toys(w) {
    w = w.sort((x,y)=>x-y);
    let count = 1;
    let check = w.shift() + 4;
    w.forEach(x => {
        if (x > check) {
            count++;
            check = x + 4;
        }
    });
    return count;
}
