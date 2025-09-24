The problem states that we’ll be getting an array as an input (e.g. [3,3,2,1,3]) and we need to figure out what is the lowest amount of deletions we need to make in order for all the elements to be the same. In this case, that would be 2, as deleting 2 and 1 in this array would leave us with [3, 3, 3] — all equal.

I recently learned a great way to deconstruct algorithm problems:

Draw it out; and do it manually as a human would
Take those steps, and write it out, or pseudo code it into steps
THEN begin translating that into code.
Let’s take this approach with this problem.

By looking at the array [3,3,2,1,3] as a human I can immediately see some numbers are repeated. So it would make sense to eliminate numbers other than the repeated one, to make them all the same. So let’s allow the computer to keep track of how many times each number shows up in the array. That’s what this piece of code does:

let arrObj = {};
for (let num of arr) {
    arrObj[num] = arrObj[num] + 1 || 1;
  }
We first initialize an empty hash map. Then, for each number that shows up in the array, we set a key in that hash map, and either increment 1 (if the code has seen that number before), or set it to one (if the code had never seen that number before).

At the end of that portion, we’d have an object that looks like this:

arrObj = {
  1:1,
  2:1,
  3:3 
}
Next, I need to remove the numbers that show up least. How do we do that? We need to tell the code which number in the original array shows up the most. In other words, which key in our hash map object has the largest value. That’s what this piece of code does:

let maxCount = 0;
for (let value in arrObj) {
    if (arrObj[value] > maxCount) {
      maxCount = arrObj[value];
    }
  }
This iterates through the arrObj hash map we created, and looks at each value. If that value is greater than the value of maxCount, which at first is 0, then it sets maxCount to that number. Since the first number it sees is 1, and 1 is greater than 0, maxCount is now set to 1. Then it looks at 2. Since 1 is not greater than 1, it skips it. On the last iteration, it looks at 3. 3 is definitely bigger than one, so at the end maxCount is set to 3.

Now, all we have to do is subtract maxCount, the number of times the most frequent number shows up, from how many elements the array has in total, as this will be the minimum amount of deletions necessary to make all the numbers the same. And of course, don’t forget to return the number. That’s what this piece of code does

return (arr.length - maxCount);