function decentNumber(n) {
    if (n < 3) {
        console.log(-1);
        return;
    }
    let threes = n;
    while (threes % 3 !== 0) {
        threes -= 5;
    }
    if (threes < 0) {
        console.log(-1);
    } else {
        console.log("5".repeat(threes) + "3".repeat(n - threes));
    }
}
decentNumber(7);
decentNumber(1);
decentNumber(3);
decentNumber(5);
decentNumber(11);