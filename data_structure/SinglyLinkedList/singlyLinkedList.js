

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head= null;
        this.tail=null;
        this.length = 0;
    }


    // add value to the end of the list
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // removing values from the end of the list
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // removing values from the start of the list
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail= null;
        }
        return currentHead;

    }

    // adding value in the begining of the list
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this;

    }

    // get a new value from the specified index
    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }

        var counter =0;
        var current = this.head;
        while (counter != index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // set a new value at the specified index
    set(index , val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // insert a value in the given list at  specific index 
    insert(index,val){
        if(index< 0 || index > this.length) return false;
        if(index === 0){
            this.unshift(val);
            return true;
        }
        if(index === this.length){
            this.push(val);
            return true;
        }

        var newNode = new Node(val);
        var prevNode = this.get(index - 1);
        var temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true; 
    }


    // remove a value from the list at given specific index
    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0){
            this.shift();
            return true;
        }
        if(index === this.length -1){
            this.pop()
            return true
        }
        var prevNode = this.get(index - 1);
        var removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;
        return true;
    }

    // reverse the list 
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var next;
        var prev = null;
        for(var i=0;i<this.length;i++){
            next = node.next;
            node.next= prev;
            prev = node;
            node = next;
        }
        return this;
    }

    // for the debugging purpose
    print() {
        var arr=[];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}



// Remove Duplicate from the sorted linked list
function removeDuplicates(head){
    var node = head;
    while (head.next != null) {
        if(head.val === head.next.val){
            head.next = head.next.next;
        }else{
            head = head.next;
        }
    }
    return node;
}

