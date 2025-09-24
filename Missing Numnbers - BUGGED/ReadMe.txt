Note: THIS TEST IS BUGGY - you MUST return:  
return Array.from(new Set(final2));  otherwise it fails; 


Key is to use  Arrays, NOT strings, otherwise will find 3, in 13
Key is: To replace ones an element is found in BOTH ARRAYS with something like: ‘found’, this way the values will NOT repeat themselves.
You HAVE to return: return Array.from(new Set(final2));  otherwise it fails; 
