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
    curr = head
    
    //bubble sort
    for(let i = head; i != null; i=i.next){
        for(let j = i.next; j != null; j=j.next){
            if(i.val > j.val){
                let temp = i.val;
                i.val = j.val
                j.val = temp
            }
        }
    }
    
   return head
};











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
    
   // simple sort but much usefull for other data types or large data input
    for(let i = head; i != null; i=i.next){
        for(let j = i.next; j != null; j=j.next){
            if(i.val > j.val){
                let temp = i.val;
                i.val = j.val
                j.val = temp
            }
        }
    }
    
   return head
};