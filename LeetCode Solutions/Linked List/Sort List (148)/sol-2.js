/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
    if(!head) return head
    
    let length = 0
    let curr = head
    
    // get list length
    while(curr){
        length++
        curr = curr.next
    }
    
    //bubble sort
    for(let i = 0; i <= length; i++){
        curr = head
        for(let j = 0; j < length - i - 1; j++){
            let p = curr
            let q = curr.next
            if(p.val > q.val){
                let temp = p.val
                p.val = q.val
                q.val = temp
            }
            curr = curr.next
        }
    }
    
   return head
};