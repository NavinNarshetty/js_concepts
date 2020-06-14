/**
 * You’re given the pointer to the head nodes of two sorted linked lists. 
 * The data in both lists will be sorted in ascending order. Change the next pointers to obtain a single, merged linked list which also has data in ascending order. 
 * Either head pointer given may be null meaning that the corresponding list is empty.
 */



//Node structure

const SinglyLinkedListNode = class {
     constructor(val){
         this.data = val;
         this.next = null;
     }
};

/**
 * 
 * @param {SinglyLinkedListNode} head1 
 * @param {SinglyLinkedListNode} head2 
 * @returns {SinglyLinkedListNode} head3
 */

 function mergeLists(head1,head2){
    // check for the null pointers
    if(!head1) return head2;
    if(!head2) return head1;

    //initalize a new head
    let head3 = null;

    //point head3 to first value 

    if(head1.data < head2.data){
        head3 = head1;
        head1 = head1.next;
    }else{
        head3 = head2;
        head2= head2.next;
    }

    //keep the refrence of the head3 node

    let current_node = head3;

    //loop over the list simultaneously
    while(head1 != null && head2 != null){
        if(head1.data < head2.data){
            current_node.next = head1;
            head1=head1.next
        }else{
            current_node.next = head2;
            head2=head2.next
        }

        current_node= current_node.next;
    }

    //if the loop break in between for eg the length do not be same then
    if(head1 === null) {
        current_node.next = head2;
    }else{
        current_node.next = head1;
    }
    return head3
 }