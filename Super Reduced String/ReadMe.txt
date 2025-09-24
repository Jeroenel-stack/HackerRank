
Big note: 

(can NOT use HashMap count number of repeating characters here, MUST use compare  i to i+1; )

Key to success:

Compare    s[test]  to  s[test+1]   if it matches   then  splice 2 at TEST   AND  reduce test by 1 to go back to previous step; IF test and test+1 are NOT equal, then test++  AND continue
Do this 100 times
If    strAsArray === 0; then break the FOR loop
If nothing matches, then test++
Return either Empty string OR    string that is remaining
NOTE: Make sure to use Continue, to allow the iteration to go back 1 index, i.e. test = test -1; 
