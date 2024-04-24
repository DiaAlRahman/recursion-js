function all(arr, cb) {
  if (arr.length === 0) return true;
  if (arr.length === 1) return cb(arr[0]);
  if (cb(arr[0])) {
    arr.shift()
    return all(arr, cb);
  } else {
    return false;
  }
}

const allLessThanSeven = all([1, 2, 5], num => num < 7);
console.log(allLessThanSeven);