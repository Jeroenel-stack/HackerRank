Key:

>DO NOT use Array.fill()  its VERY bad method… always use:    let arr = Array.from({length: n}, ()=> []); 
> create 3 variables:  lastAnswer, answers = []; and arr =  array should have Number of arrays inside of it,  number of arrays is the N value
> iterate through queries  which come as  MINI arrays with 3 values in them so extract values at index 0,1,2
> follow instructions on what to do with each ‘query’ , literally write what they tell you - BUT when they say  append OR store, they really mean PUSH, so use .push
> they want me to return the ANSWERS array
