function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    // let max = -1;
    // for(let i = 0; i< keyboards.length; i++){
    //     for(let j=0; j< drives.length; j++ ){
    //         if(keyboards[i]+drives[j] <= b && keyboards[i]+drives[j] > max){
    //             max = keyboards[i]+drives[j];
    //         }
    //     }
    // }
    let max = -1;
    keyboards.forEach(keyboard => {
        drives.forEach(drive => {
            if(keyboard+drive <=b && keyboard+drive > max){
                max = keyboard+drive;
            }
        });
    });
    return max;
}