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

function tree2str(root: TreeNode | null): string {
  let result = '';
  
  const find = (node: TreeNode) => {
    if (!node) return;
    
    result += node.val.toString();
    if (node.left || node.right) {
      result += '(';    
    }
    find(node.left);
    if (node.left || node.right) {
      result += ')';
    }
    if (node.right) {
      result += '(';
    }
    find(node.right);
    if (node.right) {
      result += ')';
    }
  };
  
  find(root);
  
  return result; 
};