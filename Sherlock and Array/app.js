function balancedSums(arr) {


    let sum = 0;


    let total = arr.reduce((a,b)=> a+b, 0);
    // console.log("total: ", total);


    for(var i = 0; i < arr.length; i++){


        let test = total - sum - arr[i];
        // console.log("test: ", test);


        if(sum === test){
            // console.log('true');
            return 'YES'
        }




        sum = sum + arr[i]
        // console.log(sum);
    }


    return 'NO'


}


let arr1 = [1, 2, 3]; // NO
let arr2 = [1, 2, 3, 3]; // YES
let arr3 = [1, 1, 4, 1, 1]; // YES


let a = balancedSums(arr3);
console.log(a);
