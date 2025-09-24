function processData(input) {
//Enter your code here
var inArr=input.split("\n");
for(i=1;i<inArr.length;i++){
var line=inArr[i].split(" ");
var res=(parseInt(line[2])+parseInt(line[1])-1)%line[0];
if(res==0)res=line[0];
console.log(res);
}
}process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
_input += input;
});process.stdin.on("end", function () {
processData(_input);
});