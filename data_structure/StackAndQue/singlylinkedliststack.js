

// LIFO - Last In First Out;

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size=0;
    }

    /**
     * 
     * @param {number} val 
     * @returns {number} size of stack
     */
    push(val){
        let newNode = new Node(val);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let temp = this.first;
            this.first = newNode;
            this.first.next= temp;
        }
        return ++this.size;

    }

    pop(){
        if(!this.first) return null;
        if(this.size ===0){
            this.last = null;
        }
        let temp = this.first;
        this.first = temp.next;
        this.size--;
        return temp.val;
    }
}



/**
 * Stack can also be implemented by using array where we can make use of push and pop methods to acheive
 * to make use of singlylinkedlist we have renamed unshift and shift methods to push and pop reason to do that
 * is to acheive the constant time since in singlylinked list for pop we usually loop over each item which lead to O(n)
 */


/**
 * Stack With array methods 
 * 
 * There are 2 ways of doing it 
 * Push and pop 
 * shift and unshift
 */