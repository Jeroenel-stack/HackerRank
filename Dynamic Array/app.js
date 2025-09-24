function dynamicArray(n, queries) {
    // Write your code here


    let lastAnswer = 0;
    let arr = Array.from(Array(n), ()=> []);
    let answers = [];


    queries.forEach(([q,x,y])=> {


        let idx = (x^lastAnswer)%n;


        if(q === 1){
            arr[idx].push(y);
        } else {
            lastAnswer = arr[idx][y % arr[idx].length];
            answers.push(lastAnswer);
        }
       
    })
	  console.log(answers);


    return answers;


}


let arr1 = [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]; // 7,3
let n1 = 2;  // size of the array to create
dynamicArray(n1, arr1);

