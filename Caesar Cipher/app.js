function caesarCipher(s, k) {
   
    let alph = 'abcdefghijklmnopqrstuvwxyz'.repeat(10);
    let capAlph = alph.toLocaleUpperCase();
   
    let finalStr = '';




    for(var i = 0; i < s.length; i++){


        let test = /[a-z]/.test(s[i]);
        // console.log("test: ", test);


        // lower
        if(/[a-z]/.test(s[i])){
            finalStr = finalStr + alph[alph.indexOf(s[i])+k];
            continue;
        }


        // upper
        if(/[A-Z]/.test(s[i])){
            finalStr = finalStr + capAlph[capAlph.indexOf(s[i])+k];
            continue;
        }


        finalStr = finalStr + s[i]




    }
   


    // console.log(finalStr);
    return finalStr;






}




let s1 = 'middle-Outz'; //okffng-Qwvb
let k = 2;
caesarCipher(s1, k);
