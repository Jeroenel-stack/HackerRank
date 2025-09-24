function pickingNumbers(a) {
    // Write your code here
   
    let sorted = a.sort((a,b)=> a-b);
    console.log("sorted: ", sorted);


    let final = [];


    sorted.forEach(el=> {
        let count = 0;


        sorted.forEach(el2=> {
            if(el2 - el === 0 || el2 - el === 1){
                count++
            }
        })
        final.push(count)
    });


    let allDone = final.sort((a,b)=> b-a);
    console.log("allDone: ", allDone);
    return allDone[0];




    // ! end of function
}


let a1 = [ 1, 2, 2, 3, 1, 2 ]; //5
let a2 = [ 4, 6, 5, 3, 3, 1 ]; // 3
pickingNumbers(a2);
