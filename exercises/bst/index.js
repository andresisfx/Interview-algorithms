// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {

    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
    insert(value){
      const node = new Node(value)
      if(!this.data){
        this.data = node
      }else{
        this.InsertNode(this,node)
      }

    }
    InsertNode(currentNode,newNode){
      if(newNode.data>currentNode.data){
        if(!currentNode.right){
            currentNode.right=newNode
        }else{
            this.InsertNode(currentNode.right, newNode)
        }

      }else{
        if(!currentNode.left){
           currentNode.left=newNode
        }else{
           this.InsertNode(currentNode.left, newNode)
        }
      }
    }
    contains(value,node=this){
      if(node.data ===value){
          return node
        }
      if( value>node.data){
        if(!node.right){
          return null
        }else{
         return this.contains(value,node.right)
        }
      }
      if(value<node.data){
        if(!node.left){
          return null
        }else{
         return this.contains(value,node.left)
        }
      }
    }

}

module.exports = Node;
