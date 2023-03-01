function contains(object, value) {
  const keys = Object.keys(object);
  const vals = Object.values(object);
  const child = object[keys[0]];
  // guard case
  if (vals.includes(value) === true) {
    console.log(true);
    return true;
  }

  // recursive case
  if (typeof child === 'object') {
    contains(child, value);
  } else {
    console.log(false);
    return false;
  }
}
