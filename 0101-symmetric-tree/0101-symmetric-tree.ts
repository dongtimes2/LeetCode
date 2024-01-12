/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  const result1 = [];
  const result2 = [];
  
  const find1 = (node: TreeNode) => {
    if (!node) {
      result1.push(-1);
      return
    };
    
    find1(node.left);
    find1(node.right);
    result1.push(node.val);
  }
  
  const find2 = (node: TreeNode) => {
    if (!node) {
      result2.push(-1);
      return
    };
    
    find2(node.right);
    find2(node.left);
    result2.push(node.val);
  }
  
  find1(root);
  find2(root);
  
  console.log(result1);
  console.log(result2);
  
  return result1.join('#') === result2.join('#');
};