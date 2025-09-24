function kangaroo(x1, v1, x2, v2) {
    // Write your code here


    let car1Location = x1;
    let car2Location = x2;
    let possible = false;


    for (let i = 0; i < 10000; i++) {
        car1Location = car1Location + v1;
        car2Location = car2Location + v2;


        // console.log(car1Location);
        // console.log(car2Location);


        if (car1Location === car2Location) {
            console.log("true");
            possible = true;
        }
    }


    if (possible) {
        return "YES";
    } else {
        return "NO";
    }


    // ! end of function
}


let xx1 = 0;
let vv1 = 3;
let xx2 = 4;
let vv2 = 2; // YES


kangaroo(xx1, vv1, xx2, vv2);
