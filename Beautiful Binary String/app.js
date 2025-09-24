function beautifulBinaryString(b) {
    // Write your code here
    let count = 0;
    for(let i = 0; i < b.length - 2; i++){
        if(b.charAt(i) === '0' && b.charAt(i + 1) === '1' && b.charAt(i + 2) === '0'){
            count++;
            i = i + 2;
        }
    }
    return count;
}