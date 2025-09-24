function alternatingCharacters(s) {
// initialize a flipping variable (with starting letter) = A
let nextChar = s[0];
// init counter of deletions = 4
let counter = 0;
// loop through string using flipping variable and incrementing counter
for (const letter of s) {
    if(letter === nextChar) {
        nextChar = nextChar === 'A' ? 'B' : 'A';
    } else {
        counter++;
    }
    
}
    // return counter
return counter;
}
