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

function sumEvenGrandparent(root: TreeNode | null): number {
  const target = [0];
  
  const find = (node) => {
    if (!node) return;
    
    if (node.val % 2 === 0) {
      target.push(node?.left?.left?.val ?? 0);
      target.push(node?.left?.right?.val ?? 0);
      target.push(node?.right?.left?.val ?? 0);
      target.push(node?.right?.right?.val ?? 0);
    }
    
    find(node.left);
    find(node.right);
  }
  
  find(root);
  
  return target.reduce((acc, cur) => acc + cur);
};