function gradingStudents(grades) {
   
return grades.map(el=> {
    if(el < 38){
        return el;
    }


    if(Math.floor(el / 5) * 5 + 5 - el < 3){
        return Math.floor(el / 5) * 5 + 5
    }
   
    return el;


})

}

let a = gradingStudents([29, 84, 57]);
let b = gradingStudents([73,67,38,33])
console.log(b);