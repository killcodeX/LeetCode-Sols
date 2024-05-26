function reverse(head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
}

var removeNodes = function (head) {
  let revNode = reverse(head);
  let res = new ListNode(0);
  let tempCurr = res;

  while (revNode) {
    if (revNode.val >= tempCurr.val) {
      tempCurr.next = new ListNode(revNode.val);
      tempCurr = tempCurr.next;
    }
    revNode = revNode.next;
  }
  return reverse(res.next);
};
