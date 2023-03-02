function contains(obj, value) {
  const keys = Array.from(Object.keys(obj));
  for (let i = 0; i < keys.length; i += 1) {
    if (obj[keys[i]] === value) {
      return true;
    }
    if (typeof obj[keys[i]] === 'object') {
      return contains(obj[keys[i]], value);
    }
  }
  return false;
}
