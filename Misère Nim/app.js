function misereNim(s) {
    // Write your code here




    // first rule: If there are only 1 stones in each pile, then if Even, First wins, if ODD, then Second wins
    let total = s.reduce((acc,value)=> acc + value, 0);
    if(total === s.length){
        if(s.length % 2 === 0){
            console.log('First');
            return 'First'
        } else {
            console.log('Second');
            return 'Second'
        }
    }




    // second rule, the WINNING FORMULA: if  XOR'ing elements ends up with 0, then Second wins, else first wins


    let xoringSum = s.reduce((acc,value)=>{
        acc = acc ^ value
        return acc;
    }, 0);


    if(xoringSum === 0){
        console.log('Second');
            return 'Second'
    } else {
        console.log('First');
        return 'First'
    }
   


    // ! end of function
}




let arr1 = [1,1];
let arr2 = [2,1,3];


misereNim(arr2);
