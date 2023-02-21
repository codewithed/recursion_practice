def raiseToPower(n,x):
    if (n >= 1):
        if (x == 0):
            return 1
        elif (x == 1):
            return n
        else:
            return n * raiseToPower(n, x - 1)
    else:
        print("n must be greater or equal to 1")