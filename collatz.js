function collatz(n, c = 0) {
  if (n === 1) return c;
  if (n % 2 === 0) return collatz(n/2, c+1);
  else return collatz(3 * n + 1, c + 1);
}

console.log(collatz(3));

// for(let i = 1; i <= 8; i++) {
//   console.log(i, collatz(i));
// }