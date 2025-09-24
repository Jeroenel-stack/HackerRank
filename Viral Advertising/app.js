function processData(input) {
const n = Number(input);
let people = 5;
let result = 0;
for(var i=0; i<n; i++) {
result += Math.floor(people / 2);
people = Math.floor(people / 2) * 3;
}
console.log(result);
}process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
_input += input;
});process.stdin.on("end", function () {
processData(_input);
});