function findDigits(n) {
    let cnt = 0;
    let str = n.toString();
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){ 
        if(n % Number(arr[i]) === 0){ 
            cnt++;
        }
    }
    return cnt;
}