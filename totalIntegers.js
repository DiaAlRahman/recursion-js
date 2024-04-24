function totalIntegers(arr) {
  if (arr.length === 0) return 0;

  let c = 0;

  if (Array.isArray(arr[0])) {
    c += totalIntegers(arr[0]);
  } else if (Number.isInteger(arr[0])) {
    c += 1;
  }
  arr.shift();

  return c + totalIntegers(arr);
}

nestedArr = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];
console.log(totalIntegers(nestedArr));

let first = nestedArr.shift();
console.log(first);
