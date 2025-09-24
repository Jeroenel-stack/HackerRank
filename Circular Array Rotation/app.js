function circularArrayRotation(a, k, queries) {
    for(let i = 0; i < k; i++){
        a.unshift(a.pop());
    }
    let ar = [];
    for(let i = 0; i < queries.length; i++){
        ar.push(a[queries[i]]);
    }

    return ar;
}