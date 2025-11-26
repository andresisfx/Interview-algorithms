// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    // *first solution
    // let count=0
    // let current=list.head;
    // while (current.next) {
    //     current= current.next;
    //     count++
    // }
    // return list.getAt(count-n)
    
    //* second solution
    // let slow=list.getFirst();
    // let fast= list.getAt(n+1)
    // while(fast.next){
    //     fast= fast.next;
    //     slow=slow.next;
    // }
    // return slow;
    //* third solution

    let fast = list.getFirst();
    let slow = list.getFirst()

    while(n > 0){
        fast = fast.next;
        n--
    }
    while(fast.next){
        fast=fast.next;
        slow=slow.next;
    }
    return slow
    
}

module.exports = fromLast;
