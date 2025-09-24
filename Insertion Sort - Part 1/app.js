function insertionSort1(n, arr) {

    var i = 0, key = 0, j = 0;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            console.log(arr.join(' '));

            j = j - 1;
        }
        arr[j + 1] = key;
    }
    console.log(arr.join(' '));
}
