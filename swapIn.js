class Tree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
  addLeaf(val){
    if (val < this.value) {
      if (this.left === null) {
        this.left = new Tree(val)
      } else {
        this.left.addLeaf(val)
      }
    } else if (val > this.value) {
      if (this.right === null) {
        this.right = new Tree(val)
      } else {
        this.right.addLeaf(val)
      }
    }
  }
  printValues(){
    if (this.value !== null) {
      console.log(this.value)
    }
    if (this.left !== null) {
      console.log('Going left!')
      this.left.printValues()
    }
    if (this.right !== null) {
      console.log('Going right!')
      this.right.printValues()
    }
  }
  printTree(){
    let stack = [];
    function printChildren (node) {
      stack.push(node.left.value, node.right.value)
      if (node.left !== null) {
        printChildren(node.left)
      }
      if (node.right !== null) {
        printChildren(node.right)
      }
    }
    printChildren(this);
    console.log(stack)
  }
}

let newTree = new Tree(3)
newTree.addLeaf(2)
newTree.addLeaf(1)
newTree.addLeaf(4)
newTree.addLeaf(5)
newTree.printTree()
