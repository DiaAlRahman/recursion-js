function power(n, p) {
  if (p === 0) return 1;
  if (p === 1) return n;
  return n * power(n, p - 1);
}

for (let i = 0; i < 5; i++){
  console.log(power(2, i));
}


module.exports = power;
