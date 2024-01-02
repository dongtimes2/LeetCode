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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;
  
  let ptr = head;
  const startPtr = head;
  
  while (true) {
    let nextPtr = ptr.next;
    
    while (true) {
      if (ptr.val === nextPtr?.val) {
        nextPtr = nextPtr.next;
      } else {
        break;
      }
    }
    
    ptr.next = nextPtr;
    ptr = ptr?.next;
    
    
    if (!ptr) {
      break;
    }
  }
  
  return startPtr;
};