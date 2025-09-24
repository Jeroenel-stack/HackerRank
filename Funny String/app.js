function funnyString(s) {
    // Write your code here
    var n = s.length;
    var isFunny = true;
    for (var i = 1; i < n; i++) {
        var leftDiff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
        var rightDiff = Math.abs(s.charCodeAt(n - i) - s.charCodeAt(n - i - 1));
        if (leftDiff !== rightDiff) {
            isFunny = false;
            break;
        }
    }
    return isFunny ? "Funny" : "Not Funny";
}
let s1 = "acxz"; // Funny
let s2 = "bcxz"; // Not Funny
console.log(funnyString(s1));
console.log(funnyString(s2));