/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const last = arguments[2] || 0;

  const { val: value1, next: next1 } = l1 || {};
  const { val: value2, next: next2 } = l2 || {};
  const sum = (value1 || 0) + (value2 || 0) + last;
  const value = sum % 10;
  const b = Math.trunc(sum / 10);
  if (!next1 && !next2) {
      if (b === 0) {
          return {
              val: value,
              next: null
          };
      }
      return {
          val: value,
          next: {
              val: b
          }
      };
  }
  return {
      val: value,
      next: addTwoNumbers(next1, next2, b)
  };
};
