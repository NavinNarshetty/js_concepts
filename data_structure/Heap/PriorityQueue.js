

class PrioprityQueue {
    constructor(){
        this.values=[];
    }

    enqueue(val,priority){
        const newNode = new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp(){
        let index = this.values.length -1;
        const element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element.priority <= parent.priority) break;
            this.values[parentIndex]= element;
            this.values[index]= parent;
            index = parentIndex;
        }
    }

    dequeue(){
        const max = this.values[0];
        const end = this.values.pop();

        if(this.values.length >0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown(){
        let index =0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIndex = 2 * index + 1 ;
            let rightChildIndex = 2 * index + 2;

            let leftChild,rightChild;
            let swap = null;

                if(leftChildIndex < length){
                    leftChild = this.values[leftChildIndex];
                    if(leftChild.priority > element.priority){
                        swap = leftChildIndex;
                    }
                }

                if(rightChildIndex < length){   
                    rightChild = this.values[rightChildIndex];
                    if(
                        (swap === null && rightChild.priority > element.priority)
                        ||
                        (swap != null && rightChild.priority > leftChild.priority)
                    ){
                        swap = rightChildIndex;
                    }
                }
                if(swap === null) break;
                this.values[index] = this.values[swap];
                this.values[swap]= element;
                index = swap;

        }
    }

}

class Node {
    constructor(val,priority){
        this.value = val;
        this.priority = priority;
    }
}

let ER = new PrioprityQueue()
ER.enqueue("Cold",3)
ER.enqueue("gunshot",5)
ER.enqueue("soar throat",1)
ER.enqueue("covid",4)