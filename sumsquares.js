function sumSquares(array) {
  if (array.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i])) {
      sum += sumSquares(array[i]);
    }
    if (Number.isInteger(array[i])) {
      sum += array[i] * array[i];
    }
  }
  return sum;
}

const l = [1, 2, 3];
console.log(sumSquares(l));
