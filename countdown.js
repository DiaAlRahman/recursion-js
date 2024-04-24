function countdown(n) {
  if (n < 1) {
    console.log('done');
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5); // 5, 4, 3, 2, 1, done
// countdown(10); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, done