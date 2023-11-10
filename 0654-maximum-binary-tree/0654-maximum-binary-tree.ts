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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  let node = null;
  
  const func = (arr) => {
    if (arr.length === 0) return null;
    
    const max = Math.max(...arr);
    const maxIdx = arr.indexOf(max);
    const tree = new TreeNode(max, null, null);
    
    
    tree.left = func(arr.slice(0, maxIdx));
    tree.right = func(arr.slice(maxIdx + 1, arr.length));
    return tree;
  }
  
  return func(nums);
};