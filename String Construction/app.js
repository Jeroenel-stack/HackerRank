function stringConstruction(s) {
    let str = "";
    let i = 0;
    let cost = 0
    while (i < s.length) {
        if (i == 0) {
            str = s[i];
            cost++;
        }
        else if(str.indexOf(s[i])!= -1)
        {
            str = str + s[i];
            i++;
        }
        else {
            str = str + s[i];
            cost++;
        }
        i++;

    }
    return cost;
}