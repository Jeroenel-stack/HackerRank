function diagonalDifference(arr) {
   
    let lTr = 0;
    let rTl = 0;


    for(var i = 0; i < arr.length; i++){


        lTr = lTr + arr[i][i]
        rTl = rTl + arr[i][arr.length-i-1];
       
    }


    return Math.abs(rTl - lTr);


    // ! end of the function
}


