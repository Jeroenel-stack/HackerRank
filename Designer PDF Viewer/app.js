function designerPdfViewer(h, word) {
    // Write your code here
    const map = new Map();
    let i = 'a'.charCodeAt(0);
    let j = 'z'.charCodeAt(0);
    for(; i <= j; i++) map.set(String.fromCharCode(i), h[i - 97]);
    const max = word.split('').reduce((acc, curr) => map.get(curr) > acc ? map.get(curr) : acc, 0);
    return max * word.length;
}