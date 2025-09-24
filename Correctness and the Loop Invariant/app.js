function insertionSort(arr) {

    for(i = 1; i < arr.length; i++){
        var value = arr[i];
        var j = i - 1;
        while(j >= 0 && arr[j] > value){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = value;
    }
    return arr;
}

var arr = [7, 4, 3, 5, 6, 2];
// get input  for arr
arr = insertionSort(arr);
// print arr
console.log(...arr); 
// 2 3 4 5 6 7