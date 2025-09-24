function cutTheSticks(arr) {
    let results = [];
    let counter=arr.length;

    while(arr.length>1){
        results.push(counter);
        let min = Math.min(...arr);
        arr = arr.map(stick=> stick-min).filter(stick=> stick>0);
        counter=arr.length;
    }
    if(arr.length===1){
        results.push(1);
    }
    return results;
}