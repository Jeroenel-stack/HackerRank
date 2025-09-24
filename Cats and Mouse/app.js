function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        var a = Math.abs(x-z);
        var b = Math.abs(y-z);
        if (a == b) {
            console.log('Mouse C');
        } else if (a > b) {
            console.log('Cat B');
        } else {
            console.log('Cat A');
        }
    }

}