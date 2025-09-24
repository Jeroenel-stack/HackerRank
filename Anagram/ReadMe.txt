YOU HAVE TO USE REPLACE,  cause if you try to convert it from String into Array, it will fail speed test
Make sure to remove ALL console.logs and make code efficient, cause large strings will fail some test
KEY: is to replace the found letter from String2 in String1 with a symbol or number, to avoid finding it 2 times. Since ones the element is found, it should be removed from both string 2 and string 1 (i.e. they are duplicates). This will leave you only with letters that need to be changes (i.e. the correct number of changes)
Remember: Replace does NOT alter original str, so you have to ‘reassign it’ with a new string
