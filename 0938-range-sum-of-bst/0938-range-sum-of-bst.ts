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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let result = 0;
  
  const dfs = (node) => {
    if (!node) return;
    if (node?.val >= low && node?.val <= high) {
      result += node?.val;
    }
    
    dfs(node?.left);    
    dfs(node?.right);
  };
  
  dfs(root);
  
  return result;
};