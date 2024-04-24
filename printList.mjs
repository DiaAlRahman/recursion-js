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

// Iterative solution
// function printList(list) { 
//   for (let node = list; node !== null; node = node.next) {
//     console.log(node.value);
//   }
// }

// Recursive Solution
// function printList(list) {
//   if (list.next === null) {
//     console.log(list.value);
//     return;
//   }
//   console.log(list.value);
//   printList(list.next);
// }

printList(list); // 1, 2, 3, 4