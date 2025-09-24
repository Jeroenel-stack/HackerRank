function twoArrays(k, A, B) {
   
    A.sort((a,b)=> a-b);
    B.sort((a,b)=> b-a);


    let fStr = 'YES';


    for(var i = 0; i < A.length; i++){
        if(A[i] + B[i] < k){
            fStr = 'NO'
        }
    }


    console.log(fStr);
    return fStr;


}


let a1 = [2, 1, 3];
let b1 = [7, 8, 9];
let k1 = 10; // yes






twoArrays(k1, a1, b1);
