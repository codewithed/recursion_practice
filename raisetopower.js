function raiseToPower(n,x) {
    if (x === 1) {
        return n;
    }
    else {
        return n * raisetopower(n, x -1);
    }
}