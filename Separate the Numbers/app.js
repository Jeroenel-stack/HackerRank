function separateNumbers(s) {


    // NOTES:
    // Correct way to slice is:   .slice(0, str.length);


    // console.log(s.length);
    let pretty = 'NO';


    if(s.length < 2){
        console.log(pretty);
        return pretty;
    }




   


for(var i = 1 ; i <= Math.floor(s.length/2); i++){


    // OPERATION 1: select first number
    let first = s.slice(0, i);
 
    // console.log("first: ", first);
    // console.log(Number(first)+1)


    // OPERATION 2: Add +1/+2/+3... to the first and concat to the finalStr;


    let finalStr = '';




    for(var j = 0; j <= s.length; j++){


     finalStr = finalStr + (BigInt(first)+BigInt(j));
    //  console.log(finalStr);


     if(finalStr.length >= s.length){
        break;
     }
        // end of for loop j
    }


    // console.log(first)


    // console.log(s.length)
    // console.log(finalStr.length);
   
    // console.log(s);
    // console.log(finalStr);




    let finalTest = finalStr === s;


    if(finalTest){
        pretty = 'YES' + ' ' + first;
        console.log(pretty);
        return pretty;
    }


     
    // end of forloop i
}


//   console.log(firstArr);


  console.log(pretty);
  return pretty;




    // ! end of main function
}


let s1 = "1234"; // yes
let s2 = "91011"; // yes
let s3 = "10203"; // no
let s4 = '99332720572758669933272057275867'


separateNumbers(s4);