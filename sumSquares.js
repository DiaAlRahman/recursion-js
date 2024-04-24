function SumSquares(arr) {
  if (arr.length === 0) return 0;

  let sum = 0;

  if (Array.isArray(arr[0])) {
    sum += SumSquares(arr[0]);
  } else if (Number.isInteger(arr[0])) {
    sum += (arr[0] ** 2);
  }
  arr.shift();

  return sum + SumSquares(arr);
}

console.log(SumSquares([10, [[10],10],[10]])); 