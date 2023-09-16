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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const find = (listNode: ListNode | null) => {
    let result = '';

    const rec = (node: ListNode | null) => {
      if (node?.next) {
        rec(node.next);
      }

      result += node?.val;
    }

    rec(listNode)
    return result;
  };

  const result = (BigInt(find(l1)) + BigInt(find(l2))).toString().split("").reverse();
  const resultNode = new ListNode(Number(result[0]), null);
  let pointer = resultNode;

  for (let i = 1; i < result.length; i++) {
    const newNode = new ListNode(Number(result[i]), null);
    pointer.next = newNode;
    pointer = pointer.next;
  }

  return resultNode;
};
