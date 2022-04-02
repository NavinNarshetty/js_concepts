
class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if(val === current.value) return undefined;
            if(val < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else{
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(val){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if(val < current.value){
                current = current.left;
            }else if(val> current.value){
                current = current.right;
            }else{
                found = true;
            }
        }
        if(!found) return false;
        return true;
    }

    // Breath First Search
    BFS(){  
        let node = this.root;
        let data = [];
        let queue=[];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data;                                    //[10,5,13,2,7,11,14]
    }

    DFSPreOrder(){
        let visited = [];
        let current = this.root;
        function traverse(node){
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right)
        }
        traverse(current);
        return visited;                             //[10,5,2,7,13,11,14]
    }

    DFSPostOrder(){
        let visited = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right)
            visited.push(node.value);
        }
        traverse(current);
        return visited;                            //[2,7,5,11,14,13,10]
    }

    DFSInorder(){
        let visited = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            visited.push(node.value);
            if(node.right) traverse(node.right)
        }
        traverse(current);
        return visited;                         //[2,5,7,10,11,13,14]
    }

    invert(){
        const current = this.root;
        function invertTree(node){
            if(!node || !node.left && !node.right) { // base case
                return node;
            }
            let oldLeft  =  node.left;
            node.left = node.right;
            node.right = oldLeft;
            
            invertTree(node.left);
            invertTree(node.right);
        }

        invertTree(current);
        return this;

    }

    findMaxHeight(node=this.root){
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    LeastCommonAncestor(node=this.root, v1,v2){
        if(node === null) return null;
        if(node.value == v1 ||  node.value == v2) return node;
        let leftNode = this.LeastCommonAncestor(node.left,v1,v2);
        let rightNode = this.LeastCommonAncestor(node.right,v1,v2);
        if(leftNode && rightNode) return node;
        if(!leftNode && !rightNode) return null;
        return leftNode ? leftNode : rightNode;
    }

}



//      10
//  5       13
//2    7   11   14


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(13)

tree.insert(11)
tree.insert(14)

console.log(tree.validBST(tree.root));

// console.log(tree.DFSInorder())
// console.log(tree)