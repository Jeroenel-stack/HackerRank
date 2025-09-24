function closestNumbers(arr) {
   
    arr.sort((a,b)=> a-b);
    console.log(arr);


    let finalArr = [];


    let smallest = Infinity;


    arr.forEach((el, i)=> {
        if(Math.abs(arr[i] - arr[i+1]) <= smallest){
            smallest = Math.abs(arr[i] - arr[i+1])
        }
    })


    console.log(smallest);


    arr.forEach((el, i)=> {
        if(Math.abs(arr[i] - arr[i+1]) === smallest){
            finalArr.push(arr[i], arr[i+1])
        }
    })


    console.log(finalArr);
    return finalArr;




}








let arr1= '-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854'.split(' '); // -20 30
 
let arr2 = '-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 -520 -470'.split(' '); // -520 -470 -20 30
 
let arr3 = [1,2,3,4,5]; // [ 1, 2, 2, 3, 3, 4, 4, 5 ]
 
closestNumbers(arr3);
