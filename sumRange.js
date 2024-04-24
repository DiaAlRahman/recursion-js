function sumRange(n) {
  if (n === 1) return 1;
  return n + sumRange(n - 1);
}

console.log(sumRange(3)); // 6
console.log(sumRange(4)); // 10