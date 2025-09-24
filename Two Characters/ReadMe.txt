Two Characters

Key:

> To filter out allPossible strings use this:
	> find ALL unique characters in the string = uniqueCharacterArray
>convert original string into array  =  orgStrArr
	> Create  2 x for loops that will iterate throught   Unique Charaters array;  so we should have   element1  which is  uniqueCharacterArray[i]    and then another one:  uniqueCharacterArray[j]
	> then use   filter on the orgStrArr   with condition:   if  orgStrArr-element is equal to uniqueCharacterArray[i] OR uniqueCharacterArray[j]. Then return it
> Now we have list of ALL possible combination of strings that consists of 2 characters
> Now filter out ALL strings where   2 unique characters go side by side… i.e. aa  bb  cc aaaa etc.    (allPossibleStr.indexOf(el1+el1) === -1 && allPossibleStr.indexOf(el2+el2) === -1)   so if   we FIND an index of  ‘aa’ for example AND  ‘bb’  then we remove it.   This will leave only Valid Strings
> finally check the string lengths and select the biggest one: longest = Math.max(longest, allPossibleStr.length)
>NOTE: you also need STARTING condition where is s.length === 1, return 0, for test 1 to pass
