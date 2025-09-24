function gridChallenge(grid) {
   
    let sorted = grid.map(el=> el.split('').sort());
    // // console.log(sorted);


    // create a column sorted


    let colSorted = Array.from({length: grid[0].length}, ()=> []);
    // console.log("colSorted: ", colSorted);




    for(var i = 0; i < sorted.length; i++){


        let el = sorted[i];
        // console.log(el);


        // colSorted[0].push(el[0]);
        // colSorted[1].push(el[1]);


        for(var j = 0; j < el.length; j++){
            colSorted[j].push(el[j]);
        }




        // end of for loop i
    }


    // console.log(colSorted);
    let finalTest = colSorted.every(el=> {
       
        for(var i = 0; i < el.length; i++){
            if(el[i+1] === undefined){
                break
            }
            if(el[i] > el[i+1]){
                return false
            }
        }


        return true


    });
    // console.log(finalTest);


    if(finalTest){
        return 'YES'
    } else {
        return 'NO'
    }
 


// ! end of founction
}












let arr1 = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]; // yes
let arr2 = ["mpxz", "abcd", "wlmf"]; // no
let arr3 = ["abc", "hjk", "mpq", "rtv"]; // yes
 
gridChallenge(arr3);
