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
        
        
        this.head= newNode;
        this.head.next=current;
        this.length ++;
        
    }
    size(){
        return this.length
    }
    getFirst(){
        return this.head
    }
    getLast(){
        let current = this.head;
        while (current.next) {
            current= current.next
        }
        return current
    }
    clear(){
        this.head= null;
        this.length=0;
    }
    removeFirst(){
        if(!this.head)return
        let current= this.head;
        this.head=current.next;
        this.length -- ;
    }
    removeLast(){
        let current= this.head;
        if(!this.head){
            return
        }
        if(!current.next){
            this.head = null;
            this.length --;
            return
        }
        
        while (current.next.next) {
            current= current.next;
        }
        current.next= null;
        this.length --;

    }
    insertLast(data){
      let current = this.head;
      const newNode= new Node(data)
      if(!this.head){
        this.head=newNode
        return
      }
      while (current) {
        if(!current.next){
            break;
        }
        current= current.next;
      }
      current.next =newNode;
      this.length++;

    }
    getAt(nodeNumber){
      let current= this.head;
      if(!this.head){
        return null
      } 

      let counter=0;//* in my opinion this value should start in 1 but tests are done fo this to be 0 
     
      while(current){

          if(nodeNumber===counter){
              
             return current
            }
          current= current.next
          counter ++;
      }
      return null
      
     

    }
    removeAt(index){
       let current= this.head;
       let counter = 0;
       if(!this.head)return
       if(index===0){
        this.head=current.next
        return
       }
       
       while(current){
        if (!current.next) {
            return
        }
          if(index === counter+1){
              current.next= current.next.next;
          }
         counter++ 
         current= current.next;
       }
       
    }
    insertAt(value,index){
      let current= this.head;
      const newNode= new Node(value)
      let counter=0;
      if(!current){
        this.head=newNode;
        this.length++
        return
      }
      if (index===0) {
        this.head=newNode;
        this.head.next=current;
        return
      }
      
      while(current){
         if(!current.next){
            current.next=newNode;
            this.length++;
            return
         }
         if(index === counter+1){
           let aux= current.next;
           current.next=newNode,
           current.next.next=aux;

            this.length++;
            return
         }
         current= current.next;
         counter++;

      }
    }

    forEach(fn){
      if(!this.head){
        return null
      }
      let current=this.head;
      while(current){
        if(!current)return
        if(typeof(fn)!=="function"){
          return "invalid parameter"
        }
        fn(current)
        current=current.next
      }
      
    }

    [Symbol.iterator](){
      
      let current= this.head;

      return {
        next(){
          
          if(current){
            const val = current
            current= current.next;
            return {value:val, done:false}
          }
          return {done:true}
        }
      }
    }
    

}
class Node {
    constructor(val, next=null){
       this.data=val;
       this.next=next;
    }
    
}

module.exports = { Node, LinkedList };
