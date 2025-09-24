function divisibleSumPairs(n, k, ar) {


    let count = 0;
   
    for(var i = 0; i < ar.length; i++){


        let el = ar[i];
        console.log(el);


        for(var j = i+1; j < ar.length; j++){


            let arr = ar.slice(j, ar.length);
            console.log(arr);
           
            if((el+arr[0]) % k === 0){
                count++;
            }


            // end of j loop
        }








        // end of for i loop
    }


    console.log(count);
    return count;


    // ! end of function
}




let arr1 = [1, 3, 2, 6, 1, 2]; // 5
let k1 = 3;
let n1 = arr1.length;
divisibleSumPairs(n1, k1, arr1);