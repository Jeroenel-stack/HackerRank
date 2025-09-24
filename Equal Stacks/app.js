function equalStacks(h1, h2, h3) {


    let mainArr = [h1,h2,h3];
    // console.log("mainArr: ", mainArr);




    let sumArr = mainArr.map(el=> el.reduce((acc,value)=> acc+value));
    // // console.log("sumArr: ", sumArr);




    for(var i = 0; i < Infinity; i++){


        if(sumArr.every(el=> el === sumArr[0])){
            // console.log('all are equal');
            break;
        }


        // console.log("sumArr: ", sumArr);
        // console.log("mainArr: ", mainArr);




        let findMax = Math.max(...sumArr);
        // console.log("findMax: ", findMax);


        let maxIndex = sumArr.indexOf(findMax);
        // console.log("maxIndex: ", maxIndex);


        let a = sumArr[maxIndex];
        // console.log(a);


        sumArr[maxIndex] = sumArr[maxIndex] - mainArr[maxIndex].shift();
       
        let b = sumArr[maxIndex];
        // console.log(b);




        // end of FOR LOOP i
    }


    return sumArr[0]


 
    // ! end of the function
}
 
let h1a = [3, 2, 1, 1, 1];
let h2a = [4, 3, 2];
let h3a = [1, 1, 4, 1];  // should be 5
 
let h1b = [1,2,1,1];
let h2b = [1,1,2];
let h3b = [1,1];  // should be  2
 
equalStacks(h1a, h2a, h3a);


