function reverse(obj){


let finalObj = null;
let memory = obj;


while(memory !== null){


    let endSave = memory.next;
    console.log("endSave: ", endSave);


    memory.next = finalObj;
    console.log(memory);


    finalObj = memory;
    console.log(finalObj);


    memory = endSave;
    console.log(memory);


}
console.log(finalObj);
return finalObj;


}


let obj = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: {
                data: 4,
                next: {
                    data: 5,
                    next: null
                }
            }
        }
    }
}


reverse(obj);
