/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getDecimalValue(head: ListNode | null): number {
  const data = [];
  
  const find = (node: ListNode) => {
    if (!node) return;
    
    data.push(node.val);
    find(node.next);
  }
  
  find(head);
  
  return parseInt(data.join(''), 2);
};