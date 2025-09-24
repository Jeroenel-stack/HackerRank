function getTotalX(a, b) {
    // Write your code here


    let holderOfAllFactorsOfArray1 = [];


    a.forEach(el=> {
        // console.log(el);


        let temp = [];
        for(var i = 1; i <=100; i++){
           
            if(i % el === 0){
                temp.push(i)
            }
        }


        holderOfAllFactorsOfArray1.push(temp)


    })


    // console.log(holderOfAllFactorsOfArray1);


    // remove all elements that are bigger or equal to B last number, cause I can NOT divide them into the Last number, i.e. they are NOT factors of it, since they are bigger




    let finalHolder = [];


    holderOfAllFactorsOfArray1.forEach(el=> {
        let temp = [];


        el.forEach(el2=> {
            if(el2 <= b[b.length-1]){
                temp.push(el2)
            }
        })


        finalHolder.push(temp);


    })
   
    console.log(finalHolder);
   


    // MOVING TO CONDITION 2 - find all Factors of numbers in array 2


   b.forEach(el => {
        let temp = [];
        for(var i = 0; i <= el; i++){
            if(el%i === 0){
                temp.push(i)
            }
        }
        finalHolder.push(temp)
    })


    console.log(finalHolder);




    // now lets find every element from the array that appears in EVERY ARRAY, SO IT HAS TO APPEAR  A.LENGTH + B.LENGTH NUMBER OF TIMES, this means it is common to ALL arrays and thus is our answer


    let final = finalHolder.flat(10).sort((a,b)=> a-b);
    console.log("final: ", final);


    let finalArr = [];


    final.forEach(el=> {
        console.log(el);
        let count = 0;


        final.forEach(el2=> {
            if(el === el2){
                count++


                if(count === (a.length + b.length)){
                    finalArr.push(el)
                }
            }
        })


    })


    let allDone = Array.from(new Set(finalArr));
    console.log("allDone: ", allDone);
    return allDone.length;






    //! end of function
}
//
let a1 = [2, 4];
let a2 = [2];
let a3 = [3, 4];


let b1 = [16, 32, 96]; // should be 3
let b2 = [20,30,12];
let b3 = [24,48]; // 2


getTotalX(a3, b3);


