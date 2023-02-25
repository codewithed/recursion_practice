function sumrange(n) {
    if (n === 1) return 1;
    else {
       return n + sumrange(n - 1)
    }
}