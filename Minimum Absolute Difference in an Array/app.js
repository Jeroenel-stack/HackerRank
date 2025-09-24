function minimumAbsoluteDifference(arr) {
    let minimum = Infinity;


    arr.sort((a,b)=> a-b).forEach((el, index)=> {
        if((Math.abs(arr[index+1] - el)) < minimum){
            minimum = Math.abs(arr[index+1] - el)
        }
    });
    // console.log(minimum);
    return minimum;
}


let arr1 = [3, -7, 0]; // 3
let arr2 = [1, -3, 71, 68, 17]; // 3
minimumAbsoluteDifference(arr2);
