const simpleArraySum = ar => {
    return ar.reduce((acc, cv) => {
        return acc + cv
    }, 0)
}
console.log(simpleArraySum([1,2,3,4,10,11]));