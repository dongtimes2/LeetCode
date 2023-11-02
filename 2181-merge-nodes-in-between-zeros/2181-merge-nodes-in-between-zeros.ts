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

function mergeNodes(head: ListNode | null): ListNode | null {
  const list = [];
  const result = new ListNode(0, null);
  let sum = 0;
  let ptr = head.next;
  let ptr2 = result;
  
  while (true) {
    if (!ptr) {
      break;
    }
    
    if (ptr.val === 0) {
      list.push(sum);
      sum = 0;
      ptr = ptr.next;
    } else {
      sum += ptr.val;
      ptr = ptr.next;
    }
  }
  
  for (const value of list) {
    ptr2.next = new ListNode(value, null);
    ptr2 = ptr2.next;
  }
  
  return result.next;
};