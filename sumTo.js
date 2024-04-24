// Iterative solution
// function sumTo(n) {
//   let sum = 0;
//   for (let i = n; i > 0; i--) {
//     sum += i;
//   }
//   return sum;
// }


// Recursive Solution
// function sumTo(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + sumTo(n - 1);
// }

function sumTo(n, total = 0) {
  if (n === 1) {
    return total + 1;
  }
  return sumTo(n - 1, total + n);
}

// Using the formula
// function sumTo(n) {
//   return n * (n + 1) / 2;
// }

console.log(sumTo(3)); // 5050
