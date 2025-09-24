function luckBalance(k, contests) {
    let sum = (x, y) => x + y;
    let important_contests = contests.filter(x => x[1] === 1).map(x => x[0]).sort((x, y) => x - y);
    let not_important_contests = contests.filter(x => x[1] === 0).map(x => x[0]).reduce(sum, 0);
    let count = not_important_contests;
    if (important_contests.length > k) {
        let i = important_contests.length - k;
        while (i--) {
            count -= important_contests.shift();
        }
    }
    count += important_contests.reduce(sum, 0)
    return count;


}console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]])) // 29
console.log(luckBalance(2, [[5, 1], [4, 0], [6, 1], [2, 1], [8, 0]])) // 21