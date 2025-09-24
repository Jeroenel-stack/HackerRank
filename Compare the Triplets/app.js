const compareTriplets = (a, b) => {
let aScore = 0;
let bScore = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) aScore++;
    else if (a[i] < b[i]) bScore++;
}

return [aScore, bScore];
}


console.log(compareTriplets([1,2,3], [3,2,1]));
console.log(compareTriplets([5,6,7], [3,6,10]));
console.log(compareTriplets([17,28,30], [99,16,8]));

