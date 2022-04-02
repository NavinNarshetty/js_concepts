class Node {
    constructor(val){
        this.value = val;
        this.left= null;
        this.right= null;
    }
}

class BST{
    constructor(){
        this.root= null;
    }
}


const isValidBST = function (node){
    return isValidBSTHelperFn(node, null , null)
}

const isValidBSTHelperFn = function (root , min , max) {
    if(!root) return true;

    if((min !== null && root.value <= min)){
        return false;
    }

    if((max != null && root.value >= max)){
        return false;
    }

    let leftpart = this.isValid(root.left,min,root.value);
    let rightpart = this.isValid(root.right,root.value,max);
    return leftpart && rightpart
}