function beautifulTriplets(d, arr) { 
    let result = 0;
    for(const i of arr) { 
            if (arr.includes(i + d) && arr.includes(i + d * 2)) { 
                result++;
            }
        }
    return result;
}