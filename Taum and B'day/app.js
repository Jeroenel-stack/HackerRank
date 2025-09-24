function taumBday(b, w, bc, wc, z) {
    // Calculate the cost of gifts directly or by converting one type to another
    const costBlack = Math.min(bc, wc + z); // Minimum cost for black gifts
    const costWhite = Math.min(wc, bc + z); // Minimum cost for white gifts

    // Total cost
    return BigInt(b) * BigInt(costBlack) + BigInt(w) * BigInt(costWhite);
}
// Example usage:
let b1 = 10, w1 = 10, bc1 = 1, wc1 = 1, z1 = 1;
console.log(taumBday(b1, w1, bc1, wc1, z1).toString());