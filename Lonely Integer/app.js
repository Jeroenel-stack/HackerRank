function lonelyinteger(a) {
    // Write your code here
   
    let index = 0;


    let sorted = a.sort((a,b)=> a-b);
    console.log("sorted: ", sorted);


    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] === sorted[i+1]){
            i++
        } else {
            // console.log(i);
            index = i;
        }
    }


    console.log(sorted[index]);
    return sorted[index]


}




let arr = [1,2,3,4,3,2,1];


lonelyinteger(arr);
