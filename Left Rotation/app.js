function rotateLeft(d, arr) {
    // Write your code here


    for(var i = 0; i < d; i++){
        arr.push(arr[0]);
        arr.shift();
        console.log(arr)
    }


    console.log(arr);
    return arr;


}


let rotations1 = 4;
let arr1 = [ 1, 2, 3, 4, 5 ];
rotateLeft(rotations1, arr1)
