Reverse a linked list

Keys:

> we need to transfer elements from Memory into finalObj one by one
> we need 3 pointers:  finalObj = null, memory = fullObject;,   and   inside a while loop:  endSave
>  while loop should run  while   memory !== null… 	HINT: I can create a variable I and increment it 1 by 1 per loop, so I can monitor transformation  step by step
> at the beginning of the loop we save  saveEnd = memory.next;  
> we then  assign   memory.next to  finalObj… so now    memory = 1 + null;
> we now reassign   finalObj = memory,  because we have now transferred the value from memory to finalObj;
> we finally make memory =  endSave, i.e. the beginning value.
