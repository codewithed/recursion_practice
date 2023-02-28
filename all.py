def all(array, callback):
  arr = array

  if (len(arr) == 0):
    return True

  if (callback(arr[0])):
    arr.pop(0)
    return all(arr, callback);
  return False

