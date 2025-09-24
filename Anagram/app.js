function anagram(s) {
    if (s.length % 2 !== 0) {
        console.log('can not split')
        return -1;
    }


    let str1 = s.slice(0, s.length / 2);


    let str2 = s.slice(s.length / 2, s.length);


    str2.split("").forEach((el) => {
        if (str1.includes(el)) {
            str1 = str1.replace(el, 1);
            return;
        }


    });
 
    return str1.split('').filter(el => el !== '1').length;


    // ! end of function
}


let s1 = "ababbb"; // 2  pass
let s2 = "ab"; // 1   pass
let s3 = "abc"; // -1
let s4 = "mnop"; // 2
let s5 = "xyyx"; // 0
let s6 = "xaxbbbxx"; // 1
let s7 =
    "gqdvlchavotcykafyjzbbgmnlajiqlnwctrnvznspiwquxxsiwuldizqkkaawpyyisnftdzklwagv";


anagram(s1);
