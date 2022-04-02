const countLeafOfTree = function(root){
    if(!root) return false;
    if(!root.left && !root.right) return 1;
    return countLeafOfTree(root.left) + countLeafOfTree(root.right);
}