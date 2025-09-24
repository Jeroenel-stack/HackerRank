Steps:

Initialize an empty list result to store Kaprekar numbers.

Loop through all numbers from p to q (inclusive):

for i = p to q:


Compute the square of the current number:

square = i * i
squareString = square.toString()


Split the square into two parts:

num1 = first half of squareString

num2 = second half of squareString

num1 = squareString.substring(0, squareString.length / 2)
num2 = squareString.substring(squareString.length / 2)


Convert num1 and num2 to numbers (empty string → 0) and check Kaprekar condition:

if Number(num1) + Number(num2) === i:
    add i to result


After the loop:

If result is empty → print "INVALID RANGE"

Otherwise → print all Kaprekar numbers in result separated by spaces.