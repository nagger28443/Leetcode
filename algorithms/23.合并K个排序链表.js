/**
 * 链表操作
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const heads = lists.map(t => ({ ...new ListNode(0), next: t }));
  const h = new ListNode(0);
  let cur = h;
  while ((cur.next = getNode())) {
    cur = cur.next;
  }
  return h.next;

  function getNode() {
    const m = new ListNode(0);
    let index = -1;
    for (let i = 0; i < heads.length; ++i) {
      const cur = heads[i].next;
      if (cur && (!m.next || m.next.val > cur.val)) {
        m.next = cur;
        index = i;
      }
    }
    if (index >= 0) {
      heads[index].next = m.next.next;
    }
    return m.next;
  }
};
