function contains(obj, target) {
  if (typeof obj !== 'object' || obj === null) {
    return obj === target;
  }

  for (let value of Object.values(obj)) { 
    if (contains(value, target)) {
      return true;
    }
  }

  return false;
};

const nestedObject = {
  data: {
    info: {
      stuff: {
        crazyStuff: {
          value: 45,
          notValue: 68,
        },
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foobar'
          }
        }
      }
    }
  },
};

console.log(contains(nestedObject, 'foobar'));
// let hasIt = contains(nestedObject, 44);
// let doesntHaveIt = contains(nestedObject, 'foo');

// console.log(hasIt);
// console.log(doesntHaveIt);