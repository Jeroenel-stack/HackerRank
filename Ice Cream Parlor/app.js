function icecreamParlor(m, arr) {
   
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === m && i != j){
                return [i+1, j+1]
            }
        }
    }




    // ! end of the function
}


let k1 = 4;
let arr1 = [ 1, 4, 5, 3, 2 ];


icecreamParlor(k1, arr1)
