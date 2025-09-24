Equal Stacks

Key:

> Create an array from arguments, call this mainArry
> Create second array that will hold the SUM of individual arrays (i.e. sumArray) that are in the mainArray
> do infinite iteration for-loop   if Every element in the sumArray is the same, then BREAK out of the for loop
> on every iteration we want to check the INDEX of the biggest number in the sumArray, this will tell me which array from the   mainArray needs to be   .shifted(), i.e. first element is being removed
> when I find the MAX element, I need to   shift the mini array from the MAIN array AND  minus the shifted number from the SUM array, because this saves time trying to recreate the sum array from the new   mainArray that has now shifted
> do this till all elements in the SUM array are the same
> return  sumArray  index 0, cause at this point all elements in the sum array are the same
