function missingNumbers(arr, brr) {
    // Write your code here


    arr.sort((a,b)=> a-b);
    // console.log(arr);


    brr.sort((a,b)=> a-b);
    // console.log(brr);


    let finalArr = [];


    brr.forEach((el, index)=> {


        if(arr.indexOf(el) !== -1){
            brr[index] = 'found';
            arr[arr.indexOf(el)] = 'found';
            return;
        }


        return finalArr.push(el)


     




    })


    // console.log(brr.filter(el=> el !== 'found'));
    return Array.from(new Set(brr.filter(el=> el !== 'found')));


}








let arr1 = '203 204 205 206 207 208 203 204 205 206'.split(' ').map(el=> Number(el));
let arr2 = '203 204 204 205 206 207 205 208 203 206 205 206 204'.split(' ').map(el=> Number(el));   // 204 205 206
 
 
let arr1a = '11 4 11 7 13 4 12 11 10 14'.split(' ').map(el=> Number(el));
let arr2a = '11 4 11 7 3 7 10 13 4 8 12 11 10 14 12'.split(' ').map(el=> Number(el));


let arr1b = [7,2,5,3,5,3];
let arr2b = [7,2,5,4,6,3,5,3]; // 4,6
 
missingNumbers(arr1, arr2);
