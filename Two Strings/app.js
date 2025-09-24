function twoStrings(s1, s2) {
    const stringMap = {};
    for (let i = 0; i < s1.length; i++) {
        const s1Letter = s1[i];
        stringMap[s1Letter] = true;
    }
    for (let i = 0; i < s2.length; i++) {
        const s2Letter = s2[i];
        if (stringMap[s2Letter]) {
            return "YES";
        }
    }
    return "NO";
}

const input0 = ['hello', 'world']; // YES
const input1 = ['hi', 'world']; // YES
const input2 = ['world', 'world']; // YES
console.log(twoStrings(...input0[1]), input0[1]);
console.log(twoStrings(...input1[0]), input1[1]);