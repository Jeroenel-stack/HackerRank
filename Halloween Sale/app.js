function howManyGames(p, d, m, s) { 
    let sum = 0, count = -1;
    while (sum <= s) { 
        sum = sum + (p<m ? m : p);
        p -= d;
        count++;
    }
    return count;
}