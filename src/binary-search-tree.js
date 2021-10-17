const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.root1 = null;
  }

  root() {
    return this.root1 ? this.root1 : null;
  }

  add(data) {
    this.root1 = addData(this.root1, data);
    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addData(node.left, data)
      } else { 
        node.rigth = addData(node.rigth, data)}
      return node;
    }
  }

  has(data) {
    return hasData(this.root1, data);
    function hasData(node, data) {
      if(!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      return data < node.data ? 
             hasData(node.left, data):
             hasData(node.rigth, data);
    }
  }

  find(data) {
    return findData(this.root1, data);

    function findData(node, data) {
      if (!node) {
        return null
      }
      if (data === node.data) {
        return node
      }
      if (data < node.data) {
        return findData(node.left, data)
      } else {
        return findData(node.rigth, data)
      }
    }
  }

  remove(value) {
    this.root = removeNode(this.root, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }

        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;

        node.right = removeNode(node.right, minFromRight.value);

        return node;
      }
    }
  
    
    
  }

  min() {
      if (!this.root1) {
      return null;
    }

    let node = this.root1;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    
    if (!this.root1) {
      return null;
    }

    let node = this.root1;
    while (node.rigth) {
      node = node.rigth;
    }

    return node.data;
  }
}
