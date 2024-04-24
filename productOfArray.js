function productOfArray(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  return arr.pop() * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
console.log(productOfArray([1000]));