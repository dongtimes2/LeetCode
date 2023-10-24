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

function deepestLeavesSum(root: TreeNode | null): number {
  const data = [];
  
  const dfs = (node, level) => {
    if (!node) return;
    
    dfs(node?.left, level + 1);
    dfs(node?.right, level + 1);
    data.push({value: node?.val, level});
  }
  
  dfs(root, 0);
  
  let deepestLevel = 0;
  let result = 0;
    
  data.map(node => {
    if (node.level > deepestLevel) {
      deepestLevel = node.level;
    }
  });
    
  data
    .filter(node => node.level === deepestLevel)
    .map(node => {
      result += node.value;
  });
              
  
  return result;
};