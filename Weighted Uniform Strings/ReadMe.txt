Weighted Uniform Strings

Keys:

> fastest way to slice the strings into all Groups is with this regex: let allGroupsArr = s.match(/([a-z])\1*/g);
> to find the Weight of the character use alphabet index + 1:  let alphabet = "abcdefghijklmnopqrstuvwxyz";
> To populate allWeightsArray, go through each element in the allGroupsArr, get the weight of the first character, e.g. A   then    use a for…loop  to find out how many A’s are there in each iteration of  allGroupsArr  and push  weight * (i+1)  into the allWeightsArr;
> finish off with  mapping throught Queries and finding out if  allWeightsArr.indexOf(elementFromQuery)    if  it is found return Yes, if not, return No
