def raiseToPower(n,x):
    if (x == 1):
        return n;
    else:
        return n * raiseToPower(n, x - 1);

