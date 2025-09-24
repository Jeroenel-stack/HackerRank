function palindromeIndex(s) {


    if(s.split('').every(el=> el === s.split('')[0]) && s.length > 0){
        // console.log('all are the same');
        return  -1
    }




   
    function checkPali(str){


        // check if all are the same letter, then true
        if(str.split('').every(el=> el === str.split('')[0]) && str.length > 0){
            // console.log('all are the same');
            return true;
        }


        let str1 = str.slice(0, str.length/2);
        // // console.log("str1: ", str1);
        let str2 = str.slice(str.length/2, str.length).split('').reverse().join('');
        // // console.log("str2: ", str2);


        return str1 === str2;
    }






    for(var i = 0; i < s.length / 2; i++){


        let fromStart = s[i];
        let indexFromStart = i;
        // console.log(fromStart);


        let fromBack = s[s.length-1-i];
        let indexFromBack = s.length-1-i;
        // console.log(fromBack);


        if(fromStart !== fromBack){


            let strFromStartRemoveIndex = s.slice(0, indexFromStart).concat(s.slice(indexFromStart+1))
            // console.log(strFromStartRemoveIndex);
           


            let strFromBackRemoveIndex = s.slice(0, indexFromBack).concat(s.slice(indexFromBack+1));
            // console.log(strFromBackRemoveIndex);


            if(checkPali(strFromStartRemoveIndex)){
                // console.log('from START is the answer', indexFromStart)
                return indexFromStart
            }


            if(checkPali(strFromBackRemoveIndex)){
                // console.log('from BACK is the answer', indexFromBack )
                return indexFromBack
            }




        }
   


    }


    // console.log('nothing found, return -1')
    return -1


    // ! end of function
}




let s1 = 'aaab'; // 3
let s2 = 'baa'; // 0
let s3 = 'aaa'; // -1
let s4 = 'quyjjdcgsvvsgcdjjyq' // 1  it is a palindrom  i.e. if you read it backwards or forwards it will be the same
let s5 = 'qyjjdcgsvvsgcdjjyu1q' // second last


palindromeIndex(s4);
