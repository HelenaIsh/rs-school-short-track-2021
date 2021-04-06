/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function removeKFromList(l, k) {
  const cur = l;
  let newHead = null;
  let newTail = null;
  let hasNext = true;
  while (hasNext) {
    if (cur.value !== k) {
      const newNode = new ListNode(cur.value);
      if (newHead === null) {
        newHead = newNode;
        newTail = newNode;
      } else {
        newTail.next = newNode;
        newTail = newNode;
      }
    }
    if (cur.next === null) {
      hasNext = false;
    } else {
      cur.value = cur.next.value;
      cur.next = cur.next.next;
    }
  }
  return newHead;
}

module.exports = removeKFromList;
