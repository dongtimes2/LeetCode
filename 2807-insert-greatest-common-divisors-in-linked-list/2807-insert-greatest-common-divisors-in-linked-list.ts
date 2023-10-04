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

const gcd = (a: number, b: number) => {
  const [n, m] = a > b ? [a, b] : [b, a];

  if (n % m === 0) {
    return m;
  } else {
    return gcd(m, n % m);
  }
};

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  if (!head.next) return head;
  let ptr = head;

  while (ptr?.next) {
    const newNode = new ListNode(gcd(ptr.val, ptr?.next?.val), null);
    
    newNode.next = ptr?.next;
    ptr.next = newNode;
    ptr = ptr?.next?.next;
  }

  return head;
};