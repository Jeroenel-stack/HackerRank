function maximumPerimeterTriangle(sticks) {
    // Write your code here
   
    console.log(sticks);


    let sorted = sticks.sort((a,b)=> a-b);


    let final = [];
 
    for(var i = 0; i < sticks.length; i++){
        let a = sticks[i];
        let b = sticks[i+1];
        let c = sticks[i+2];




        if(a + b > c && a + c > b && b + c > a){
            final.push([a,b,c])
        }


    }


    console.log(final);


   return final.length > 0 ? final[final.length-1] : [-1]
   


}






let s1 = [ 1, 1, 1, 3, 3 ];
let s2 = [1,2,3,4,5,10];


maximumPerimeterTriangle(s2)
