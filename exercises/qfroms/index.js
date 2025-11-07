// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');


class Queue {
     
  
    constructor(){
       this.stack1 = new Stack();
       this.stack2 = new Stack();
    }

    add(record){
      this.stack1.push(record);
    }
    remove(){
        // if(!this.stack2.peek()){
        //       while(this.stack1.peek()){
        //        this.stack2.push(this.stack1.pop());
              
        //       }
        //       return this.stack2.pop()
        // }else{
        //     return this.stack2.pop()
        // }

        //*second alternative
        while (this.stack1.peek()) {
            this.stack2.push(this.stack1.pop());
        }
        const lastEWlement = this.stack2.pop() ;

        while (this.stack2.peek()) {
            this.stack1.push(this.stack2.pop());
        }
        return lastEWlement

    }
    peek(){
         if(!this.stack2.peek()){
              while(this.stack1.peek()){
               this.stack2.push(this.stack1.pop());
              
              }
              return this.stack2.peek()
        }else{
            return this.stack2.peek()
        }
    }
}
console.log()

module.exports = Queue;
