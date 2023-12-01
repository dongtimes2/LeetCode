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

function isBalanced(root: TreeNode | null): boolean {
  if(!root) return true;
  
  let result = true;
  
  const find = (node) => {
    if (!node) return 0;
    
    const left = find(node.left);
    const right = find(node.right);
    
   
    if (Math.abs(right - left) > 1) {
      result = false;
    }
    
    return Math.max(left, right) + 1;
  }
  
  find(root);
  
  return result;
};