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

function averageOfSubtree(root: TreeNode | null): number {
  let result = 0;

  const dfs = (node) => {
    if (!node) {
      return { count: 0, sum: 0 };
    }

    const lresult = dfs(node?.left);
    const rresult = dfs(node?.right);
    
    const totalCount = lresult?.count + rresult?.count + 1;
    const totalSum = lresult?.sum + rresult?.sum + node?.val
    const avg = Math.floor(totalSum / totalCount);

    if (avg === node?.val) {
      result++;
    }
      

    return {count: totalCount, sum: totalSum};
  }

  dfs(root);

  return result;
};