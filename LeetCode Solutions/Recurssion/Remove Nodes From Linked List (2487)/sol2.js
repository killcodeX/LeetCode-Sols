// Using recursion
var removeNodes = function (head) {
  if (!head) return null;
  let node = head;
  let nxtGreater = removeNodes(node.next);
  node.next = nxtGreater;

  if (!nxtGreater || node.val >= nxtGreater.val) {
    return node;
  }

  return nxtGreater;
};
