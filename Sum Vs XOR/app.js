function sumXor(n) {
    // Write your code here




    if(n ===0){
        return 1;
    }


    let binary = n.toString(2);
    console.log("binary: ", binary);


    let final = binary.split('').filter(el=> el === '0').length;
    console.log("final: ", final);
   
    let allDone = Math.pow(2, final);
    return allDone;




}


let n1 = 5; // 2
let n2 = 10; // 4
sumXor(n1);
