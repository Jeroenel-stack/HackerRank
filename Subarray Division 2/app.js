function birthday(s, d, m) {


    let count = 0;


    for(var i = 0; i < s.length; i++){


        let arr = s.slice(i, i+m);
        console.log("arr: ", arr);


        if(arr.reduce((a,v)=> a+v) === d){
            count++
        }




    }
   
    console.log(count);
    return count;


    // ! end of function
}


let s1 = [2,2,1,3,2];
let d1 = 4;
let m1 = 2;  // [2,2] // [1,3]


birthday(s1,d1,m1)
