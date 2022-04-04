

function leftViewOfTree(root){
    let max_level=0;
    let result=[];
    function leftViewUtil(node, level){
        if(node === null) return;
        if(max_level < level){
            result.push(node.val);
            max_level = level;
        }
        leftViewUtil(node.left, level + 1);
        leftViewUtil(node.right, level + 1);
    }
    leftViewUtil(root , 1);
    return result;

}

