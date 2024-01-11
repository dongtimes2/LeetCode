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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const seq1:number[] = [];
  const seq2:number[] = [];
  
  const find = (node: TreeNode, arr: number[]) => {
    const seek = (node: TreeNode) => {
      if (!node) return;
      if (!node.left && !node.right) {
        arr.push(node.val);
      } else {
        seek(node.left);
        seek(node.right);    
      }
    }
    
    seek(node);
  };
  
  find(root1, seq1);
  find(root2, seq2);
  
  return seq1.join('#') === seq2.join('#');
};