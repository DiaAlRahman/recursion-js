function MergeSort(arr) {
  // console.log(arr);
  if (!Array.isArray(arr)) return arr;

  let start = 0;
  let mid = Math.floor(arr.length / 2);
  let end = arr.length-1;

  if (start === end) return arr;

  let l = MergeSort(arr.slice(start, mid)); // 5 // 2
  // console.log(l);
  let r = MergeSort(arr.slice(mid)); // 1 2 // 1
  // console.log(r);


  let sortedArr = [];
  while ((l.length !== 0) && (r.length!==0)) {
    if (l[0] <= r[0]) {
      sortedArr.push(l[0]);
      l.shift();
    } else {
      sortedArr.push(r[0]);
      r.shift();
    }
  }

  if (l.length !== 0) {
    sortedArr = sortedArr.concat(l);
  }

  if (r.length !== 0) {
    sortedArr = sortedArr.concat(r);
  }
  

  return sortedArr;
}

console.log(MergeSort([5, 2, 1, 3, 6, 4])); // [1, 2, 5]