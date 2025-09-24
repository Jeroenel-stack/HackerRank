function stringsXOR(s, t) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        result += s[i] === t[i] ? '0' : '1';
    }
    return result;
}

// Example usage:
const s = "10101";
const t = "00101";
console.log(stringsXOR(s, t)); // Output: "10000"

