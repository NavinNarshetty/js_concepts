


// This is a "method-only" submission.

//Node structure

const SinglyLinkedListNode = class {
    constructor(val){
        this.data = val;
        this.next = null;
    }
};


/**
 * 
 * @param {SinglyLinkedListNode} headA 
 * @param {SinglyLinkedListNode} headB 
 * @returns{Number} 
 */



function findMergeNode(headA , headB){

    // initalize the length variables;
    let headA_length = 0;
    let headB_length =0;

    //initalize the new copy pointer to heads
    let headA_pointer = headA;
    let headB_pointer = headB;

    // finding length of heaA
    while (headA_pointer != null) {
     headA_pointer = headA_pointer.next;
     headA_length++;        
    }

    // finiding the length of heabB
    while (headB_pointer != null) {
        headB_pointer = headB_pointer.next;
        headB_length++;
    }

    //find the diffrence 
    let diffrence_in_headLength = headA_length - headB_length;

    // if headB_length is greater then headA_length swap the list;
    if(headB_length > headA_length){
        let temp = headA;
        headA = headB;
        headB = temp;
        diffrence_in_headLength = headB_length - headA_length
    }


    // move the highest length linked list by the diffrence obtained

    while (diffrence_in_headLength != 0) {
        headA = headA.next;
        diffrence_in_headLength--;
    }

    while (headA != null) {
        if(headA == headB){
            return headA.data;
        }
        headA = headA.next;
        headB = headB.next;
    }   
    return -1;





}