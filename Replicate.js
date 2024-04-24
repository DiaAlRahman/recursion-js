function Replicate(reps, num) {
  let arr = [];
  if (reps < 1) {
    return arr;
  } else {
    arr.push(num);
    return arr.concat(Replicate(reps -= 1, num));
  }
}

console.log(Replicate(3, 5));