function countingValleys(steps, path) {
    // Write your code here
    // key in here, we do NOT need to know how many times valley started, we just need to find  how many times did we reach back to sea level and the step was UP = this is the valley. Logic: because you can NOT go UP without going down first, thus going DOWN is irrelevant.


    const pathToArray = path.split('');
    let distanceFromSeaLevel = 0;
    let totalValleys = 0;


    pathToArray.forEach((el, index)=> {


        if(el === 'U'){
            distanceFromSeaLevel++      
        }


        if(el=== 'D'){
            distanceFromSeaLevel--
        }


        if(distanceFromSeaLevel === 0 && el === 'U'){
            totalValleys++;
        }


        // end of forEach loop
    })


    // console.log("totalValleys: ", totalValleys);


    return totalValleys
}


let stepsIn = 8;
let pathIn = 'UDDDUDUU';


countingValleys(stepsIn, pathIn); // 1
