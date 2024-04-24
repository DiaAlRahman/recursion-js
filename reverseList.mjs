let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
}


// Iterative Solution
function reverseList(list) { 
  let values = [];
  while (list) {
    values.push(list.value);
    list = list.next;
  }
  
  for (let i = values.length - 1; i > -1; i--){
    console.log(values.at(i));
  }
}

// Recursive Solution
// function reverseList(list) {
//   if (list.next) {
//     reverseList(list.next);
//   }
//   console.log(list.value);
// }

reverseList(list); // 4, 3, 2, 1