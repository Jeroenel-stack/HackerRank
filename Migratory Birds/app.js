function migratoryBirds(arr) {
   
    arr.sort((a,b)=> a-b);


    let final = Array.from({length: 5}, ()=> []);


    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 1){
            final[0].push(1)
        }


        if(arr[i] === 2){
            final[1].push(2)
        }


        if(arr[i] === 3){
            final[2].push(3)
        }


        if(arr[i] === 4){
            final[3].push(4)
        }


        if(arr[i] === 5){
            final[4].push(5)
        }


        // end of for loop
    }


    console.log(final.map(el=> el.length));


    return final.map(el=> el.length).indexOf(Math.max(...final.map(el=> el.length)))+1




    // ! end of fn
}


let a1 = [1,1,2,2,3];
migratoryBirds(a1);
