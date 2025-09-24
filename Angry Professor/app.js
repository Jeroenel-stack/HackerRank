function angryProfessor(k, a) {
    const YES = "YES"
    const NO = "NO"
    let inClassCount = 0;
    for(const arrivalTime of a){
        inClassCount += arrivalTime <= 0;
        if(inClassCount >= k) return NO;
    }
    return YES;
}