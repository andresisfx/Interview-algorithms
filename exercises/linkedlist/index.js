// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class LinkedList {
    
    constructor(){

        this.head= null;
        this.tail=null;
        this.length=0;
    }

    insertFirst(val){
        const newNode= new Node(val);

        let current= this.head;
        if(!current){
            this.head=newNode;
            this.length ++
            return;
        }
        
        while (current.next) {
            current=current.next;
        }
        this.head= newNode;
        this.length =this.length + 1;
        
    }
    size(){
        return this.length
    }

}
class Node {
    constructor(val, next=null){
       this.data=val;
       this.next=next;
    }
    
}

module.exports = { Node, LinkedList };
