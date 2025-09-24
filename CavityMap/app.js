function cavityMap(grid) {

    for (let i=1; i < grid.length-1; i++) {
        for (let j=1; j < grid[i].length-1; j++) {
        const isCavity = grid[i][j]
        if (
            isCavity > grid[i-1][j] &&
            isCavity > grid[i+1][j] &&
            isCavity > grid[i][j-1] &&
            isCavity > grid[i][j+1]
        ) {
            const strArr = grid[i].split('')
            strArr[j] = "X"
            const updatedStr = strArr.join('')
            grid[i] = updatedStr
        }
    }
}
return grid
}
// Example usage:
let grid1 = ["1112", "1912", "1892", "1234"];
console.log(cavityMap(grid1));