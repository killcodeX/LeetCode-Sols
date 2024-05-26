// using Mono-Stack
var removeNodes = function (head) {
  let stack = [];
  let curr = head;

  while (curr) {
    while (stack.length > 0 && stack[stack.length - 1] < curr.val) {
      stack.pop();
    }
    stack.push(curr.val);
    curr = curr.next;
  }

  let node = new ListNode(0);
  let curr1 = node;

  for (let i = 0; i < stack.length; i++) {
    let newNode = new ListNode(stack[i]);
    curr1.next = newNode;
    curr1 = curr1.next;
  }

  return node.next;
};


// 