function largestPermutation(k, arr) {

    let obj = {};
    arr.forEach((value, pos) => { obj[value] = pos });

    let n = arr.length;
    for (let i = 0; i < k && i < n; i++) {
        let max = n-i;
        let maxIndex = obj[n-i];

        // console.log(max, maxIndex);
        
        if (max !== arr[i]) {
            let start = arr[i];
            arr[maxIndex] = start;
            arr[i] = max;
         
            obj[start] = maxIndex;
            obj[max] = i;

        } else {
            k++;
        }
    }
        // console.log(obj);
    return arr;
}