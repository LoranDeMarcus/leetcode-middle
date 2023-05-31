function isValidBST(root) {
  return checkBST(root, -Infinity, Infinity);
}

function checkBST(node, min, max) {
  if (node == null) {
    return true;
  }
  if (node.val <= min || node.val >= max) {
    return false;
  }
  return checkBST(node.left, min, node.val) && checkBST(node.right, node.val, max);
}
