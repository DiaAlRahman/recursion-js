function printChildren(t) {
  
}

const tree = {
  name: 'John',
  children: [
    {
      name: 'Jim',
      children: []
    },
    {
      name: 'Zoe',
      children: [
        { name: 'Kyle', children: [] },
        { name: 'Sophia', children: []},
      ]
    }
  ]
}

function printChildren(node) {
  console.log(node.name);
  if (node.children) {
    for (let child of node.children) {
      printChildren(child);
    }
  }
  return;
}

printChildren(tree);
