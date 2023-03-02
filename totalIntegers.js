function totalIntegers(arr) {
  if (arr.length === 0) return 0;

  let total = 0;
  const first = arr.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }
  return total + totalIntegers(arr);
}
