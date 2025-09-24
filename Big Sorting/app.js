function bigSorting(unsorted) {
   let a = unsorted.sort((a, b) => {


    // console.log(a);
    // console.log(b);


        if (a.length != b.length) {
            return a.length - b.length;
        } else {
           
            for(var i = 0; i < a.length; i++){
               
                if(a[i] < b[i]){
                    return -1
                } else if(a[i] > b[i]){
                    return 1
                }
            }
            return 0
        }
   
    });


    // console.log(a);
    return a;


    // ! end of function
}


let arr1 = ['1', '200', '150', '3'];
bigSorting(arr1)
