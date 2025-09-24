function findMedian(arr) {
    // Write your code here
    arr.sort((a,b)=> a-b);
    let length = arr.length;
    return arr[(length-1)/2]
}


findMedian([5,3,4,1,2,0,6])
