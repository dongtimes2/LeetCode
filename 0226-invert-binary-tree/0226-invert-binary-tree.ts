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

function invertTree(root: TreeNode | null): TreeNode | null {
  const bfs = (node: TreeNode) => {
    const queue = [node];
    
    while(queue.length) {
      const item = queue.shift();
      const temp = item.right!;
      
      item.right! = item.left!;
      item.left! = temp;
      
      if (item.left) {
        queue.push(item.left);
      }
      
      if (item.right) {
        queue.push(item.right);
      }
      
     
    }
  };
  
  if (root) {
    bfs(root);
  }
  
  return root;
};