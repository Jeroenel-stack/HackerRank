function cookies(k, A) {
    const h = QHeap(A);
    let iters = 0;
    while(h.arr[0] < k) {
        if (h.arr.length < 2) {
            return -1;
        }
        const least = h.removeTop();
        h.update(0, least + h.arr[0] * 2);
       
        iters += 1;
    }
   
    return iters;
}
